import "./globals.css";

export const metadata = {
  title: "NutriPro Dashboard",
  description: "Track your nutrition with Open Food Facts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}