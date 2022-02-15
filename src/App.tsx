import { ReactNode, useRef, useState } from "react"
import "./styles.css"
import * as contentEn from "./content.en"
import * as contentFr from "./content.fr"

const colors = [
  "#0d9488",
  "#ca8a04",
  "#65a30d",
  "#4f46e5",
  "#0891b2",
  "#d97706",
  "#16a34a",
  "#7c3aed",
  "#0284c7",
  "#059669",
  "#ea580c",
  "#9333ea",
  "#2563eb",
  "#c026d3",
  "#db2777",
  "#e11d48",
  "#dc2626",
]

type CardProps = {
  children: ReactNode
  color: string
  phase: string
}

const Card = ({ children, color, phase }: CardProps) => (
  <div className="Card" style={{ backgroundColor: color }}>
    <p className="Phase">{phase}</p>
    {children}
  </div>
)

export default function App() {
  /** Language */
  const contents = { en: contentEn, fr: contentFr }
  type Lang = keyof typeof contents
  const flags: Record<Lang, string> = { en: "🇬🇧", fr: "🇫🇷" }
  const [lang, setLang] = useState<Lang>("en")
  const content = contents[lang]

  /** Phase selection */
  const phases = [
    content.start,
    content.showBreak,
    content.firstReturn,
    content.showBreak,
    content.secondReturn,
    content.end,
  ]
  const phasesNames = [
    "Intro",
    "End of Artist 1",
    "After first break",
    "End of Artist 2",
    "After second break",
    "End of event",
  ]
  const [selectedPhase, setSelectedPhase] = useState(0)

  /** Tabs */
  const tabNames = [
    "Intro",
    "Break 1",
    "Return 1",
    "Break 2",
    "Return 2",
    "End",
  ]
  const [showTabs, setShowTabs] = useState(true)

  /** Tabs + Phase */
  const divRef = useRef<HTMLDivElement | null>(null)
  const makePhaseClickHandler = (index: number) => () => {
    setSelectedPhase(index)
    setShowTabs(false)
    divRef.current?.scrollTo({ left: 0, top: 0 })
  }

  return (
    <div className="App" ref={divRef}>
      {phases[selectedPhase]?.map(({ title, content }, i) => (
        <Card
          key={title}
          color={colors.slice(selectedPhase)[i]}
          phase={phasesNames[selectedPhase]}
        >
          <h3>{title}</h3>
          {content.map((str, i) => (
            <p key={str}>{str}</p>
          ))}
        </Card>
      ))}
      <div className={`TabsContainer ${showTabs ? "" : "hide"}`}>
        <div className="Tabs">
          {(["fr", "en"] as Lang[]).map(
            (el) =>
              lang !== el && (
                <button onClick={() => setLang(el)}>{flags[el]}</button>
              ),
          )}

          {tabNames.map((name, i) => (
            <button onClick={makePhaseClickHandler(i)}>{name}</button>
          ))}
        </div>
        <button className="Toggle" onClick={() => setShowTabs((s) => !s)}>
          {showTabs ? "<" : ">"}
        </button>
      </div>
    </div>
  )
}
