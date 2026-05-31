// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "QuickToolKit - Free Online Tools",
//   description:
//     "QuickToolKit provides free online tools like Age Calculator, Percentage Calculator, Word Counter, and more for students, developers, and everyday users.",
//   keywords: [
//     "free online tools",
//     "age calculator",
//     "percentage calculator",
//     "word counter",
//     "student tools",
//     "developer tools",
//     "QuickToolKit",
//   ],
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
//     >
//       <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 overflow-x-hidden">

//         {/* MAIN CONTENT */}
//         <div className="flex-1 w-full">
//           {children}
//         </div>

//       </body>
//     </html>
//   );
// }


// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// // Configure your primary production domain name here
// const siteUrl = "https://quicktoolkit.com"; 

// export const metadata: Metadata = {
//   metadataBase: new URL(siteUrl),
//   title: {
//     default: "QuickToolKit - Free Online Tools for Everyday Use 🚀",
//     template: "%s | QuickToolKit"
//   },
//   description:
//     "Access free online tools on QuickToolKit. Calculate, convert, generate, and optimize tasks instantly with our Age Calculator, Word Counter, and developer utilities. No signups required.",
//   keywords: [
//     "free online tools",
//     "age calculator online",
//     "percentage calculator free",
//     "word counter tool",
//     "bmi calculator free",
//     "qr code generator online",
//     "secure password generator",
//     "student web tools",
//     "developer utilities online",
//     "QuickToolKit",
//   ],
//   authors: [{ name: "QuickToolKit Team" }],
//   creator: "QuickToolKit",
//   publisher: "QuickToolKit",



//   // Canonical URLs prevent duplicate content indexing issues
//   alternates: {
//     canonical: "/",
//   },

//   // Open Graph protocol for optimized presentation on Facebook/LinkedIn/WhatsApp
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteUrl,
//     title: "QuickToolKit - Free Online Tools for Everyday Use",
//     description: "Instantly solve daily tasks with our high-speed, 100% free online calculators, converters, and text utilities. No signup, no ads, completely secure.",
//     siteName: "QuickToolKit",
//     images: [
//       {
//         url: "/og-image.png", // Make sure to place an image banner in your public/ directory later
//         width: 1200,
//         height: 630,
//         alt: "QuickToolKit - Free Online Tools Dashboard",
//       },
//     ],
//   },

//   // Twitter/X Card formatting
//   twitter: {
//     card: "summary_large_image",
//     title: "QuickToolKit - Free Online Tools for Everyday Use",
//     description: "Instantly solve daily tasks with our high-speed, 100% free online calculators, converters, and text utilities.",
//     images: ["/og-image.png"],
//   },

//   // Tells search bots to index the page and follow all links
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
//     >
//       <head>
//         {/* Favicon links */}
//         <link rel="icon" href="/Logo.png" sizes="any" />
//         <link rel="icon" type="image/png" href="/Logo.png" />
//         <link rel="apple-touch-icon" href="/Logo.png" />
//       </head>

//       <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 overflow-x-hidden">

//         {/* MAIN CONTENT */}
//         <div className="flex-1 w-full">
//           {children}
//         </div>

//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure your primary production domain name here
const siteUrl = "https://quicktoolkit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // FAVICON
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },

  title: {
    default: "QuickToolKit - Free Online Tools for Everyday Use 🚀",
    template: "%s | QuickToolKit",
  },

  description:
    "Access free online tools on QuickToolKit. Calculate, convert, generate, and optimize tasks instantly with our Age Calculator, Word Counter, and developer utilities. No signups required.",

  keywords: [
    "free online tools",
    "age calculator online",
    "percentage calculator free",
    "word counter tool",
    "bmi calculator free",
    "qr code generator online",
    "secure password generator",
    "student web tools",
    "developer utilities online",
    "QuickToolKit",
  ],

  authors: [{ name: "QuickToolKit Team" }],
  creator: "QuickToolKit",
  publisher: "QuickToolKit",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "QuickToolKit - Free Online Tools for Everyday Use",
    description:
      "Instantly solve daily tasks with our high-speed, 100% free online calculators, converters, and text utilities. No signup, no ads, completely secure.",
    siteName: "QuickToolKit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuickToolKit - Free Online Tools Dashboard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "QuickToolKit - Free Online Tools for Everyday Use",
    description:
      "Instantly solve daily tasks with our high-speed, 100% free online calculators, converters, and text utilities.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
//     >
//       <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 overflow-x-hidden">
//         <div className="flex-1 w-full">
//           {children}
//         </div>

//         <Analytics />
//         <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5124781684116478" crossorigin="anonymous"></script>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 overflow-x-hidden">
        <div className="flex-1 w-full">
          {children}
        </div>

        {/* Vercel Analytics */}
        <Analytics />

        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5124781684116478"
          crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}