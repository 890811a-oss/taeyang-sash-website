export interface PortfolioCase {
  id: number;
  category: string;
  title: string;
  tags: string[];
  author: string;
  thumbnail: string;
  description?: string;
  meta?: {
    location?: string;
    area?: string;
    duration?: string;
    workScope?: string[];
    materials?: string[];
  };
  images?: {
    before?: string[];
    during?: string[];
    after?: string[];
  };
}
