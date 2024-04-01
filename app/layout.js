import { Handlee } from 'next/font/google';
import './globals.css';

const handlee = Handlee({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Teklez Blog',
  description: 'Lesbian Book Blog',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-slate-900 max-w-3xl text-lg mx-auto py-20 px-4 w-screen text-white"
    >
      <body className={handlee.className}>{children}</body>
    </html>
  );
}
