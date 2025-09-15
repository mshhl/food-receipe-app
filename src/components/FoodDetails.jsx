import { useEffect, useState } from "react";

const RECEIPEURL = import.meta.env.VITE_FETCH_RECEIPE_API_1;
const VITE_RECEIPE_URL = import.meta.env.VITE_RECEIPE_URL
export default function FoodDetails({ foodId }) {
  const [food,setFood] = useState({})
 useEffect(()=>{
    async function fetchReceipe(){
        const result = await fetch(`${VITE_RECEIPE_URL}?i=${foodId}`);
        const receipeData = await result.json();
        console.log(receipeData.meals);
       setFood(receipeData.meals[0]);

    }
    fetchReceipe()
 },[foodId])
  return(
    <div>
   <div>
     <h1>{food.strMeal}</h1>
     <img src={food.strMealThumb} />
   </div>
   <span>
    <strong>{food.strArea }😊</strong>
   </span>
   <span>
    {food.strCategory}🍗
   </span>

        
  </div>
  ) 
}
