import { Metadata } from "next"

export const metadata: Metadata = {
    title: "My Next.js App",
    description: "Generated by create-next-app",
    keywords: "Next.js, React, JavaScript"
}

export default function AboutPage() {
    return(
        <span className="text-7xl">About Page</span>
    )
 }