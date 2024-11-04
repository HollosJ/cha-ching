'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('data');

    // If there is no data, redirect to the get started page, otherwise redirect to the dashboard
    if (!data) {
      router.push('/get-started');
    } else {
      router.push('/dashboard');
    }
  }, []);

  return null;
}
