import { useContext, useEffect, useState } from "react";
import CreateFeed from "../../components/CreateFeed";
import { AuthContext } from "../../context/AuthContext";
import Feed from "../../models/Feed";
import Reaction from "../../models/Reaction";
import { getFeeds, getReaction } from "../../service/feeds";

const Home = () => {

    const { singOutUser } = useContext(AuthContext);
    const [feeds, setFeeds] = useState<Feed[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [isOpen, setOpen] = useState(false);

    const handleFeeds = async () => {
        try {
            setLoading(true);
            const result = await getFeeds();
            setFeeds(result);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const handleLike = async (feed: Feed, isLike: boolean = true) => {
        const _data: Reaction = {
            feedId: feed.id,
            like: isLike ? feed.activeUserLikedIt === 0 ?? false : feed.activeUserLikedIt === 1 ?? false,
            love: isLike ? feed.activeUserLovedIt === 1 ?? false : feed.activeUserLovedIt === 0 ?? false,
        }
        try {
            setLoading(true);
            await getReaction(_data);
            handleFeeds();
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        handleFeeds();
    }, []);

    return (
        <div>
            <button
                onClick={() => singOutUser()}
            >Sair</button>
            <h1>Home</h1>
            <button
                onClick={() => setOpen(true)}
            >Registrar</button>
            {isLoading ? <div>Loading...</div> :
                <div>
                    {
                        feeds.map(feed => {
                            return (
                                <div key={feed.id}>
                                    <h3>{feed.author.username}</h3>
                                    <p>{feed.content}</p>
                                    <p>{feed.activeUserLikedIt} LIKE</p>
                                    <p>{feed.activeUserLovedIt} LOVE</p>
                                    <button
                                        onClick={() => handleLike(feed, true)}
                                    >LIKE</button>
                                    <button
                                        onClick={() => handleLike(feed, false)}
                                    >LOVE</button>
                                </div>
                            )
                        })
                    }
                </div>
            }
            {
                <CreateFeed
                    modalIsOpen={isOpen}
                    closeModal={(isReload?: boolean) => {
                        setOpen(false);
                        console.log(isReload);
                        if (isReload) {
                            handleFeeds();
                        }
                    }}
                />
            }
        </div>
    )
}


export default Home;