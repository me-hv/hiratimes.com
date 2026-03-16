import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from "lucide-react"

interface NewsCardProps {
  id: string
  title: string
  summary?: string
  image?: string
  author?: string
  authorImage?: string
  category: string
  timestamp?: string
  isPremium?: boolean
  isLive?: boolean
  isVideo?: boolean
  variant?: "hero" | "default" | "compact" | "timeline" | "author" | "top-pick"
}

export function NewsCard({
  title,
  summary,
  image,
  author,
  authorImage,
  category,
  timestamp,
  isPremium,
  isLive,
  isVideo,
  variant = "default",
}: NewsCardProps) {
  if (variant === "timeline") {
    return (
      <div className="flex gap-4 pb-6 relative">
        <div className="flex flex-col items-center">
          <div className="w-2.5 h-2.5 rounded-full border-2 border-primary bg-background shrink-0 z-10" />
          <div className="w-[1px] h-full bg-border absolute top-2.5 left-[4.5px]" />
        </div>
        <div className="space-y-1 -mt-1">
          <div className="text-[10px] font-sans font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            {timestamp} <span className="text-[8px]">•</span> {category}
          </div>
          <Link href="#">
            <h4 className="font-serif font-bold text-sm leading-tight hover:text-accent transition-colors">
              {title}
            </h4>
          </Link>
        </div>
      </div>
    )
  }

  if (variant === "author") {
    return (
      <div className="py-4 border-b border-border last:border-0 group">
        <div className="flex justify-between gap-4">
          <div className="flex-1 space-y-2">
            <Link href="#">
              <h4 className="font-serif font-bold text-base leading-tight group-hover:text-accent transition-colors">
                {title}
              </h4>
            </Link>
            {author && (
              <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                {author}
              </div>
            )}
          </div>
          {authorImage && (
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-border">
              <img src={authorImage} alt={author} className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </div>
    )
  }

  if (variant === "top-pick") {
    return (
      <Card className="relative h-[400px] w-full overflow-hidden rounded-none border-0 group cursor-pointer">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end gap-2 text-white">
          <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em]">{category}</div>
          <Link href="#">
            <h3 className="text-xl md:text-2xl font-serif font-bold leading-tight hover:underline">
              {title}
            </h3>
          </Link>
        </div>
      </Card>
    )
  }

  if (variant === "hero") {
    return (
      <div className="space-y-4">
        {image && (
          <div className="relative aspect-video w-full overflow-hidden group">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            {isVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/50 border border-white/50 flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
              </div>
            )}
            {isPremium && (
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground rounded-none border-0 uppercase font-bold text-[10px]">
                Premium
              </Badge>
            )}
            {author && (
                <div className="absolute bottom-0 right-0 bg-black/50 text-[8px] text-white px-2 py-1 font-sans uppercase tracking-widest backdrop-blur-sm">
                    Photo: {author}
                </div>
            )}
          </div>
        )}
        {isLive && (
          <div className="text-xs font-sans font-bold text-accent uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Live
          </div>
        )}
        <Link href="#">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-[1.1] hover:text-accent transition-colors">
            {title}
          </h2>
        </Link>
        <div className="text-sm font-serif text-muted-foreground leading-relaxed flex flex-col gap-2">
          {summary && <p>{summary}</p>}
          <div className="flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-widest">
            {author && <span className="underline decoration-muted-foreground/30">{author}</span>}
            {timestamp && <span className="text-muted-foreground/50">{timestamp}</span>}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Card className="border-0 shadow-none rounded-none bg-transparent">
      {category && (
         <div className="text-[10px] font-sans font-bold text-accent uppercase tracking-[0.2em] mb-1">{category}</div>
      )}
      <Link href="#">
        <h3 className="text-lg md:text-xl font-serif font-bold leading-tight hover:text-accent transition-colors mb-2">
          {title}
        </h3>
      </Link>
      {summary && <p className="text-xs font-serif text-muted-foreground leading-normal mb-3 line-clamp-3">{summary}</p>}
      <div className="text-[10px] font-sans font-medium text-muted-foreground uppercase tracking-widest outline-none border-none">
        {author && <span className="border-b border-muted-foreground/30 border-dotted mr-2">{author}</span>}
        {variant !== "compact" && timestamp}
      </div>
    </Card>
  )
}
