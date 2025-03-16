import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logout from "./logout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();
    return (
        <html lang="en">
            <body className={"flex flex-col h-screen " + inter.className}>
                <nav className="flex items-center h-8">
                    {session ? (
                        <Logout />
                    ) : (
                        <>
                            <Link href="/login" className="mr-3">Login</Link>
                            <Link href="/register">Register</Link>
                        </>
                    )}
                </nav>
                {children}
            </body>
        </html>
    );
}

