import { StyledHqCard } from "./style"

export const HqCard = ({hq}) => {
    // console.log(hq)

    return (
        <StyledHqCard>
            <div>
                <a target="_blanck" rel="noreferrer" href={hq.urls[0].url}><img src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`} alt="Comic" /></a>
                
            </div>
            <p>{hq.title}</p>
            {
                hq.prices[0].price == 0 ? <p>Not for sale</p> : <><p>U$ {hq.prices[0].price}</p> <button>Add to cart</button></>
            }
            
        </StyledHqCard>
    )
}