import Head from 'next/head'
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Annie Pang - Data Scientist & ML Engineer",
  description: "Portfolio website for Annie Pang, Data Scientist and Machine Learning Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}