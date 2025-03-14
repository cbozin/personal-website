"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./globals.css";
import { dark } from "@mui/material/styles/createPalette";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Carolyn's website",
//   description: "Generated by create next app",
// };

const theme = createTheme({
  palette: {
    mode: "dark",
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
