import "./globals.css";
import Starfield from "../components/Starfield";
import { Toaster } from "sonner";

export const metadata = {
  title: "Aaladin AI: Your Tech Genie - Granting Your Digital Wishes",
  description:
    "Aaladin AI is your genie in the world of artificial intelligence. Just like a magical wish, we turn your ideas into powerful AI solutions, SaaS platforms, and next-generation software. Your wish, our AI – innovation, automation, and success, delivered with a genie’s touch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased text-white`}>
        {/* <Starfield /> */}
        {children}
        <Toaster position="top-right" theme="dark" richColors closeButton />
      </body>
    </html>
  );
}
