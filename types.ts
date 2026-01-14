
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  linkedin: string;
}

export interface Article {
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
}
