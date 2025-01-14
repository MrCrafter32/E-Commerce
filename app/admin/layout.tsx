import { Metadata } from "next";


export const metadata : Metadata = {
    title: "ECShop Admin"
}

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
          {children}
        </div>
    );
  }