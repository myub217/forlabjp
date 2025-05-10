import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="ForLabJP Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-xl font-bold">ForLabJP</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to ForLabJP</h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A modern template for your next web application. Built with Next.js, TypeScript, and more.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Get Started</Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Hero Image"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to build your next project
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: "Next.js",
                  description:
                    "Built on the latest Next.js framework for optimal performance and developer experience.",
                },
                {
                  title: "TypeScript",
                  description: "Fully typed codebase for better maintainability and fewer bugs.",
                },
                {
                  title: "Responsive Design",
                  description: "Looks great on all devices, from mobile to desktop.",
                },
                {
                  title: "Component Library",
                  description: "Includes a comprehensive set of reusable UI components.",
                },
                {
                  title: "Easy Deployment",
                  description: "Ready to deploy on Vercel with minimal configuration.",
                },
                {
                  title: "Developer Tools",
                  description: "Includes ESLint, Prettier, and Husky for code quality.",
                },
              ].map((feature, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About ForLabJP</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ForLabJP is a template repository designed to help developers quickly start new projects with a solid
                  foundation. It includes all the modern tools and practices to build scalable web applications.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Created with a focus on developer experience and performance, ForLabJP helps you focus on building
                  features rather than setting up infrastructure.
                </p>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="About Image"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about ForLabJP? We're here to help.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your message"
                        />
                      </div>
                      <Button className="w-full">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="ForLabJP Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="text-xl font-bold">ForLabJP</span>
            </div>
            <p className="text-sm text-gray-500">A modern template for your next web application.</p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h3 className="text-sm font-medium">Links</h3>
            <nav className="flex flex-col gap-2 text-sm text-gray-500">
              <Link href="#features" className="hover:underline underline-offset-4">
                Features
              </Link>
              <Link href="#about" className="hover:underline underline-offset-4">
                About
              </Link>
              <Link href="#contact" className="hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h3 className="text-sm font-medium">Legal</h3>
            <nav className="flex flex-col gap-2 text-sm text-gray-500">
              <Link href="#" className="hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline underline-offset-4">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
        <div className="border-t">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <p className="text-xs text-gray-500">© 2024 ForLabJP. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/myub217/forlabjp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
