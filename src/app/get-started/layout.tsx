import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started | Cha-ching',
  description: 'Get started with Cha-ching',
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
