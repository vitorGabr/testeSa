import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CreateFeed from "../../components/CreateFeed";
import CustomLoading from "../../components/CustomLoading";
import FeedCard from "../../components/Feed";
import { AuthContext } from "../../context/AuthContext";
import Feed from "../../models/Feed";
import Reaction from "../../models/Reaction";
import { getFeeds, getReaction } from "../../service/feeds";
import { Container, Content, Header } from "./styles";

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
            console.error(error);
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
            await getReaction(_data);
            const _feeds = [...feeds];
            _feeds[feeds.indexOf(feed)] = {
                ...feed,
                activeUserLikedIt: _data.like ? 1 : 0,
                activeUserLovedIt: _data.love ? 1 : 0,
            };
            setFeeds(_feeds);
        } catch (error) {

        }
    }


    useEffect(() => {
        handleFeeds();
    }, []);

    return (
        <Container>
            <Header>
                <h1>Home</h1>
                <div className="action">
                    <Button className="create-feed feed-btn" onClick={() => setOpen(true)}>
                        Criar Feed
                    </Button>
                    <Button className="feed-btn" onClick={() => singOutUser()}>
                        Sair
                    </Button>
                </div>
            </Header>
            {isLoading ? <CustomLoading /> :
                <Content>
                    {
                        feeds.map(feed => {
                            return (
                                <FeedCard
                                    data={feed}
                                    key={feed.id}
                                    handleClick={(isLike: boolean) => handleLike(feed, isLike)}
                                />


                            )
                        })
                    }
                </Content>
            }
            {
                <CreateFeed
                    modalIsOpen={isOpen}
                    closeModal={(isReload?: boolean) => {
                        setOpen(false);
                        if (isReload) {
                            handleFeeds();
                        }
                    }}
                />
            }
        </Container>
    )
}


export default Home;