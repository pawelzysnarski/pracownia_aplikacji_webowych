export interface Comment {
    id: number;
    createdAt: Date;
    content: string;
    author: string;
    postId: number;
}