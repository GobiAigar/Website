import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";

import ClientProviders from "../ClientProviders";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;

  const fallbackLocale =
    localeCookie === "en" || localeCookie === "mn" ? localeCookie : "mn";

  const messages = (
    await import(`../../../locales/${fallbackLocale}/common.json`)
  ).default;

  return (
    <NextIntlClientProvider messages={messages} locale={fallbackLocale}>
      <ClientProviders>
        <Header />
        {children}
        <Footer />
      </ClientProviders>
    </NextIntlClientProvider>
  );
}
