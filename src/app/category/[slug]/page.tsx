import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { NewsCard } from "@/components/NewsCard"
import { Separator } from "@/components/ui/separator"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const validCategories = ["india", "world", "movies", "sport", "data", "health", "opinion", "science", "entertainment", "premium"]

const categoryData: Record<string, {
  label: string
  description: string
  featured: { id: string; title: string; summary: string; author: string; image: string; category: string; timestamp: string }
  stories: { id: string; title: string; summary: string; category: string; timestamp: string; image: string }[]
}> = {
  india: {
    label: "India",
    description: "Latest news, analysis and updates from across India",
    featured: {
      id: "india-f1",
      title: "Parliament's Winter Session: Key bills, debates and what to expect as both Houses convene",
      summary: "As Parliament's Winter Session gets underway, both Houses are expected to take up key legislation, with the opposition mounting a strong floor strategy.",
      author: "SANDEEP PHUKAN",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1400",
      category: "India",
      timestamp: "2 hours ago"
    },
    stories: [
      { id: "india-1", title: "Supreme Court sets deadline for states to clear pending election petitions", summary: "The apex court expressed displeasure over the unusually long delays in resolving electoral disputes.", category: "India", timestamp: "1 hour ago", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=600" },
      { id: "india-2", title: "Farmers begin march to Delhi as agitation enters second week", summary: "Thousands of farmers from Punjab and Haryana resumed their march to the national capital to press their demands.", category: "India", timestamp: "3 hours ago", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=600" },
      { id: "india-3", title: "India's GDP growth projected at 6.5% for next fiscal, says RBI report", summary: "The central bank struck an optimistic note on the country's economic trajectory while flagging inflationary risks.", category: "Economy", timestamp: "5 hours ago", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600" },
      { id: "india-4", title: "Rajasthan floods: NDRF teams deployed as three rivers breach banks", summary: "Rescue and relief operations are underway in eight districts after unprecedented rainfall lashed the state.", category: "India", timestamp: "6 hours ago", image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=600" },
      { id: "india-5", title: "Centre launches ₹50,000 crore scheme for infrastructure in eastern states", summary: "The new scheme targets roads, rail and port connectivity across Odisha, Bihar, West Bengal and Jharkhand.", category: "India", timestamp: "8 hours ago", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600" },
      { id: "india-6", title: "Over 1 crore voters to exercise franchise in UP by-elections today", summary: "Polling begins amid tight security across 11 assembly constituencies in Uttar Pradesh.", category: "Elections", timestamp: "Today", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600" },
    ]
  },
  world: {
    label: "World",
    description: "International news and global affairs coverage",
    featured: {
      id: "world-f1",
      title: "G20 leaders reach landmark deal on AI governance framework at Buenos Aires summit",
      summary: "World leaders agreed on a set of binding principles for the development and deployment of artificial intelligence, a first of its kind international agreement.",
      author: "THE HINDU BUREAU",
      image: "https://images.unsplash.com/photo-1457131760772-7017f031b49e?q=80&w=1400",
      category: "World",
      timestamp: "1 hour ago"
    },
    stories: [
      { id: "world-1", title: "Gaza ceasefire talks inch forward as mediators present new bridging proposal", summary: "Egyptian and Qatari mediators put a new framework on the table, but gaps remain on key issues.", category: "World", timestamp: "2 hours ago", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600" },
      { id: "world-2", title: "France snaps to election mode as PM resigns unexpectedly", summary: "Political turmoil deepens in Paris after the Prime Minister tendered his resignation following a no-confidence vote.", category: "Europe", timestamp: "4 hours ago", image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=600" },
      { id: "world-3", title: "China launches largest naval exercise in the South China Sea in a decade", summary: "Taiwan and the Philippines expressed alarm over the scale of the drills which included aircraft carriers.", category: "Asia", timestamp: "5 hours ago", image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=600" },
      { id: "world-4", title: "US Federal Reserve signals two more rate cuts before year-end", summary: "Fed Chair's comments at a Washington conference pushed equity markets sharply higher.", category: "Economy", timestamp: "6 hours ago", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600" },
      { id: "world-5", title: "Amazon deforestation hits 15-year low under new Brazil policy", summary: "Satellite data shows a 42% drop in forest clearing compared to the previous administration's final year.", category: "Environment", timestamp: "8 hours ago", image: "https://images.unsplash.com/photo-1443162754983-eb0c2cc2802f?q=80&w=600" },
      { id: "world-6", title: "WHO declares mpox variant a global health emergency", summary: "The world health body issues its highest level of alert as the new clade spreads across three continents.", category: "Health", timestamp: "Today", image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=600" },
    ]
  },
  movies: {
    label: "Movies",
    description: "Bollywood, Hollywood and world cinema news",
    featured: {
      id: "movies-f1",
      title: "Cannes 2026: Indian films make a historic sweep — four entries in main competition",
      summary: "An unprecedented four Indian films have made it to the main competition at Cannes this year, marking a watershed moment for Indian cinema on the global stage.",
      author: "NAMRATA JOSHI",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1400",
      category: "Movies",
      timestamp: "3 hours ago"
    },
    stories: [
      { id: "movies-1", title: "'Pushpa 3' shoot begins in Vizag; Allu Arjun's mega-budget sequel promises visual spectacle", summary: "The third installment of the blockbuster franchise kicks off production this week.", category: "Bollywood", timestamp: "2 hours ago", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600" },
      { id: "movies-2", title: "Aamir Khan's new film locks in a Diwali release date, teaser drops next week", summary: "After years of speculation the actor's highly anticipated comeback project finally gets an official date.", category: "Bollywood", timestamp: "4 hours ago", image: "https://images.unsplash.com/photo-1594909122845-11baa2b32176?q=80&w=600" },
      { id: "movies-3", title: "Oscar nominations 2027: India submits 'The Last River' as official entry", summary: "The critically acclaimed Malayalam drama has been chosen by the Film Federation of India.", category: "Awards", timestamp: "5 hours ago", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=600" },
      { id: "movies-4", title: "Box office: 'Fighter 2' collects ₹200 crore in opening weekend", summary: "Hrithik Roshan's action blockbuster dominates the box office with a massive opening.", category: "Box Office", timestamp: "6 hours ago", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=600" },
      { id: "movies-5", title: "'Dune: Messiah' trailer released; Denis Villeneuve's final chapter arrives in December", summary: "The long-awaited concluding part of the science fiction epic promises a grander scale.", category: "Hollywood", timestamp: "8 hours ago", image: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=600" },
      { id: "movies-6", title: "Mani Ratnam announces new period drama set in medieval Chola empire", summary: "The legendary filmmaker's next project will explore the reign of Raja Raja Chola.", category: "Tamil Cinema", timestamp: "Today", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=600" },
    ]
  },
  sport: {
    label: "Sport",
    description: "Cricket, football and all the latest sports news",
    featured: {
      id: "sport-f1",
      title: "India vs Australia: Shubman Gill's double century powers India to 550/6 on day two of first Test",
      summary: "A masterful innings by the young opener, combined with a quickfire half-century from Ravindra Jadeja, put India in a dominant position at Brisbane.",
      author: "VIJAY LOKAPALLY",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1400",
      category: "Cricket",
      timestamp: "Just now"
    },
    stories: [
      { id: "sport-1", title: "IPL mega auction 2027: Full list of base prices and player categories revealed", summary: "The BCCI has published the official list ahead of next month's mega auction in Jaipur.", category: "Cricket", timestamp: "1 hour ago", image: "https://images.unsplash.com/photo-1540747913346-19212a729a63?q=80&w=600" },
      { id: "sport-2", title: "Neeraj Chopra breaks own national javelin record at Diamond League opener", summary: "The Olympic champion threw 91.05m in his first competitive outing of the season.", category: "Athletics", timestamp: "2 hours ago", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600" },
      { id: "sport-3", title: "Virat Kohli to play 100th IPL match this season, RCB announces special celebration", summary: "The franchise will mark the milestone with a special event during the home game against CSK.", category: "Cricket", timestamp: "4 hours ago", image: "https://images.unsplash.com/photo-1474680096013-bdbdfb21e584?q=80&w=600" },
      { id: "sport-4", title: "FIFA Club World Cup: Qatar's Al-Hilal vs Real Madrid final confirmed", summary: "Both clubs clinched their semi-finals to set up a blockbuster final in New York on Saturday.", category: "Football", timestamp: "5 hours ago", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=600" },
      { id: "sport-5", title: "PV Sindhu retires from professional badminton at 31, announces coaching venture", summary: "The two-time Olympic medallist confirmed her retirement in an emotional press conference in Hyderabad.", category: "Badminton", timestamp: "6 hours ago", image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600" },
      { id: "sport-6", title: "Formula 1 Indian GP: Delhi circuit plan gets final government approval", summary: "The much-anticipated return of F1 to India is now officially on track, with a 2028 debut planned.", category: "Motorsport", timestamp: "8 hours ago", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600" },
    ]
  },
  health: {
    label: "Health",
    description: "Medical breakthroughs, wellness and public health news",
    featured: {
      id: "health-f1",
      title: "AIIMS study links ultra-processed foods to a 60% higher risk of early-onset diabetes in urban Indians",
      summary: "The landmark 10-year study tracked over 25,000 adults in six Indian cities, finding alarming dietary patterns driving a metabolic crisis.",
      author: "BINDU SHAJAN PERAPPADAN",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1400",
      category: "Health",
      timestamp: "4 hours ago"
    },
    stories: [
      { id: "health-1", title: "New mRNA cancer vaccine shows 90% efficacy in early trials against pancreatic cancer", summary: "Scientists at Johns Hopkins University reported remarkable results in a phase 2 clinical trial.", category: "Medicine", timestamp: "2 hours ago", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600" },
      { id: "health-2", title: "India's mental health crisis: Only 1 psychiatrist for every 1.5 lakh people, new report reveals", summary: "The lack of trained professionals is creating a severe treatment gap, especially in rural areas.", category: "Mental Health", timestamp: "3 hours ago", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600" },
      { id: "health-3", title: "Sleeping less than 6 hours linked to 30% higher dementia risk in new global study", summary: "Researchers analysed sleep data from over one million adults across 20 countries.", category: "Research", timestamp: "5 hours ago", image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600" },
      { id: "health-4", title: "Govt expands Ayushman Bharat to cover all citizens above 70 years from April 1", summary: "The expanded health cover will benefit an estimated 4.5 crore senior citizens with free hospitalisation.", category: "Policy", timestamp: "6 hours ago", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600" },
      { id: "health-5", title: "The hidden epidemic: 20 crore Indians live with chronic pain and fewer than 2% receive treatment", summary: "A shocking new survey highlights the massive unmet need for pain management services.", category: "Public Health", timestamp: "8 hours ago", image: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=600" },
      { id: "health-6", title: "DrugAlert: Popular heartburn medication recalled over contamination concerns", summary: "CDSCO has issued an urgent notice asking chemists to withdraw a specific batch of the drug.", category: "Alert", timestamp: "Today", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600" },
    ]
  },
  opinion: {
    label: "Opinion",
    description: "Commentary, editorials and expert analysis",
    featured: {
      id: "opinion-f1",
      title: "India at 2047: The three structural reforms that will determine whether we become a superpower or stagnate",
      summary: "The next two decades will be defined by whether India can fix its land, labour and legal systems. The window is narrowing.",
      author: "MIHIR S. SHARMA",
      image: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?q=80&w=1400",
      category: "Opinion",
      timestamp: "6 hours ago"
    },
    stories: [
      { id: "opinion-1", title: "The Pakistan problem: Why dialogue for its own sake is not a strategy", summary: "After every outreach, India faces the same disappointment. It is time for a fundamentally different approach.", category: "Opinion", timestamp: "2 hours ago", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600" },
      { id: "opinion-2", title: "Stop blaming the RBI: India's inflation problem is a government supply-side failure", summary: "Monetary policy cannot fix what is ultimately a problem of agricultural market fragmentation.", category: "Economy", timestamp: "3 hours ago", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600" },
      { id: "opinion-3", title: "The hollowing out of the IAS: Why India's bureaucracy can no longer attract the best", summary: "Once the most coveted career, the civil services are losing talent war to the private sector and tech startups.", category: "Governance", timestamp: "5 hours ago", image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=600" },
      { id: "opinion-4", title: "Letter from London: What Indians get wrong about the 'British nostalgia' myth", summary: "A frequent misreading of British public opinion is leading to faulty foreign policy conclusions in New Delhi.", category: "World", timestamp: "6 hours ago", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600" },
      { id: "opinion-5", title: "The gender pay gap is not a myth — it is policy failure hiding in plain sight", summary: "Three Indian economists explain why aggregate statistics mask a deep structural problem in labour markets.", category: "Society", timestamp: "8 hours ago", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600" },
      { id: "opinion-6", title: "The climate emergency is here. India's NDC update must reflect that urgency", summary: "With extreme weather events multiplying, the next round of climate pledges cannot be business as usual.", category: "Environment", timestamp: "Today", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600" },
    ]
  },
  science: {
    label: "Science",
    description: "Science, technology and innovation news",
    featured: {
      id: "science-f1",
      title: "ISRO's Gaganyaan crew lands safely after first 72-hour human spaceflight mission",
      summary: "India crosses a historic milestone as its first astronaut crew splashes down in the Bay of Bengal, completing a successful 72-hour crewed mission around the Earth.",
      author: "DINAKAR PERI",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1400",
      category: "Space",
      timestamp: "Just now"
    },
    stories: [
      { id: "science-1", title: "Scientists discover new species of deep-sea fish glowing with blue bioluminescence off Lakshadweep", summary: "Marine biologists from NCSCM made the discovery during a routine deep-sea survey.", category: "Biology", timestamp: "2 hours ago", image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=600" },
      { id: "science-2", title: "Quantum computer solves cryptography problem in 0.001 seconds that would take classical computers 47 years", summary: "IBM's new 2000-qubit system marks a major inflection point in the quantum race.", category: "Technology", timestamp: "4 hours ago", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600" },
      { id: "science-3", title: "Ancient 3,000-year-old astronomical observatory discovered near Ujjain", summary: "Archaeologists believe the site was used by ancient Indian astronomers to track celestial cycles.", category: "Archaeology", timestamp: "5 hours ago", image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=600" },
      { id: "science-4", title: "First successful lab-grown human kidney transplanted successfully in Chennai", summary: "Surgeons at Apollo Hospital performed the procedure using an organ grown from the patient's own stem cells.", category: "Medicine", timestamp: "6 hours ago", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600" },
      { id: "science-5", title: "Arctic sea ice reaches record low for fourth consecutive year, data confirms", summary: "Scientists say the warming in the Arctic is now occurring at a rate four times faster than the global average.", category: "Climate", timestamp: "8 hours ago", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=600" },
      { id: "science-6", title: "IIT Bombay develops cheap water filter that removes 99.9% of microplastics", summary: "The innovation could transform drinking water safety for millions of rural households across India.", category: "Innovation", timestamp: "Today", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600" },
    ]
  },
  entertainment: {
    label: "Entertainment",
    description: "TV, OTT, music and celebrity news",
    featured: {
      id: "entertainment-f1",
      title: "Netflix India scores global hit: 'Sacred Games 3' becomes most-watched non-English series in platform history",
      summary: "The return of Sartaj Singh delivers on years of anticipation, breaking viewership records in 65 countries within the first 72 hours of release.",
      author: "SUANSHU KHURANA",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1400",
      category: "OTT",
      timestamp: "1 hour ago"
    },
    stories: [
      { id: "entertainment-1", title: "Grammy 2027: AR Rahman wins lifetime achievement award in star-studded Los Angeles ceremony", summary: "The legendary composer received the honour from a surprise presenter, moving the audience to tears.", category: "Music", timestamp: "2 hours ago", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=600" },
      { id: "entertainment-2", title: "'KBC 18' bags record: 2,100 contestants qualify for hot seat in a single season", summary: "Producer SonyLIV reveals the remarkable figure as the show wraps its 18th season.", category: "Television", timestamp: "3 hours ago", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600" },
      { id: "entertainment-3", title: "Prime Video's 'Panchayat 4' trailer breaks all streaming records in India", summary: "The beloved show's fourth season promises to top its predecessors both in scale and emotion.", category: "OTT", timestamp: "4 hours ago", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600" },
      { id: "entertainment-4", title: "Arijit Singh's world tour announcement creates server crash for ticketing platforms", summary: "Millions attempted to book tickets simultaneously as the pop star announced his first major international tour.", category: "Music", timestamp: "6 hours ago", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600" },
      { id: "entertainment-5", title: "Reality TV: 'Bigg Boss 20' finale gets record 12 crore live viewers", summary: "The controversial but inescapably popular show smashed the previous viewership milestone for its finale.", category: "Television", timestamp: "8 hours ago", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=600" },
      { id: "entertainment-6", title: "Coldplay India tour: Third Mumbai show added after first two sell out in 8 minutes", summary: "The British band's India leg continues to generate frenzy with an additional concert at DY Patil Stadium.", category: "Music", timestamp: "Today", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600" },
    ]
  },
  data: {
    label: "Data",
    description: "Data journalism, charts and evidence-based reporting",
    featured: {
      id: "data-f1",
      title: "Mapped: How India's rainfall patterns have shifted dramatically over the past 50 years",
      summary: "An interactive analysis of IMD data reveals that states like Rajasthan are receiving 30% more rainfall while traditional wet zones in the Northeast dry up.",
      author: "THE DATA TEAM",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400",
      category: "Data",
      timestamp: "5 hours ago"
    },
    stories: [
      { id: "data-1", title: "Charted: India's falling Total fertility rate and what it means for the economy over the next 30 years", summary: "Data from the 2024 Census paints a nuanced picture of demographic transition across 28 states.", category: "Demographics", timestamp: "2 hours ago", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600" },
      { id: "data-2", title: "Explainer: Why India's unemployment data is so hard to interpret — and what we actually know", summary: "We break down the methodological differences between PLFS, CMIE and other surveys collecting jobs data.", category: "Economy", timestamp: "4 hours ago", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600" },
      { id: "data-3", title: "In numbers: How the BJP performed in every election since 2014, state by state", summary: "A comprehensive data visualization of India's most consequential political party's decade of dominance.", category: "Politics", timestamp: "6 hours ago", image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=600" },
      { id: "data-4", title: "The EV inflection point: How electric vehicle adoption in India has changed every 6 months since 2020", summary: "Animated charts track the transformation across two-wheelers, three-wheelers and passenger cars.", category: "Mobility", timestamp: "7 hours ago", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600" },
      { id: "data-5", title: "Digital India: The 10 states where smartphone penetration has transformed daily life most profoundly", summary: "We analysed eight years of TRAI and NSSO data to assess who truly benefited from the Jio revolution.", category: "Technology", timestamp: "8 hours ago", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=600" },
      { id: "data-6", title: "How many crores does your MP earn? A full financial disclosure analysis of the 18th Lok Sabha", summary: "Using the statutory affidavits filed before elections, we profile the wealth of all 543 elected members.", category: "Politics", timestamp: "Today", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600" },
    ]
  },
  premium: {
    label: "Premium",
    description: "Exclusive in-depth reports, long reads and subscriber-only content",
    featured: {
      id: "premium-f1",
      title: "The Man Who Knows Too Much: Inside the remarkable life and controversial times of India's top intelligence chief",
      summary: "In a rare, extensive profile, we reconstruct the career and worldview of R&AW's current director — a man responsible for India's most sensitive secrets.",
      author: "PRAVEEN SWAMI",
      image: "https://images.unsplash.com/photo-1509909756405-be0199881695?q=80&w=1400",
      category: "Premium",
      timestamp: "Today"
    },
    stories: [
      { id: "premium-1", title: "Exclusive: The inside story of how India's UVAC hypersonic missile programme was built in secrecy", summary: "Months of reporting and over 30 source interviews reveal how DRDO quietly developed a weapon that changed the strategic calculus with China.", category: "Premium", timestamp: "2 days ago", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600" },
      { id: "premium-2", title: "The Long Read: India's water wars — the river treaty that now threatens to unravel 60 years of peace", summary: "As climate change shrinks the Indus, a complex legal and diplomatic crisis is building that few are paying attention to.", category: "Long Read", timestamp: "3 days ago", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=600" },
      { id: "premium-3", title: "Interview: Nobel economist Abhijit Banerjee on why India's poverty story is far more complex than the data suggests", summary: "In an extended conversation, the MIT professor challenges mainstream narratives around India's economic transformation.", category: "Interview", timestamp: "4 days ago", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600" },
      { id: "premium-4", title: "The Slow Death of the Handloom: How a 600-year-old Benarasi weaving tradition is being killed by e-commerce", summary: "A ground report from the gullies of Varanasi, where master weavers are selling their looms to pay school fees.", category: "Feature", timestamp: "5 days ago", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600" },
      { id: "premium-5", title: "Crony Chronicles: How 10 conglomerates captured India's key economic sectors in a decade", summary: "A data and documents investigation into the concentration of economic power across airports, ports, media and telecoms.", category: "Investigation", timestamp: "1 week ago", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600" },
      { id: "premium-6", title: "Inside the AI laboratories quietly reshaping India's defence forces from within", summary: "How machine learning, drones and autonomous systems are being integrated into every branch of the armed forces.", category: "Technology", timestamp: "1 week ago", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600" },
    ]
  }
}

export async function generateStaticParams() {
  return validCategories.map((cat) => ({ slug: cat }))
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lowSlug = slug.toLowerCase()

  if (!validCategories.includes(lowSlug)) {
    notFound()
  }

  const data = categoryData[lowSlug]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Category Header */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-end gap-4">
              <h1 className="text-4xl md:text-5xl font-serif font-bold italic text-accent">{data.label}</h1>
              <span className="text-muted-foreground font-sans text-sm mb-2 hidden sm:block">{data.description}</span>
            </div>
          </div>
        </div>

        {/* Featured Story */}
        <div className="container mx-auto px-4 py-10 border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="relative overflow-hidden">
              <img
                src={data.featured.image}
                alt={data.featured.title}
                className="w-full aspect-video object-cover"
              />
              <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-sans font-bold uppercase tracking-widest px-2 py-1">
                {data.featured.category}
              </span>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-xs font-sans font-bold uppercase tracking-widest text-muted-foreground">{data.featured.timestamp}</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">{data.featured.title}</h2>
              <p className="text-muted-foreground font-serif text-lg leading-relaxed">{data.featured.summary}</p>
              <p className="text-xs font-sans font-bold uppercase tracking-widest text-muted-foreground border-t border-border pt-4">{data.featured.author}</p>
            </div>
          </div>
        </div>

        {/* Story Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-2xl font-serif font-bold">Latest in {data.label}</h2>
            <Separator className="flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.stories.map((story) => (
              <NewsCard
                key={story.id}
                {...story}
              />
            ))}
          </div>
        </div>

        {/* Subscribe Banner */}
        <div className="bg-accent px-4 py-14 flex flex-col items-center text-center text-accent-foreground mt-10">
          <h3 className="text-3xl md:text-4xl font-serif font-bold italic mb-4">Unrivaled Journalism. Total Access.</h3>
          <p className="max-w-xl text-base font-serif mb-8 opacity-90">Get unlimited access to all our reporting, investigations and long reads. Subscribe today.</p>
          <Link href="#" className="bg-white text-accent px-10 py-3 text-sm font-bold uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors">
            Become a Subscriber
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
