import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { NewsCard } from "@/components/NewsCard"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const premiumStories = [
  { id: "p-1", title: "Why is India staring at LPG shortage?", author: "M. KALYANARAMAN", category: "Premium", timestamp: "Today" },
  { id: "p-2", title: "Earth's magnetic flips can last 70,000 years, new study finds", author: "VASUDEVAN MUKUNTH", category: "Premium", timestamp: "Today", authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100" },
  { id: "p-3", title: "Tucker Carlson: stirring Christian conservatives against war and Israel", author: "VARGHESE K. GEORGE", category: "Premium", timestamp: "Yesterday", authorImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100" },
  { id: "p-4", title: "Youth-backed RSP win signals Nepal's new political era", author: "AMITABH MATTOO, SANGEETA THAPLIYAL", category: "Premium", timestamp: "Mar 11", authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100" },
  { id: "p-5", title: "The silent crisis of antimicrobial resistance in India", author: "BINDU SHAJAN PERAPPADAN", category: "Premium", timestamp: "Mar 10" },
  { id: "p-6", title: "How a forgotten 19th-century map explains today's border disputes", author: "NARAYAN LAKSHMAN", category: "Premium", timestamp: "Mar 09", authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" },
  { id: "p-7", title: "The evolution of the Indian middle class: A new survey", author: "MAHESH LAMBA", category: "Premium", timestamp: "Mar 08" }
]

const mainLiveStory = {
  id: "l-1",
  title: "Strait of Hormuz crisis: Jaishankar hails talks with Iran; EU, UN discuss Black Sea-type initiative",
  summary: "India joins global powers to navigate the escalating West Asia conflict. While Jaishankar clarifies there is no 'blanket arrangement' for Indian ships, the international community weighs a shipping corridor solution similar to the Black Sea grain deal.",
  author: "THE HINDU BUREAU",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000",
  category: "LIVE",
  timestamp: "Updated 2 mins ago",
  isPremium: false,
  isLive: true
}

const latestNews = [
  { id: "ln-1", title: "UK watchdogs press Meta, TikTok, Snap and YouTube to block children", category: "Technology", timestamp: "9 mins ago" },
  { id: "ln-2", title: "R N Ravi takes oath as 22nd governor of West Bengal", category: "West Bengal", timestamp: "12 mins ago" },
  { id: "ln-3", title: "MSME fintech Progcap facilitates stronger credit profiles for women entrepreneurs", category: "Industry", timestamp: "13 mins ago" },
  { id: "ln-4", title: "WhatsApp launches parent-managed accounts for pre-teens amid safety concerns", category: "Technology", timestamp: "15 mins ago" },
  { id: "ln-5", title: "Samriddhi Yatra: Nitish Kumar launches projects worth ₹781 crore", category: "Bihar", timestamp: "21 mins ago" },
  { id: "ln-6", title: "Sensex surrenders 300 points in early trade as global cues weaken", category: "Economy", timestamp: "25 mins ago" },
  { id: "ln-7", title: "Delhi pollution: SC to hear plea on implementation of GRAP-IV measures", category: "Environment", timestamp: "30 mins ago" },
  { id: "ln-8", title: "Global heat records broken for 10th consecutive month", category: "Climate", timestamp: "35 mins ago" },
  { id: "ln-9", title: "IPL 2026: Mega auction dates announced by BCCI", category: "Cricket", timestamp: "40 mins ago" },
  { id: "ln-10", title: "New evidence shows humans reached Americas 30,000 years ago", category: "Science", timestamp: "45 mins ago" },
]

const topPicks = [
  { id: "tp-1", title: "From Iran with hope: Nasrin Karimi brings Persian flavours to Chennai", category: "FEATURES", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070", timestamp: "Today" },
  { id: "tp-2", title: "Chinnaswamy to host IPL 2026 opener between RCB and SRH on March 28", category: "CRICKET", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000", timestamp: "Today" },
  { id: "tp-3", title: "I&B Ministry directs Telegram to remove over 3,100 channels", category: "INDIA", image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1000", timestamp: "Today" },
  { id: "tp-4", title: "JNUSU 'referendum': over 2,000 students back V-C's removal", category: "DELHI", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000", timestamp: "Today" },
]

const budgetSessionStory = {
  id: "bs-1",
  title: "Lok Sabha represents the whole country, not just one party, says LoP Rahul Gandhi",
  summary: "Congress leader says 'vile things' were being said about him during the ongoing debate; alleges he has been stopped from speaking multiple times, including when raising questions about the PM's 'compromises'",
  author: "SANDEEP PHUKAN",
  image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000",
  category: "INDIA",
  timestamp: "2 hours ago"
}

const budgetVideoStory = {
    id: "bv-1",
    title: "Watch: Lok Sabha sees heated debate over motion to remove Om Birla as Speaker",
    summary: "Lok Sabha, on Tuesday (March 10, 2026) took up the resolution for the removal of Speaker Om Birla, moved by Congress MP Mohammed Jawed for discussion.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070",
    category: "VIDEOS",
    timestamp: "1 day ago",
    isVideo: true
}

const middleStories = [
  {
    id: "m-1",
    title: "Congress leader demands judicial probe into bank fraud allegations",
    summary: "A senior leader has written to the Prime Minister's Office seeking an independent investigation into recent financial discrepancies.",
    author: "MANOJ PRASAD",
    image: "https://images.unsplash.com/photo-1523247530039-43d41f5313f8?q=80&w=1000",
    category: "POLITICS",
    timestamp: "1 hour ago"
  },
  {
    id: "m-2",
    title: "Isro to launch mission to study sun's outer atmosphere next month",
    summary: "The spacecraft will carry seven payloads to observe the photosphere, chromosphere and the outermost layers of the Sun.",
    author: "JACOB KOSHY",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000",
    category: "SCIENCE",
    timestamp: "3 hours ago"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent selection:text-white">
      <Header />
      
      <main className="flex-1">
        {/* Top Section: Premium | Live | Latest */}
        <div className="container mx-auto px-4 py-8 border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Premium Sidebar */}
            <div className="lg:col-span-3 border-r border-border pr-8 hidden lg:block sticky top-20 self-start">
              <h2 className="text-3xl font-serif font-bold text-accent italic mb-6">Premium</h2>
              <div className="flex flex-col">
                {premiumStories.map(story => (
                  <NewsCard key={story.id} {...story} variant="author" />
                ))}
                <Link href="#" className="mt-4 text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground hover:text-accent flex items-center gap-1">
                  Read More Stories <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Center: Main Live Story */}
            <div className="lg:col-span-6 px-0 lg:px-4 flex flex-col gap-10">
              <NewsCard {...mainLiveStory} variant="hero" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-10">
                {middleStories.map(story => (
                  <NewsCard key={story.id} {...story} />
                ))}
              </div>
            </div>

            {/* Right: Latest News Timeline */}
            <div className="lg:col-span-3 border-l border-border pl-8 hidden lg:block sticky top-20 self-start">
              <h2 className="text-xl font-serif font-bold mb-6">Latest News</h2>
              <div className="flex flex-col">
                {latestNews.map(story => (
                  <NewsCard key={story.id} {...story} variant="timeline" />
                ))}
                <div className="border-t border-border pt-4 mt-2">
                    <Link href="#" className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground hover:text-accent flex items-center justify-between">
                        Read More Stories <ChevronRight className="w-3 h-3" />
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Picks Section */}
        <div className="bg-muted/30 py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-serif font-bold text-accent italic">Top Picks</h2>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full h-8 w-8"><ChevronLeft className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="rounded-full h-8 w-8"><ChevronRight className="w-4 h-4" /></Button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {topPicks.map(pick => (
                <NewsCard key={pick.id} {...pick} variant="top-pick" />
              ))}
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
                <div className="w-8 h-1 bg-border" />
                <div className="w-8 h-1 bg-accent" />
                <div className="w-8 h-1 bg-border" />
            </div>
          </div>
        </div>

        {/* Thematic Section: Budget Session */}
        <div className="container mx-auto px-4 py-16 border-b border-border">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-2xl font-serif font-bold text-accent text-center border-b-[3px] border-accent pb-1">Budget Session of Parliament</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <NewsCard {...budgetSessionStory} variant="hero" />
             <div className="bg-black p-8 text-white">
                <NewsCard {...budgetVideoStory} variant="hero" />
             </div>
          </div>
        </div>

        {/* Exhaustive Scroll Sections */}
        {["Economy", "World", "Technology", "Health", "Climate"].map((section, idx) => (
             <div key={section} className="container mx-auto px-4 py-16 border-b border-border last:border-0">
                <div className="flex items-center gap-6 mb-12">
                    <h2 className="text-2xl font-serif font-bold italic">{section}</h2>
                    <Separator className="flex-1" />
                    <Link href="#" className="text-xs font-sans font-bold uppercase tracking-widest text-accent hover:underline">View All &raquo;</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <NewsCard 
                            key={`${section}-${i}`}
                            id={`${section}-${i}`}
                            title={`Headline for ${section} news story number ${i}`}
                            summary="A brief summary describing the key events of this particular news story to entice readers to click through."
                            category={section}
                            timestamp={`${i * 2} hours ago`}
                            image={`https://picsum.photos/seed/${section}${i}/600/600`}
                        />
                    ))}
                </div>
             </div>
        ))}
        
        {/* Bottom Subscription Banner */}
        <div className="bg-accent px-4 py-16 flex flex-col items-center text-center text-accent-foreground">
             <h3 className="text-4xl md:text-5xl font-serif font-bold italic mb-6">Unrivaled Journalism. Total Access.</h3>
             <p className="max-w-2xl text-lg font-serif mb-8 opacity-90">Get the best of investigative reports, long-form journalism, and exclusive features from India's most trusted news house.</p>
             <Button size="lg" className="bg-white text-accent hover:bg-gray-100 rounded-none px-12 py-6 text-sm font-bold uppercase tracking-[0.2em]">Become a Subscriber</Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
