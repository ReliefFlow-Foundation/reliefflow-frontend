import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "ReliefFlow",
    template: "%s | " + "ReliefFlow",
  },
  description: "Emergency aid disbursement with integrity.",
  applicationName: "ReliefFlow",
  openGraph: {
    title: "ReliefFlow",
    description: "Emergency aid disbursement with integrity.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReliefFlow",
    description: "Emergency aid disbursement with integrity.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
};

const nav = [
  ["Programs", "/programs"],
  ["Disbursement", "/disbursement"],
  ["Integrity", "/integrity"],
  ["Impact", "/impact"],
  ["Roadmap", "/roadmap"],
  ["Docs", "/docs"],
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <div className="container nav-inner">
            <Link href="/" className="brand brand-with-logo">
              <Image
                src="/icon.svg"
                alt=""
                width={38}
                height={38}
                className="nav-logo"
                unoptimized
              />
              <span className="brand-text">ReliefFlow</span>
            </Link>
            <nav className="links">
              {nav.map(([label, href]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

// patch: 2026-06-11T10:49:24.705876

// patch: 2026-06-27T07:59:59.999988

// patch: 2026-07-06T14:21:10.588220
