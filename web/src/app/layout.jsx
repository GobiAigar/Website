import "./globals.css";
import Script from "next/script";
import Analytics from "./_analytics";
import AppThemeProvider from "./theme-provider";
import ClientProviders from "./ClientProviders";
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Gobi Aigar LLC",
  description: "Cashmere",
  keywords: [
    "Gobi Aigar",
    "Gobi aigar",
    "gobiaigar",
    "Cashmere",
    "Mongolian Cashmere",
    "Cashmere manufacture",
    "Монгол ноолуур",
    "Говь айгар",
    "Ноолуурын үйлдвэрлэл",
    "Cashmere production",
  ],
  icons: {
    icon: "/smallLogo.png",
  },
};

export default async function RootLayout({ children }) {
  const cookieStore = cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;

  const fallbackLocale =
    localeCookie === "en" || localeCookie === "mn" ? localeCookie : "mn";

  const messages = (await import(`../../locales/${fallbackLocale}/common.json`))
    .default;

  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-9TCLSPVFEL`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9TCLSPVFEL', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <link rel="icon" href="/smallLogo.png.png" />
      </head>
      <body>
        <AppThemeProvider>
          <NextIntlClientProvider messages={messages} locale={fallbackLocale}>
            <ClientProviders>
              <Header />
              {children}
              <Footer />
            </ClientProviders>
          </NextIntlClientProvider>
        </AppThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
