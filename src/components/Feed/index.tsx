import Feed from "../../models/Feed";
import { Container } from "./styles"

interface Props {
    data: Feed;
    handleClick: (isLove: boolean) => void;
}

const FeedCard = ({ data, handleClick }: Props) => {

    return (
        <Container>
            <h5>{data.content}</h5>
            <p>"{data.author.username}"</p>
            <hr />
            <div className="btn-reactions">
                <span
                    className="material-icons"
                    onClick={() => handleClick(true)}
                >
                    {data.activeUserLikedIt === 1 ? 'thumb_up_alt' : 'thumb_up_off_alt'}
                </span>
                <span
                    className="material-icons"
                    onClick={() => handleClick(false)}
                >
                    {data.activeUserLovedIt === 1 ? 'favorite' : 'favorite_border'}
                </span>
            </div>
        </Container>
    )

}


export default FeedCard;