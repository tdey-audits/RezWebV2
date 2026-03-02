import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "RezLabs",
    description: "RezLabs Website",
    icons: {
        icon: "/assets/rez.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@100..900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
            </head>
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
