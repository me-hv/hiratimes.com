"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search, User, BookOpen, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./LanguageSwitcher"

const categories = [
  "India", "World", "Movies", "Sport", "Data",
  "Health", "Opinion", "Science", "Entertainment", "Premium",
]

const navColumns = [
  [
    { label: "News", href: "/category/india" },
    { label: "Opinion", href: "/category/opinion" },
    { label: "Data", href: "/category/data" },
    { label: "Books", href: "#" },
    { label: "Real Estate", href: "#" },
  ],
  [
    { label: "Business", href: "#" },
    { label: "Education", href: "#" },
    { label: "Children", href: "#" },
    { label: "Agriculture", href: "#" },
  ],
  [
    { label: "Sport", href: "/category/sport" },
    { label: "Health", href: "/category/health" },
    { label: "Elections", href: "#" },
    { label: "Brandhub", href: "#" },
  ],
  [
    { label: "Technology", href: "#" },
    { label: "Life & Style", href: "#" },
    { label: "Food", href: "#" },
    { label: "Cities", href: "#" },
    { label: "Entertainment", href: "/category/entertainment" },
    { label: "Science", href: "/category/science" },
    { label: "Society", href: "#" },
    { label: "Environment", href: "#" },
  ],
]

const mediaLinks = [
  { label: "Videos", icon: "▶" },
  { label: "eBooks", icon: "📕" },
  { label: "Podcast", icon: "🎧" },
  { label: "Games", icon: "🎮" },
  { label: "Photos", icon: "🖼" },
  { label: "Newsletter", icon: "✉" },
  { label: "Visual Stories", icon: "👁" },
  { label: "Lit For Life", icon: "📖" },
  { label: "Specials", icon: "📁" },
  { label: "The Huddle", icon: "🏆" },
]

const socialLinks = [
  {
    label: "WhatsApp", href: "#",
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
  },
  {
    label: "X", href: "#",
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
  },
  {
    label: "Facebook", href: "#",
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
  },
  {
    label: "Instagram", href: "#",
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
  },
  {
    label: "YouTube", href: "#",
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" /></svg>
  },
]

export function Header() {
  const [isSticky, setIsSticky] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 150)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on Escape
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false) }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  })

  return (
    <>
      <header className="w-full bg-background border-b border-border relative z-40">
        {/* Language Switcher Bar */}
        <LanguageSwitcher />

        {/* Top Bar */}
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-sans text-muted-foreground whitespace-nowrap order-2 md:order-1 self-start md:self-center">
            <span>{currentDate}</span>
            <Link href="#" className="font-bold text-accent hover:underline">e-Paper</Link>
          </div>

          <Link href="/" className="order-1 md:order-2 flex items-center gap-2 md:gap-3 lg:gap-4 group text-2xl md:text-3xl lg:text-5xl">
            <div className="h-[1em] w-[1em] text-accent group-hover:scale-110 transition-transform duration-500 shrink-0">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                {/* Outer solid diamond */}
                <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="currentColor" />
                {/* Middle diamond outline */}
                <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.5" />
                {/* Inner diamond outline */}
                <path d="M50 33 L67 50 L50 67 L33 50 Z" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.35" />
              </svg>
            </div>
            <h1 className="font-serif font-bold tracking-tight uppercase text-foreground transition-all flex gap-3 lg:gap-4">
              <span>Hira</span>
              <span>Times</span>
            </h1>
          </Link>

          <div className="flex items-center gap-4 order-3 self-end md:self-center">
            <ThemeToggle />
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-sans text-muted-foreground hover:text-foreground cursor-pointer group">
              <BookOpen className="w-4 h-4" />
              <span className="group-hover:underline">eBooks</span>
            </div>
            <Link href="#" className="bg-accent text-accent-foreground px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest hover:bg-accent/90 transition-colors">
              Subscribe
            </Link>
            <Link href="#" className="flex items-center gap-1.5 text-xs font-sans font-medium hover:text-accent group">
              <span className="uppercase group-hover:underline">Login</span>
              <User className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Sub Navigation (Sticky) */}
        <div className={`${isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-md animate-in slide-in-from-top duration-300" : ""} border-b border-border bg-background`}>
          <div className="container mx-auto px-4 flex items-center justify-between h-12">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
              {/* Hamburger button — controls custom dropdown */}
              <button
                onClick={() => setMenuOpen(v => !v)}
                className="h-8 w-8 flex items-center justify-center hover:text-accent transition-colors"
                aria-label="Open menu"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              <div className="flex items-center gap-2 group cursor-pointer text-muted-foreground hover:text-foreground">
                <Search className="h-4 w-4" />
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest group-hover:underline hidden sm:inline">Search</span>
              </div>

              <nav className="flex items-center gap-8 pl-4">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/category/${cat.toLowerCase()}`}
                    className="text-sm font-serif font-bold text-foreground hover:text-accent transition-colors whitespace-nowrap"
                  >
                    {cat}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Full-width Dropdown Mega Menu */}
          {menuOpen && (
            <div
              className="w-full bg-background border-t border-border shadow-xl"
              style={{ animation: "fadeSlideDown 0.2s ease" }}
            >
              <div className="container mx-auto px-6 py-8">
                {/* LIVE NOW */}
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block animate-pulse" />
                  <span className="text-accent font-sans font-bold text-sm tracking-wider">LIVE NOW</span>
                </div>

                {/* Main Nav Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-8 border-b border-border pb-8 mb-8">
                  {navColumns.map((col, ci) => (
                    <div key={ci} className="flex flex-col gap-3">
                      {col.map(item => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-[15px] font-sans font-semibold text-foreground hover:text-accent transition-colors leading-snug"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}

                  {/* Media links as 2 extra columns */}
                  <div className="flex flex-col gap-3 border-l border-border pl-10 col-span-2">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                      {mediaLinks.map(item => (
                        <Link
                          key={item.label}
                          href="#"
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2 text-[14px] font-sans text-muted-foreground hover:text-accent transition-colors"
                        >
                          <span className="text-sm w-5 text-center">{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connect with us */}
                <div className="flex items-center gap-6 flex-wrap">
                  <span className="text-xs font-sans font-bold uppercase tracking-widest text-muted-foreground">Connect with us</span>
                  <span className="text-border">|</span>
                  {socialLinks.map(item => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label={item.label}
                    >
                      {item.svg}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
