import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Cha-ching',
  description: 'View your financial dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
