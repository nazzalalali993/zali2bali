import type { Metadata } from "next";
import "./globals.css";
import { defaultMetadata, organizationSchema } from "@/lib/metadata";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ScrollAnimations from "@/components/scroll-animations";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Build: July 2026 */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
