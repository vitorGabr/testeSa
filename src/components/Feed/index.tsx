import Feed from "../../models/Feed";
import { Container } from "./styles"

interface Props {
    data: Feed
}

const FeedCard = ({data}:Props) => {
    
    return (
        <Container>
           <h5>{data.content}</h5>
           <p>"{data.author.username}"</p>
        </Container>
    )
        
}


export default FeedCard;