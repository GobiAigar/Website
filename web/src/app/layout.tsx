import "./globals.css";
import Script from "next/script";
import Analytics from "./_analytics";
import AppThemeProvider from "./theme-provider";

export const metadata = {
  title: "Gobi Aigar",
  description: "Cashmere",
  icons: {
    icon: "/smallLogo.png",
  },
};

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
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
