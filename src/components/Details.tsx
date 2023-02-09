import { useParams } from "react-router-dom";
import { useApiSelector } from "../hooks/useReduxTs";
import { useEffect, useState } from 'react';


export const Details = () => {
    const { climas } = useApiSelector((state) => state.climate);
    let { id } = useParams();
    const [climate, setClimate] = useState<{ [key: string]: string }>({})

    useEffect(() => {
        const climaSelect = climas.filter((item: any) => {
            return item._id === id
        })
        setClimate(climaSelect[0])
    }, [id])


    return (
        <div className="containerDetails">
            <h2>name: {climate.name}</h2>
            <p>state: {climate.state}</p>
            <p>probability of precip: {climate.probabilityofprecip}</p>
            <p>relative humidity: {climate.relativehumidity}</p>
            <p>last report time: {climate.lastreporttime}</p>
            <p>latitude: {climate.latitude}</p>
            <p>longitude: {climate.longitude}</p>
            <p>sky description long: {climate.skydescriptionlong}</p>
        </div>
    )
}
