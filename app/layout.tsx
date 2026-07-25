import type { Metadata } from 'next';
import { Inter, Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Sunrise College of Nursing, Dahod | Nursing College & School',
  description: 'Sunrise College of Nursing, Dahod — approved by the Gujarat Nursing Council & affiliated to Shri Govind Guru University. Admissions open for M.Sc, P.B.B.Sc, B.Sc Nursing, GNM, ANM & D.M.L.T, plus Sunrise Public School (Grades 1-12).',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-900 bg-white">
        {children}
      </body>
    </html>
  );
}
