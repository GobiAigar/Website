import "./globals.css";
import { Roboto } from "next/font/google";
import Script from "next/script";
import Analytics from "./_analytics";
import AppThemeProvider from "./theme-provider";

export const metadata = {
  title: "Gobi Aigar",
  description: "Cashmere",
  icon: { url: "/IMG_3198.PNG", type: "image/png" },
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <body className={roboto.className}>
        <AppThemeProvider>{children}</AppThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
