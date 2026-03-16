"use client"

import { useEffect, useState } from "react"

const languages = [
  { label: "ENGLISH", code: "en" },
  { label: "हिंदी", code: "hi" },
  { label: "தமிழ்", code: "ta" },
  { label: "বাংলা", code: "bn" },
  { label: "മലയാളം", code: "ml" },
  { label: "ગુજરાતી", code: "gu" },
  { label: "मराठी", code: "mr" },
]

function getCookie(name: string): string {
  if (typeof document === "undefined") return ""
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(";").shift() ?? ""
  return ""
}

export function LanguageSwitcher() {
  const [active, setActive] = useState("en")

  useEffect(() => {
    // Read the current googtrans cookie to highlight the right language
    const cookie = getCookie("googtrans")
    // Cookie format: /en/hi
    if (cookie) {
      const parts = cookie.split("/")
      const lang = parts[parts.length - 1]
      if (lang) setActive(lang)
    } else {
      setActive("en")
    }
  }, [])

  const switchLanguage = (code: string) => {
    if (code === "en") {
      // Clear the cookie to revert to English
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname
    } else {
      const value = `/en/${code}`
      document.cookie = `googtrans=${value}; path=/`
      document.cookie = `googtrans=${value}; path=/; domain=${window.location.hostname}`
    }
    setActive(code)
    window.location.reload()
  }

  return (
    <div className="w-full border-b border-border bg-background">
      <div className="container mx-auto px-4 py-1.5 flex items-center gap-0 flex-wrap">
        {languages.map((lang, index) => (
          <span key={lang.code} className="flex items-center">
            <button
              onClick={() => switchLanguage(lang.code)}
              className={`text-[11px] font-sans font-bold uppercase tracking-wide px-2 py-0.5 transition-colors cursor-pointer
                ${active === lang.code
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {lang.label}
            </button>
            {index < languages.length - 1 && (
              <span className="text-muted-foreground/40 select-none">|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
