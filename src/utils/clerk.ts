import { auth } from '@clerk/nextjs/server';

/**
 * Get the session token for API requests to Django backend
 * This token can be sent to your Django backend to verify the user
 */
export async function getSessionToken(): Promise<string | null> {
  const { getToken } = await auth();
  return await getToken();
}

/**
 * Get the current user ID for API requests
 */
export async function getCurrentUserId(): Promise<string | null> {
  const { userId } = await auth();
  return userId;
}
