import { ThemeProvider } from "next-themes";

import './globals.css'
import { ThemeSwitcher } from "@/components/Shared/theme-switcher";
import { Space_Grotesk } from "next/font/google";

export const metadata = {
  title: "Ardhi App",
  description: "Ardhi simplifies geospatial analysis, enabling users to visualize and download data effortlessly, supporting data-driven decisions across diverse industries.",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  fallback: ["sans-serif"],
});


export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceGrotesk.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col">

            {/* ---------------- Header ---------------- */}

            {/* ---------------- Main ---------------- */}
            <div className="flex flex-grow gap-20 max-w-5xl p-3">
              {children}
            </div>

            {/* ---------------- Footer ---------------- */}
            <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
              <p>
                {new Date().getFullYear()}, Powered by{" "}
                <a
                  href="https://ardhi.de/"
                  target="_blank"
                  className="font-sm hover:underline text-green-500"
                  rel="noreferrer"
                >
                  &copy; Ardhi
                </a>
              </p>
              <ThemeSwitcher />
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}