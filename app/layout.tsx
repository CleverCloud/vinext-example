import "./globals.css";

export const metadata = {
  title: "Vinext on Clever Cloud",
  description: "Next.js reimagined with Vite, deployed on Clever Cloud with Bun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
