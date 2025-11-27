// app/page.tsx
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <UserButton />
    </div>
  );
}
