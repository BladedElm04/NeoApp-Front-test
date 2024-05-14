import styled from "styled-components";

export const StyledHqCard = styled.li`
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 1rem;
    font-size: 2rem;
    background-color: white;
    border-radius: 0.5rem;
    padding-bottom: 1rem;
    font-family: fantasy;

    div {
        display: flex;
        justify-content: center;
        background-color: black;

        a{
            width: 100%;
            
            img{
                width: 100%;
                border-radius: 0.5rem 0.5rem 0 0;
            }
        }
    }

    p{
        
    }

    button{
        margin: auto;
        padding: 0.5rem;
        font-size: 2rem;
        font-weight: bold;
        width: fit-content;
        border-radius: 0.5rem;
    }
`