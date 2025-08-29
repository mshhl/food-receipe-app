import { useEffect } from "react";

const RECEIPEURL = import.meta.env.VITE_FETCH_RECEIPE_API_1;
const INFOPART = import.meta.env.VITE_INFO_PART
const apiKey = import.meta.env.VITE_API_KEY

export default function FoodDetails({ foodId }) {
 const url = `${RECEIPEURL}/${foodId}/${INFOPART}`;
 useEffect(()=>{
    async function fetchReceipe(){
        const result = await fetch(`${RECEIPEURL}/${foodId}/${INFOPART}?apiKey=${apiKey}`);
        const receipeData = await result.json();
        console.log(receipeData);

    }
 },[])
  return <div>{foodId}</div>;
}
