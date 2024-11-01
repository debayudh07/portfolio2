/* eslint-disable */

"use client"
import { useState, useEffect } from 'react'
import { ChevronRight, Mail, Download, ArrowRight, ArrowLeft } from 'lucide-react'

const TypeWriter = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
        onComplete && onComplete()
      }
    }, 20)

    return () => clearInterval(typingInterval)
  }, [text, onComplete])

  return <span>{displayedText}</span>
}

export default function Home() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<JSX.Element[]>([
    <TypeWriter key="welcome" text="Welcome to my portfolio. Type 'help' for available commands." />
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [currentSection, setCurrentSection] = useState<string | null>(null)

  const sectionOrder = ['summary', 'skills', 'experience', 'projects', 'social', 'cv', 'connect']

  type SectionKey = 'summary' | 'skills' | 'experience' | 'projects' | 'social' | 'cv' | 'connect';

  const sections: Record<SectionKey, { title: string; content: string | JSX.Element }> = {
    summary: {
      title: "Summary",
      content: (
        <div className="flex flex-col md:flex-row items-start gap-6 mt-4">
          <div className="w-32 h-32 relative overflow-hidden rounded-lg border-2 border-green-500">
            <img 
              src="/deba2.jpeg" 
              alt="Debayudh Basu" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-lg font-bold">Debayudh Basu</p>
            <p className="text-green-400">Backend Developer & Web Technology Enthusiast</p>
            <p className="text-sm leading-relaxed">
              I'm a passionate backend developer and web technology enthusiast with experience 
              in modern web development and community engagement. Specialized in building 
              scalable backend solutions and exploring the frontiers of Web3 technology.
            </p>
          </div>
        </div>
      )
    },
    skills: {
      title: "Technical Skills",
      content: `
    ┌───────────────────────────────────────────────────────────┐
    │                    Technical Skills                       │
    └───────────────────────────────────────────────────────────┘

    Frontend & Frameworks:
    ┌─────────────────┐    ┌──────────────┐
    │    Next.js      │    │   React.js   │
    │   ╭──────╮     │    │    ⚛️ ⚛️ ⚛️    │
    │   │ N │        │    │   </>  </>   │
    │   ╰──────╯     │    │    {props}   │
    └─────────────────┘    └──────────────┘

    Backend & Databases:
    ┌─────────────────┐    ┌──────────────┐
    │    MongoDB      │    │   Node.js    │
    │    ╭───╮       │    │   ╭────╮     │
    │    │ M │       │    │   │ JS │     │
    │    ╰───╯       │    │   ╰────╯     │
    └─────────────────┘    └──────────────┘

    Blockchain & Web3:
    ┌─────────────────┐    ┌──────────────┐
    │    Solidity     │    │  Ethereum    │
    │    ╭─────╮     │    │   ◈──◈──◈    │
    │    │ Sol │     │    │    ─◈──◈     │
    │    ╰─────╯     │    │     ◈─◈      │
    └─────────────────┘    └──────────────┘

    Tools & Other:
    ┌─────────────────┐    ┌──────────────┐
    │     Git         │    │   Docker     │
    │    /│\\         │    │   ╭────╮     │
    │   / │ \\        │    │   │ 🐳 │     │
    │  /  │  \\       │    │   ╰────╯     │
    └─────────────────┘    └──────────────┘

    Proficiency Level:
    ▓▓▓▓▓ Expert
    ▓▓▓▓░ Advanced
    ▓▓▓░░ Intermediate
    ▓▓░░░ Basic

    • Frontend: React.js ▓▓▓▓░  Next.js ▓▓▓▓░
    • Backend: Node.js ▓▓▓▓░  MongoDB ▓▓▓▓░
    • Web3: Solidity ▓▓▓░░  Ethereum ▓▓▓░░
    • Tools: Git ▓▓▓▓░  Docker ▓▓▓░░`
    },
    experience: {
      title: "Experience",
      content: `
    ┌───────────────────────────────────────────────────────────┐
    │                     Experience Timeline                   │
    │                                                           │
    │    Backend Internship       GDG Web & Web3 Associate      │
    │    (Aug 2024 - Present)     (Ongoing)                     │
    │     ___________             ___________                   │
    │    |  _   _   _|           |  _   _   _|                  │
    │    | | | | | | |           | | | | | | |                  │
    │    | | | | | | |    -----> | | | | | | |                  │
    │    | | | | | | |           | | | | | | |                  │
    │    | |_| |_| | |           | |_| |_| | |                  │
    │    |___________|           |___________|                  │
    │                                                           │
    └───────────────────────────────────────────────────────────┘

• Backend Developer Intern (August 2024 - Present)
  - Develop and maintain RESTful APIs using Node.js and Express
  - Implement database solutions with MongoDB and PostgreSQL
  - Collaborate with frontend developers to integrate backend services
  - Participate in code reviews and implement best practices for scalable backend architecture

• GDG Web and Web3 Associate (Ongoing)
  - Organize and lead workshops on web development technologies
  - Create content for Web3 technology awareness and education
  - Collaborate with other GDG members to plan and execute tech events
  - Mentor aspiring web developers in both traditional and blockchain-based web technologies`
    },
    projects: {
      title: "Projects",
      content: `
    ┌───────────────────────────────────────────────────────────┐
    │                     Project Showcase                      │
    │                                                           │
    │    1. DecentralizedExchange   3. NFTMarketplace           │
    │       ╔════╗  ╔════╗             ╔════╗  ╔════╗           │
    │       ║ ETH ║⇄║TOKEN║            ║ NFT ║⇄║ ETH ║          │
    │       ╚════╝  ╚════╝             ╚════╝  ╚════╝           │
    │                                                           │
    │    2. AI-PoweredChatbot     4. NextJS Blog with MongoDB   │
    │         ╔═══╗    ┌───┐           ┌───┐  ┌───┐            │
    │         ║BOT║ ⇄ │USER│           │ N │⇄│ M │            │
    │         ╚═══╝    └───┘           └───┘  └───┘            │
    │                                                           │
    └───────────────────────────────────────────────────────────┘

1. DecentralizedExchange - A Web3 project for trading ERC20 tokens
2. AI-PoweredChatbot - A Web2 application using natural language processing
3. NFTMarketplace - A platform for minting and trading NFTs
4. NextJS Blog with MongoDB - A modern, server-side rendered blog application`
    },
    social: {
      title: "Social",
      content: `
• GitHub: https://github.com/debayudh07
• LinkedIn: https://www.linkedin.com/in/debayudh-basu-5280562b2/
• Twitter: https://x.com/BasuDebayudh`
    },
    cv: {
      title: "CV",
      content: (
        <div className="flex flex-col items-start space-y-4">
          <p>Download my CV to learn more about my experience and skills.</p>
          <a
            href="/Deba.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600 transition-colors"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
          <p className="text-xs text-green-300">Format: PDF • Size: ~65.8KB</p>
        </div>
      )
    },
    connect: {
      title: "Connect",
      content: (
        <div className="flex flex-col items-start space-y-4">
          <p>Feel free to reach out to me at: debayudhbasu@gmail.com</p>
          <a
            href="mailto:debayudhbasu@gmail.com"
            className="inline-flex items-center px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600 transition-colors"
          >
            <Mail className="mr-2 h-4 w-4" />
            Send Email
          </a>
        </div>
      )
    }
  }

  const getNavigationInfo = () => {
    if (!currentSection) return ""
    const currentIndex = sectionOrder.indexOf(currentSection)
    const total = sectionOrder.length
    return `\n[Section ${currentIndex + 1}/${total}] Type 'next' or 'prev' to navigate between sections`
  }

  const handleCommand = (cmd: string) => {
    const normalizedCmd = cmd.toLowerCase().trim()
    
    if (normalizedCmd === 'next' || normalizedCmd === 'prev') {
      if (!currentSection) {
        setCurrentSection('summary')
        return sections.summary.content
      }

      const currentIndex = sectionOrder.indexOf(currentSection)
      let newIndex

      if (normalizedCmd === 'next') {
        newIndex = (currentIndex + 1) % sectionOrder.length
      } else {
        newIndex = (currentIndex - 1 + sectionOrder.length) % sectionOrder.length
      }

      const newSection = sectionOrder[newIndex] as SectionKey
      setCurrentSection(newSection)
      return sections[newSection].content
    }

    switch (normalizedCmd) {
      case 'help':
        return `Available commands:
• Navigation: next, prev
• Sections: ${sectionOrder.join(', ')}
• Utility: clear

${currentSection ? getNavigationInfo() : ''}`
      case 'clear':
        setOutput([])
        setCurrentSection(null)
        return null
      default:
        if (sectionOrder.includes(normalizedCmd)) {
          setCurrentSection(normalizedCmd)
          return sections[normalizedCmd as SectionKey].content
        }
        return 'Command not recognized. Type "help" for available commands.'
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isTyping) return

    const result = handleCommand(input)
    if (result !== null) {
      setIsTyping(true)
      setOutput(prevOutput => [
        ...prevOutput,
        <TypeWriter key={`input-${prevOutput.length}`} text={`> ${input}`} />,
        <div key={`output-${prevOutput.length}`} className="flex flex-col space-y-2">
          {typeof result === 'string' ? (
            <TypeWriter text={result} onComplete={() => setIsTyping(false)} />
          ) : (
            result
          )}
          {currentSection && (
            <div className="flex items-center space-x-2 text-green-300 text-sm mt-2">
              <ArrowLeft className="h-4 w-4" />
              <span>prev</span>
              <span className="mx-2">|</span>
              <span>next</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          )}
        </div>
      ])
    } else {
      setIsTyping(false)
    }
    setInput('')
  }

  useEffect(() => {
    const terminal = document.getElementById('terminal')
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight
    }
  }, [output])

  return (
    <div className="min-h-screen bg-black text-green-500 p-2 sm:p-4 font-mono">
      <div id="terminal" className="h-[calc(100vh-8rem)] overflow-auto">
        {output.map((element, index) => (
          <div key={index} className="whitespace-pre-wrap mb-2 text-xs sm:text-sm md:text-base">
            {element}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex items-center">
        <ChevronRight className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none outline-none flex-grow text-xs sm:text-sm md:text-base"
          autoFocus
          disabled={isTyping}
          placeholder={currentSection ? "Type 'next' or 'prev' to navigate..." : "Type 'help' for commands..."}
        />
      </form>
    </div>
  )
}