export type WorkItem = {
  id: string;
  title: string;
  description: string;
  role: string;
  publications?: string[];
  imageUrl?: string;
  link?: string;
};

export type ProfileInfo = {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  awards?: string[];
  experience: {
    company: string;
    role: string;
    period: string;
    description: string;
  }[];
};

export type NewsItem = {
  date: string;
  title: string;
  content: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};
