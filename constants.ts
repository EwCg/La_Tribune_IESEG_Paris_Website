
import { TeamMember, Article } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Alexandre Dupont',
    role: 'Président',
    photo: 'https://picsum.photos/seed/alex/400/400',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '2',
    name: 'Sophie Martin',
    role: 'Vice-Présidente',
    photo: 'https://picsum.photos/seed/sophie/400/400',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '3',
    name: 'Thomas Bernard',
    role: 'Secrétaire Général',
    photo: 'https://picsum.photos/seed/thomas/400/400',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '4',
    name: 'Léa Leroy',
    role: 'Trésorière',
    photo: 'https://picsum.photos/seed/lea/400/400',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '5',
    name: 'Antoine Petit',
    role: 'Responsable Événementiel',
    photo: 'https://picsum.photos/seed/antoine/400/400',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '6',
    name: 'Camille Moreau',
    role: 'Responsable Communication',
    photo: 'https://picsum.photos/seed/camille/400/400',
    linkedin: 'https://linkedin.com'
  }
];

export const PARTNERS = [
  { 
    name: 'FFDE', 
    logo: 'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/FFDE.jpg' 
  },
  { 
    name: 'CINUP', 
    logo: 'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/CINUP.jpg' 
  }
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/event1/800/600',
  'https://picsum.photos/seed/event2/800/600',
  'https://picsum.photos/seed/event3/800/600',
  'https://picsum.photos/seed/event4/800/600',
  'https://picsum.photos/seed/event5/800/600',
  'https://picsum.photos/seed/event6/800/600',
  'https://picsum.photos/seed/event7/800/600',
  'https://picsum.photos/seed/event8/800/600'
];

export const MOCK_ARTICLES: Article[] = [
  {
    slug: "art-de-la-contradiction",
    title: "L'Art de la Contradiction : Pourquoi débattre est essentiel",
    author: "Alexandre Dupont",
    excerpt: "Dans un monde de plus en plus polarisé, apprendre à écouter l'autre et à construire une réponse argumentée est une compétence vitale.",
    content: "Le débat n'est pas une simple confrontation d'ego, mais une quête collective de vérité. À La Tribune, nous croyons que la contradiction est le moteur de la pensée critique. En apprenant à défendre des positions qui ne sont pas nécessairement les nôtres, nous développons une empathie intellectuelle indispensable. Le débat parlementaire nous force à structurer notre pensée sous pression, à écouter activement l'adversaire pour identifier les failles de son raisonnement, et à y répondre avec élégance et précision. C'est cette école de la rigueur que nous transmettons chaque semaine à nos membres.",
    coverImage: "https://images.unsplash.com/photo-1507537362145-9f2382e03ecd?auto=format&fit=crop&q=80&w=800",
    date: "12/03/2024"
  },
  {
    slug: "debat-parlementaire-sport-haut-niveau",
    title: "Le Débat Parlementaire : Un sport de haut niveau",
    author: "Sophie Martin",
    excerpt: "Entre adrénaline et structure rigoureuse, retour sur les coulisses de notre victoire au championnat de France 2021.",
    content: "Le championnat de France de débat parlementaire n'est pas qu'une affaire de mots, c'est une épreuve d'endurance mentale. Pendant des mois, nos équipes se sont entraînées à analyser des motions complexes en moins de 15 minutes. Lors de la finale de 2021, la tension était palpable. Chaque argument devait être pesé, chaque envolée lyrique justifiée. Cette victoire a marqué un tournant pour La Tribune, prouvant que l'IÉSEG a sa place parmi l'élite de l'éloquence française. Ce succès repose sur une méthode de travail collective et un soutien indéfectible entre les membres du bureau et les orateurs.",
    coverImage: "https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&q=80&w=800",
    date: "05/02/2024"
  },
  {
    slug: "rhetorique-et-climat",
    title: "Rhétorique et Climat : Comment porter la voix de l'urgence",
    author: "Camille Moreau",
    excerpt: "Comment les figures de style peuvent-elles aider à transformer des données scientifiques froides en une action concrète ?",
    content: "Face à l'urgence climatique, les faits seuls ne suffisent plus. Il faut savoir émouvoir pour mobiliser. La rhétorique offre des outils puissants pour rendre l'invisible visible et le futur lointain immédiat. L'utilisation de l'hypotypose, par exemple, permet de décrire une scène avec une telle vivacité qu'elle semble se dérouler sous les yeux de l'auditeur. En tant qu'orateurs, nous avons la responsabilité d'utiliser notre art pour servir des causes qui nous dépassent. Cet article explore comment marier la rigueur scientifique avec la puissance du logos, du pathos et de l'ethos pour susciter un véritable engagement citoyen.",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    date: "20/01/2024"
  },
  {
    slug: "silence-outil-meconnu",
    title: "Le silence, cet outil méconnu de l'orateur",
    author: "Thomas Bernard",
    excerpt: "Apprendre à ne rien dire pour mieux se faire entendre. Une analyse de la puissance des pauses dans le discours.",
    content: "Beaucoup d'orateurs débutants craignent le silence comme un vide à combler. Pourtant, c'est dans le silence que naît la tension dramatique. Une pause bien placée après une question rhétorique force l'auditoire à réfléchir. Un silence prolongé avant une conclusion donne du poids à la parole qui va suivre. Maîtriser son rythme, c'est savoir orchestrer les silences. Dans cet article, nous analysons les discours de grands orateurs contemporains pour comprendre comment ils utilisent l'absence de mots pour souligner l'importance de leur message.",
    coverImage: "https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=800",
    date: "10/01/2024"
  },
  {
    slug: "ciceron-vs-ia",
    title: "Cicéron vs IA : La machine pourra-t-elle un jour émouvoir ?",
    author: "Antoine Petit",
    excerpt: "La technologie générative arrive dans l'éloquence. Mais l'âme d'un discours réside-t-elle dans les mots ou dans celui qui les porte ?",
    content: "L'intelligence artificielle peut désormais générer des discours structurés et argumentés en quelques secondes. Mais peut-elle réellement faire preuve d'éloquence ? L'éloquence n'est pas seulement la justesse des mots, c'est l'incarnation d'un message par un corps et une voix. C'est l'imperfection humaine, l'hésitation sincère ou le tremblement d'émotion qui crée le lien avec l'auditoire. Si l'IA est un assistant formidable pour la recherche documentaire, elle reste incapable de remplacer l'ethos de l'orateur : sa crédibilité morale et sa présence scénique.",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    date: "28/12/2023"
  }
];
