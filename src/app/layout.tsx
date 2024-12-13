import { ThemeProvider } from "next-themes";

import './globals.css'
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/Shared/Header"; 
import Footer from "@/components/Shared/Footer"; 




export const metadata = {
  title: "Ardhi App",
  description: "Ardhi simplifies geospatial analysis, enabling users to visualize and download data effortlessly, supporting data-driven decisions across diverse industries.",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  fallback: ["sans-serif"],
});


export default async function RootLayout({ children
}: Readonly<{ 
  children: React.ReactNode
}>) {
  //const isSignInPage = true; // Explicitly set to true for this page

  return (
      <html lang="en" className={spaceGrotesk.className} suppressHydrationWarning>
          <body className="bg-background text-foreground">
              <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
              >
                  <div className="min-h-screen flex flex-col">
                      {/* ---------------- Header ---------------- */}
                      {/* {!isSignInPage && <Header />}  */}
                      <Header />
                      {/* ---------------- Main ---------------- */}
                      <main className="flex flex-grow gap-20 max-w-5xl p-3">
                          {children}
                      </main>
                      {/* ---------------- Footer ---------------- */}
                      {/* {!isSignInPage  && <Footer />}  */}
                      <Footer />
                  </div>
              </ThemeProvider>
          </body>
      </html>
  );
}