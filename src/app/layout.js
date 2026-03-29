import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "BroCollie Dashboard",
  description: "Track your nutrition with Open Food Facts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <main className="flex flex-row min-h-screen">
            <Sidebar />
            <div className="flex-1 w-full overflow-x-hidden bg-white">
              {children}
            </div>
          </main>
        </Theme>
      </body>
    </html>
  );
}