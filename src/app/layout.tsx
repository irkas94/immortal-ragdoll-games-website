import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Immortal Ragdoll Games - Founded by Award-Winning VFX Artist Robert Alomar",
  description: "Texas-based indie studio founded by Robert Alomar, award-winning VFX artist behind Shang-Chi, Sonic the Hedgehog, and Cats. Crafting stylized horror experiences with Hollywood-quality visual effects.",
  keywords: "indie games, horror games, survival horror, game development, Texas, Unreal Engine, Robert Alomar, VFX artist, Shang-Chi, Sonic the Hedgehog, Cats, Hollywood VFX, Echoes of Darkness",
  authors: [{ name: "Immortal Ragdoll Games - Robert Alomar" }],
  creator: "Immortal Ragdoll Games",
  openGraph: {
    title: "Immortal Ragdoll Games - Hollywood VFX Meets Indie Gaming",
    description: "Founded by award-winning VFX artist Robert Alomar. We make games that hit like a bat full of nails.",
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
