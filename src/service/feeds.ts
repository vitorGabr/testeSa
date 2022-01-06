import Feed from "../models/Feed";
import Reaction from "../models/Reaction";
import { api } from "./api"

export const getFeeds = async () => {
    const result = await api.get('/feeds');
    return result.data as Feed[];
}

export const postFeed = async (content: string) => {
    await api.post('/feed', { content });
}


export const getReaction = async ({ feedId, like, love }: Reaction) => {
    await api.post('/reaction', { feedId, like, love });
}
