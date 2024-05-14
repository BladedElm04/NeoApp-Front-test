import { HqListStyled } from "./style"
import { HqCard } from "./HqCard"
import { useState, useEffect } from "react"
import md5 from "md5"
import { api } from "../../services/api.js"

export const HqList = ({hqList, setHqList}) => {

    const timeStamp = Number(new Date());
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const secretKey = import.meta.env.VITE_SECRET_KEY;

    const hash = md5(timeStamp + secretKey + publicKey)

    useEffect(() => {
        const getHqs = async () => {
            try {
                const {data} = await api.get(`comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
                setHqList(data.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        getHqs()
    }, [])

    return (
        <HqListStyled>
            <ul>
                {hqList.map((hq) => <HqCard key={hq.id} hq={hq} />)}
            </ul>
        </HqListStyled>
    )
}