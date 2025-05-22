"use client";

import { AppDataProvider } from "../context/AppDataProvider";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppDataProvider>{children}</AppDataProvider>;
}
