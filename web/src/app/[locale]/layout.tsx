import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import ClientProviders from "../ClientProviders";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../../locales/${locale}/common.json`))
    .default;

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ClientProviders>
        <Header />
        {children}
        <Footer />
      </ClientProviders>
    </NextIntlClientProvider>
  );
}
