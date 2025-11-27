'use client';

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between">
      <Link href="/">Home</Link>

      <SignedOut>
        <Link href="/sign-in">Sign In</Link>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}
