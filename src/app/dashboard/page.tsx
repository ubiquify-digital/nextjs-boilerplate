'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();

  const { getToken } = useAuth();
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchSessionToken = async () => {
      const token = await getToken();
      setSessionToken(token);
    };
    fetchSessionToken();
  }, [getToken]);

  console.log(sessionToken);
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-zinc-600 dark:text-zinc-400">Loading...</p>
      </div>
    );
  }

  if (!isSignedIn) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
            <div className="flex flex-col items-center sm:items-start gap-6">
              <div className="flex items-center gap-4 w-full">
                {user?.imageUrl && (
                  <img
                    src={user.imageUrl}
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-2 border-zinc-200 dark:border-zinc-700"
                  />
                )}
                <div>
                  <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
                    Welcome,{' '}
                    {user?.fullName ||
                      user?.firstName ||
                      user?.username ||
                      'User'}
                    !
                  </h1>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                    Dashboard
                  </p>
                </div>
              </div>

              <div className="w-full border-t border-zinc-200 dark:border-zinc-700 pt-6">
                <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">
                  User Information
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      User ID
                    </p>
                    <p className="text-base text-black dark:text-zinc-50 font-mono">
                      {user?.id}
                    </p>
                  </div>
                  {user?.emailAddresses && user.emailAddresses[0] && (
                    <div>
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        Email
                      </p>
                      <p className="text-base text-black dark:text-zinc-50">
                        {user.emailAddresses[0].emailAddress}
                      </p>
                    </div>
                  )}
                  {user?.firstName && (
                    <div>
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        First Name
                      </p>
                      <p className="text-base text-black dark:text-zinc-50">
                        {user.firstName}
                      </p>
                    </div>
                  )}
                  {user?.lastName && (
                    <div>
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        Last Name
                      </p>
                      <p className="text-base text-black dark:text-zinc-50">
                        {user.lastName}
                      </p>
                    </div>
                  )}
                  {sessionToken && (
                    <div>
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        Session Token
                      </p>
                      <p className="text-base text-black dark:text-zinc-50 wrap-break-word">
                        {sessionToken}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full border-t border-zinc-200 dark:border-zinc-700 pt-6">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  This is your protected dashboard. You can integrate with your
                  Django backend using the user ID or session token.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
