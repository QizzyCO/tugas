
export interface Member {
  name: string;
  role: string;
  image: string;
}

export interface SectionPart {
  subtitle?: string;
  text: string;
  imageUrl: string;
}

export interface SectionContent {
  id: string;
  title: string;
  icon: string;
  color: string;
  parts: SectionPart[];
  detailedPoints: string[];
  sources: { name: string; url: string }[];
}
