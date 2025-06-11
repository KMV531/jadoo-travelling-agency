import { Volkhov, Poppins } from "next/font/google";
import "./globals.css";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"], // adjust based on what you need
  variable: "--font-volkhov",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Jadoo – Explore the World with Hassle-Free Travel Experiences",
  description:
    "Plan unforgettable journeys with Jadoo, your trusted travel agency for dream vacations, curated trips, and affordable adventures. Discover destinations, book easily, and travel smarter.",
  keywords: [
    "Jadoo travel agency",
    "affordable travel deals",
    "book trips online",
    "holiday packages",
    "world travel agency",
    "vacation planning",
    "luxury travel services",
    "travel experiences",
    "tour packages",
    "best travel agency website",
  ],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  openGraph: {
    title: "Jadoo – Your Gateway to Memorable Travel",
    description:
      "From exotic getaways to family vacations, Jadoo helps you plan, book, and enjoy seamless travel experiences. Start your next adventure today.",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    siteName: "Jadoo",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/assets/images/Traveller 1.png`, // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Jadoo Travel – Explore Destinations Worldwide",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jadoo – Explore the World with Confidence",
    description:
      "Discover and book your next trip with Jadoo, a modern travel agency offering curated journeys, tours, and stress-free experiences.",
    images: [`${process.env.NEXT_PUBLIC_URL}/assets/images/Traveller 1.png`],
  },
  icons: {
    icon: "/assets/images/Traveller 1.png",
    shortcut: "/assets/images/Traveller 1.png",
    apple: "/assets/images/Traveller 1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${volkhov.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
