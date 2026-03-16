import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const footerSections = [
  {
    title: "Categories",
    links: ["India", "World", "Opinion", "Business", "Sport", "Entertainment", "Health", "Science"],
  },
  {
    title: "More Sections",
    links: ["Society", "Environment", "Technology", "Cinema", "Data", "Graphics", "Videos", "Podcasts"],
  },
  {
    title: "About Us",
    links: ["Our Story", "Corporate Profile", "Code of Editorial Values", "Terms of Use", "Privacy Policy", "Contact Us"],
  },
  {
    title: "Services",
    links: ["Subscription", "Group Subscription", "Gift a Subscription", "Newsletters", "Coupons", "RSS Feeds"],
  },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8 px-4 font-sans">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em]">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-primary-foreground/10 mb-8" />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-serif font-bold text-accent italic">Hira Times</h2>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Twitter className="w-5 h-5 cursor-pointer hover:text-accent" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-accent" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-accent" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-accent" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-accent" />
            </div>
          </div>

          <div className="bg-primary-foreground/5 p-6 border border-primary-foreground/10 w-full lg:w-max">
            <h5 className="text-xs font-bold uppercase tracking-widest mb-4">Subscribe to our newsletter</h5>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-2 top-2.5 h-4 w-4 text-primary-foreground/40" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent border border-primary-foreground/20 pl-8 pr-4 py-2 text-sm w-full lg:w-64 focus:outline-none focus:border-accent"
                />
              </div>
              <Button variant="outline" className="border-primary-foreground/20 hover:bg-accent hover:border-accent hover:text-accent-foreground rounded-none uppercase text-[10px] font-bold tracking-widest">
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-[10px] text-primary-foreground/40 leading-relaxed max-w-2xl mx-auto uppercase tracking-tighter">
            Copyright &copy; {new Date().getFullYear()}, Hira Times Publications Pvt Ltd. All rights reserved. 
            No part of this portal can be reproduced without prior permission.
          </p>
        </div>
      </div>
    </footer>
  )
}
