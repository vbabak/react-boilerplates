import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Page() {
  const ms = new Date().getMilliseconds();
  return <div>
    <h3>Home Page! {ms}</h3>
    <p><Link href="/login">Login</Link></p>
    <p><Link href="/dashboard">Dashboard</Link></p>
  </div>;
}
