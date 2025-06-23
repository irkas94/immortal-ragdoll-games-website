import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Immortal Ragdoll Games - We Make Games That Hit Like a Bat Full of Nails",
  description: "Texas-based indie studio crafting stylized, emotional, character-driven survival horror experiences using Unreal Engine and AI-powered workflows. Founded by award-winning VFX artist Robert Alomar.",
  keywords: "indie games, horror games, survival horror, game development, Texas, Unreal Engine, AI-powered workflows, Robert Alomar, VFX artist, Shang-Chi, Sonic the Hedgehog, Cats, Hollywood VFX, Deadlight Manor",
  authors: [{ name: "Immortal Ragdoll Games - Robert Alomar" }],
  creator: "Immortal Ragdoll Games",
  openGraph: {
    title: "Immortal Ragdoll Games - Hollywood VFX Meets Indie Gaming",
    description: "We make games that hit like a bat full of nails. Texas-based indie studio with Hollywood VFX expertise.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Immortal Ragdoll Games - Robert Alomar",
    description: "Hollywood VFX expertise meets indie gaming excellence.",
    creator: "@ImmortalRagdoll",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
