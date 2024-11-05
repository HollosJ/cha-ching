import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started | Cha-Ching',
  description: 'Get started with Cha-Ching',
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
