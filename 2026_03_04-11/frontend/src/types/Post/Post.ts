export interface Post {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  published: boolean;
  author: string;
  categoryId: number;
}