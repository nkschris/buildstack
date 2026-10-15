export type FeaturedType = "editors-pick" | "sponsored" | null;

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  categories: string[];
  tags: string[];
  featured: boolean;
  featuredType: FeaturedType;
  isNew: boolean;
  releasedAt: string;
}

export interface ToolsData {
  categories: Category[];
  tools: Tool[];
}
