import { CardContent } from "./CardContent.type"

const artistIntro: CardContent = {
  title: "Artist Intro",
  content: ["Name.", "From.", "Fun fact.", "Applause."],
}

export const start: CardContent[] = [
  {
    title: "Say Hi",
    content: [
      "How is everyone?",
      "Who doesn't speak french/english?",
      "Is it your 1st Sofar?",
      "Keep your mask on.",
    ],
  },
  {
    title: "Sofar Sounds",
    content: [
      "Started in 2009 in London.",
      "A different way to enjoy concerts.",
      "Today 200+ cities in the world.",
      "Paris is the 2nd city since 2012.",
    ],
  },
  {
    title: "BoulaPop Teaser",
    content: [
      "Paris shows are organised by BoulaPop.",
      "We'll talk about it later in the show.",
      "We are boula.pop on Instagram so tag us if you like.",
    ],
  },
  {
    title: "Sofar Guidelines",
    content: [
      "Be attentive, mute phone.",
      "Shows are scary, clap the artists!",
      "Stay for all 3 artists.",
      "Follow/share the artists you liked.",
    ],
  },
  artistIntro,
]
export const showBreak: CardContent[] = [
  {
    title: "Clap for the artists",
    content: ["Artist socials.", "Next show location, date.", "15 min break."],
  },
]
export const firstReturn: CardContent[] = [
  {
    title: "Welcome Back",
    content: [
      "How is everyone?",
      "Thank the venue.",
      "Ad space for the venue.",
      "Ask for venues.",
    ],
  },
  artistIntro,
]
export const secondReturn: CardContent[] = [
  {
    title: "Welcome Back",
    content: ["How is everyone?", "Thank you for staying for all 3 artists."],
  },
  {
    title: "We Are Boulapop",
    content: [
      "The non profit that organises the Sofar events in Paris.",
      "Our goal is to advocate for emerging artists.",
      "Started to grow during lockdowns by diversifying our activities.",
      "We do live and virtual events.",
      "Chut(e): web series, artists like Ben Mazué sharing a story and playing in amazing places.",
      "Checkout our socials for the latest news, follow us!",
    ],
  },
]
export const end: CardContent[] = [
  {
    title: "It's almost the end",
    content: ["We hope you enjoyed the show."],
  },
  {
    title: "Clap the Artists",
    content: [
      "Clap for the first artist.",
      "Socials of first artist.",
      "Clap for the second artist.",
      "Socials of second artist.",
      "Clap for the third artist.",
      "Socials of third artist.",
    ],
  },
  {
    title: "Clap for the public",
    content: [
      "You've been amazing.",
      "There's no event without you.",
      "See you next time.",
      "Good night!",
    ],
  },
]
