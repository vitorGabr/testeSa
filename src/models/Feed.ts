import Author from "./Author";

export default interface Feed {
    activeUserLikedIt: number;
    activeUserLovedIt: number;
    author: Author;
    content: string;
    createdAt: string;
    id: number;
    likes: number;
    loves: number;
    updatedAt: string;
}