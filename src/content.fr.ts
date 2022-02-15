import { CardContent } from "./CardContent.type"

const artistIntro: CardContent = {
  title: "Intro Artiste",
  content: ["Nom.", "Origine.", "Fun fact.", "Applaudissements."],
}

export const start: CardContent[] = [
  {
    title: "Bonjour",
    content: [
      "Comment va tout le monde?",
      "Qui ne parle pas français?",
      "C'est votre 1er Sofar?",
      "Gardez votre masque.",
    ],
  },
  {
    title: "Sofar Sounds",
    content: [
      "Débute en 2009 à Londres.",
      "Une nouvelle façon de profiter des concerts.",
      "Aujourd'hui 200+ villes dans le monde.",
      "Paris est la seconde ville, depuis 2012.",
    ],
  },
  {
    title: "BoulaPop Teaser",
    content: [
      "Les shows parisiens sont organisés par BoulaPop.",
      "On vous en dira plus un peu plus tard.",
      "On est boula.pop sur Instagram, taggez nous ça nous ferais plaisir.",
    ],
  },
  {
    title: "Sofar Guidelines",
    content: [
      "Soyez attentifs, mettez votre téléphone sur mute.",
      "Les shows peuvent être intimidants, encouragez les artistes !",
      "Restez pour les 3 artistes.",
      "Follow/share les artistes que vous avez aimés.",
    ],
  },
  artistIntro,
]
export const showBreak: CardContent[] = [
  {
    title: "Applaudire les artistes",
    content: [
      "Pages FB/Insta artiste.",
      "Lieu et date prochain show.",
      "Pause 15 min.",
    ],
  },
]
export const firstReturn: CardContent[] = [
  {
    title: "Welcome Back",
    content: [
      "Comment va tout le monde?",
      "Remercier le lieu.",
      "Promotion du lieu.",
      "On cherche toujours des lieux, contactez nous.",
    ],
  },
  artistIntro,
]
export const secondReturn: CardContent[] = [
  {
    title: "Welcome Back",
    content: [
      "Comment va tout le monde?",
      "Merci d'être resté pour tous nos artistes.",
    ],
  },
  {
    title: "Nous sommes Boulapop",
    content: [
      "L'asso qui organise les Sofar à Paris.",
      "Notre but est d'accompagner les artistes émergents.",
      "On a commencé à grandir pendant le confinement en diversifiant nos activités.",
      "On a des events live et virtuels.",
      "Chut(e): web series, des artistes comme Ben Mazué partage une histoire personnelle et joue dans un lieu incroyable.",
      "Suivez nous sur les réseaux pour les dernières news!",
    ],
  },
]
export const end: CardContent[] = [
  {
    title: "C'est presque la fin",
    content: ["On espère que vous avez passé un bon moment."],
  },
  {
    title: "Applaudire les Artistes",
    content: [
      "Applaudire le premier artiste.",
      "Socials of premier artiste.",
      "Applaudire le deuxième artiste.",
      "Socials of deuxième artiste.",
      "Applaudire le troisième artiste.",
      "Socials of troisième artiste.",
    ],
  },
  {
    title: "Applaudire le publique",
    content: [
      "Vous avez été supers.",
      "Il n'y a pas de concert sans vous.",
      "On se retrouve au prochain show.",
      "Bonne nuit!",
    ],
  },
]
