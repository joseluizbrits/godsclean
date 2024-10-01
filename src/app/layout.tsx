import type { Metadata } from "next";
import { jost } from "@/lib/fonts";
import StylesProvider from "@/styles/StylesProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer/indext";

export const metadata: Metadata = {
  title: "GodsClean | Limpeza e Lavagem de Estofados",
  description: "MUDAR AQUI!!!",
  keywords: [],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
  // metadataBase: new URL("https://godsclean.com.br"),
  openGraph: {
    title: "GodsClena | Limpeza e Lavagem de Estofados",
    description: "MUDAR AQUI!!!",
    type: "website",
    // url: "https://godsclean.com.br",
    siteName: "GodsClean",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${jost.className} ${jost.className}`}>
        <StylesProvider>
          <Header />
          {children}
          <Footer />
        </StylesProvider>
      </body>
    </html>
  );
}
