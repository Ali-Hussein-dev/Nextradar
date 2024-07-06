import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={inter.className + " scroll-smooth antialiased"}
      suppressHydrationWarning
    >
      <head>
        <script
          defer
          src="https://aliytics.netlify.app/script.js"
          data-website-id="176aa3d6-7cb7-4bef-af6a-644d42b42833"
        ></script>
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
