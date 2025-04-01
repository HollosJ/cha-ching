"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function GetStartedButton({
  className,
}: {
  className?: string;
}) {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    setData(storedData);
  }, []);

  return (
    <Link
      href={data ? "/dashboard" : "/get-started"}
      className={`button button--primary ${className || ""}`}
    >
      {data ? "My Dashboard" : "Get Started"}
    </Link>
  );
}
