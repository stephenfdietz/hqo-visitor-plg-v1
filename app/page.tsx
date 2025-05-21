export const metadata = {
  title: 'HqO Visitor Management | Book, Track & Manage Office Visits',
  description: 'Try HqO's visitor management solution free. Streamline guest check-ins, print badges, and view visit history — all in one app.',
  openGraph: {
    title: 'HqO Visitor Management',
    description: 'Book, track, and manage office visits with HqO.',
    url: 'https://visitor.hqo.com',
    images: [
      {
        url: '/images/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'HqO Visitor Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Users, QrCode, Clock, Building } from "lucide-react"

export default function VisitorManagementLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-18%20at%203.38.20%E2%80%AFPM-teQOSjwCnpwX61MTsUiX76Kfo02IZ8.png"
              alt="HqO Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-[#00B2E3]">
              Features
            </Link>
            <Link href="#capabilities" className="text-sm font-medium transition-colors hover:text-[#00B2E3]">
              Capabilities
            </Link>
            <Link href="#benefits" className="text-sm font-medium transition-colors hover:text-[#00B2E3]">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-[#00B2E3]">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden md:inline-flex text-sm font-medium transition-colors hover:text-[#00B2E3]"
            >
              Contact Sales
            </Link>
            <Button className="bg-[#e2000aff] hover:bg-[#c20009] text-white" asChild>
              <Link href="#trial">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Visitor Management
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Give tenants the tools to manage guest access, while property teams maintain oversight.
                  </p>
                  <p className="max-w-[600px] text-gray-300 md:text-lg mt-4">
                    Tenants can pre-register visitors, send digital invites, and share arrival instructions. At the same
                    time, property teams get real-time visibility into visitor activity to provide a hospitable
                    check-in.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#e2000aff] hover:bg-[#c20009] text-white" size="lg" asChild>
                    <Link href="#trial">Start Free Trial</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#e2000aff] text-[#e2000aff] hover:bg-[#e2000aff]/10"
                    size="lg"
                    asChild
                  >
                    <Link href="#demo">Request Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-18%20at%203.42.39%E2%80%AFPM-mBMFGLcNtozHEP1Sm2lwvybbRbGCJ8.png"
                  alt="Visitor Management Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00B2E3]/10 px-3 py-1 text-sm text-[#00B2E3]">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Features like QR code passes, Day Pass, and automated notifications make the process efficient,
                  secure, and seamless for guests and property teams all in one place.
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm"
                >
                  <div className="p-2 bg-[#00B2E3]/10 rounded-full text-[#00B2E3]">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00B2E3]/10 px-3 py-1 text-sm text-[#00B2E3]">
                  Capabilities
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Available Capabilities</h2>
              </div>
            </div>
            <div className="grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                {capabilities.slice(0, 6).map((capability, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#00B2E3]"></div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                      <p className="text-gray-400">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {capabilities.slice(6, 12).map((capability, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#00B2E3]"></div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                      <p className="text-gray-400">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security Capabilities Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00B2E3]/10 px-3 py-1 text-sm text-[#00B2E3]">Security</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Security & Access Control</h2>
              </div>
            </div>
            <div className="grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                {securityCapabilities.slice(0, 3).map((capability, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#00B2E3]"></div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                      <p className="text-gray-400">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {securityCapabilities.slice(3, 6).map((capability, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#00B2E3]"></div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                      <p className="text-gray-400">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-right text-sm text-gray-500 mt-4">
              *Requires connection to the access control system
            </div>
          </div>
        </section>

        {/* Mobile Experience Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#00B2E3]/10 px-3 py-1 text-sm text-[#00B2E3]">
                    Mobile Experience
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Host pre-registers visitor - Mobile
                  </h2>
                  <div className="space-y-4 mt-6">
                    <p className="text-gray-300">Quickly register a guest through the building's app or web admin</p>
                    <p className="text-gray-300">Input key details:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#00B2E3]"></div>
                        <span>Email or Phone</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#00B2E3]"></div>
                        <span>First & last name</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#00B2E3]"></div>
                        <span>Date and time</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#00B2E3]"></div>
                        <span>Notes to the visitor</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-18%20at%203.42.53%E2%80%AFPM-4loo6VSOlgIWwmfn4PprFZQClS2ViF.png"
                  alt="Mobile App Experience"
                  width={600}
                  height={500}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-18%20at%203.42.05%E2%80%AFPM-oOusPuEzLtbvZ1PbZmMQwVtZq8Blsj.png"
                  alt="Visitor Activity Dashboard"
                  width={600}
                  height={500}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#00B2E3]/10 px-3 py-1 text-sm text-[#00B2E3]">
                    Activity Tracking
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Complete Visitor Activity Timeline
                  </h2>
                  <p className="text-gray-300 mt-6">
                    Track every aspect of the visitor journey from invitation to check-out. Property teams and tenant
                    hosts can view:
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00B2E3]" />
                      <span>Event registrations and invitations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00B2E3]" />
                      <span>Check-in and check-out times</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00B2E3]" />
                      <span>Access granted events</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00B2E3]" />
                      <span>Admin notes and security events</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00B2E3]" />
                      <span>Visitor survey completions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00B2E3]/10 px-3 py-1 text-sm text-[#00B2E3]">Benefits</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose HqO Visitor Management?</h2>
                <p className="max-w-[700px] text-gray-400 md:text-xl">
                  Our solution delivers tangible benefits for property managers, tenants, and visitors alike.
                </p>
              </div>
            </div>
            <div className="grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-[#00B2E3] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold">{benefit.title}</h3>
                        <p className="text-gray-400">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button className="bg-[#e2000aff] hover:bg-[#c20009] text-white" size="lg" asChild>
                    <Link href="#trial">Start Free Trial</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-18%20at%203.38.20%E2%80%AFPM-teQOSjwCnpwX61MTsUiX76Kfo02IZ8.png"
                  alt="HqO Dashboard"
                  width={600}
                  height={500}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00B2E3]/10 px-3 py-1 text-sm text-[#00B2E3]">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by Leading Properties</h2>
                <p className="max-w-[700px] text-gray-400 md:text-xl">
                  See what our customers have to say about HqO's Visitor Management solution.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:gap-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-lg border border-gray-800 p-6 shadow-sm"
                >
                  <div className="space-y-4">
                    <p className="text-gray-400 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-[#00B2E3]/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-[#00B2E3]" />
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="trial" className="w-full py-12 md:py-24 lg:py-32 bg-[#e2000aff] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Transform Your Visitor Experience?
                </h2>
                <p className="max-w-[600px] text-white/80 md:text-xl">
                  Start your free 14-day trial today. No credit card required.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button variant="secondary" type="submit" className="bg-black text-white hover:bg-gray-900">
                    Start Free Trial
                  </Button>
                </form>
                <p className="text-xs text-white/70">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="underline underline-offset-2">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-gray-800 bg-black py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} HqO. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-white">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

// Data for the features section
const features = [
  {
    icon: <QrCode className="h-6 w-6" />,
    title: "QR Code Check-In",
    description: "Enable quick, secure entry using QR codes for pre-registered guests.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Pre-Registration",
    description: "Allow tenants to pre-register visitors for a smoother, faster check-in process.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Visitor Pass Expiration",
    description: "Automatically expire visitor passes at the end of the visit to maintain security.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Watchlist",
    description: "Proactively flag individuals of concern, helping security staff identify potential risks.",
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Multi-Property Management",
    description: "Manage visitors across multiple buildings within a single platform.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Invite Groups",
    description: "Invite multiple people to visit for events or meetings and create group for future invites.",
  },
]

// Data for the capabilities section
const capabilities = [
  {
    title: "Pre-Registration",
    description: "Allow tenants to pre-register visitors for a smoother, faster check-in process.",
  },
  {
    title: "Host Assignment",
    description: "Assign hosts to each visitor to ensure smooth coordination and entry.",
  },
  {
    title: "Visit Reminders",
    description: "Send reminders to visitor about upcoming appointments.",
  },
  {
    title: "Visitor Check In",
    description: "Send reminders to visitor about upcoming appointments.",
  },
  {
    title: "Notify Host of Arrival",
    description: "Notify tenants when their guests arrive.",
  },
  {
    title: "Repeat Visitor Profiles",
    description: "Ability to invite previous visitors and streamline future check-ins.",
  },
  {
    title: "Host Note to Front Desk",
    description: "Let hosts share notes with the front desk for special instructions or context.",
  },
  {
    title: "Host Note to Visitor",
    description: "Host can include a custom note to the visitor within the invite.",
  },
  {
    title: "Invite Groups",
    description: "Invite multiple people to visit for events or meetings and create group for future invites.",
  },
  {
    title: "Bulk Invite Actions",
    description: "Cancel or resend multiple visitor invites in one action to save time during unexpected moments.",
  },
  {
    title: "Edit/Cancel Group Invites",
    description: "Update or cancel entire visitor groups with ease for events or meetings.",
  },
  {
    title: "Multi-Property Visitor Management",
    description: "Manage visitors across multiple buildings within a single platform.",
  },
]

// Data for the security capabilities section
const securityCapabilities = [
  {
    title: "Customizable Access Permissions*",
    description: "Set specific access levels for tenant visitors.",
  },
  {
    title: "Access Control Integration*",
    description: "Sync visitor credentials with access control systems for secure building access.",
  },
  {
    title: "Visitor Badges*",
    description: "Generate digital or printed visitor badges for enhanced security and easy identification.",
  },
  {
    title: "Watchlist",
    description:
      "Proactively flag individuals of concern, helping security staff identify and manage potential risks during the check-in process.",
  },
  {
    title: "Watchlist Alias",
    description: "Flag visitors using names or aliases to support enhanced security protocols.",
  },
  {
    title: "Day Pass*",
    description:
      "Allow approved employees to request temporary access if they forget their badge, ensuring secure, seamless entry.",
  },
]

// Data for the benefits section
const benefits = [
  {
    title: "Enhanced Security",
    description: "Know exactly who is in your building at all times with complete visitor logs and security screening.",
  },
  {
    title: "Improved Efficiency",
    description: "Reduce front desk bottlenecks and staff workload with automated check-in processes.",
  },
  {
    title: "Professional First Impressions",
    description: "Create a modern, tech-forward welcome experience that reflects your brand.",
  },
  {
    title: "Compliance Made Easy",
    description: "Maintain visitor records and required documentation to meet regulatory requirements.",
  },
  {
    title: "Seamless Integration",
    description:
      "Works with your existing systems including access control, directory services, and communication tools.",
  },
  {
    title: "Cost Savings",
    description: "Reduce operational costs associated with manual visitor management processes.",
  },
]

// Data for the testimonials section
const testimonials = [
  {
    quote:
      "HqO's visitor management system has transformed our lobby experience. Check-ins are faster, our security team has better visibility, and our tenants love the professional impression it creates.",
    name: "Sarah Johnson",
    title: "Property Manager, Highrise Tower",
  },
  {
    quote:
      "The pre-registration feature alone has saved our reception team countless hours. Visitors arrive prepared and our staff can focus on providing a great experience rather than paperwork.",
    name: "Michael Chen",
    title: "Facilities Director, Tech Campus",
  },
  {
    quote:
      "Implementation was seamless and the HqO team provided excellent support throughout. Our visitor experience is now consistent across all our properties.",
    name: "Jessica Rodriguez",
    title: "VP of Operations, Commercial Properties Inc.",
  },
  {
    quote:
      "The analytics have been invaluable for staffing decisions. We can now predict busy periods and allocate resources accordingly, improving both efficiency and visitor satisfaction.",
    name: "David Thompson",
    title: "Building Manager, Downtown Plaza",
  },
]
