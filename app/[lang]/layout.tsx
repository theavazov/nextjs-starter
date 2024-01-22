import "@/utils/styles/main.css";
import { Locale, i18n } from "@/i18n.config";
import ReduxProvider from "./redux";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <ReduxProvider>
        <body className={inter.className}>
          <main>{children}</main>
        </body>
      </ReduxProvider>
    </html>
  );
}
