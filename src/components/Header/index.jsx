import { useEffect, useState } from "react";
import { StyledHeader } from "./style"
import { IoMenu, IoSearch } from "react-icons/io5";
import { api } from "../../services/api";
import md5 from "md5";
import { useForm } from "react-hook-form";

export const Header = ({setHqList}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [comicsName, setComicsName] = useState("")

    const {handleSubmit} = useForm()

    const timeStamp = Number(new Date());
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const secretKey = import.meta.env.VITE_SECRET_KEY;

    const hash = md5(timeStamp + secretKey + publicKey);

    useEffect(()=>{
        getByCharacter()
    }, [])

    const getByCharacter = async () => {
        try {
            const {data} = await api.get(`comics?titleStartsWith=${comicsName}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
            setHqList(data.data.results)
        } catch (error) {
            console.log(error)
        } finally {
            setIsVisible(false)
        }
    }

    return (
        <StyledHeader>
            <div className="header__container">
                <button className="header__button"><IoMenu size={50}/></button>
                <img src="../../src/assets/marvelLogo.png" alt="Marvel Logo" />
                <button onClick={() => setIsVisible(true)} className="header__button"><IoSearch size={50}/></button>
            </div>
            {isVisible ? <div> <form onSubmit={(e)=>{
                e.preventDefault();
                getByCharacter()
            }}><input type="text" value={comicsName} onChange={(e)=>{setComicsName(e.target.value)}}/></form></div> : null
            }
            
        </StyledHeader>
    )
}