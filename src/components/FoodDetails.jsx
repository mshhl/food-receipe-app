import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
const RECEIPEURL = import.meta.env.VITE_FETCH_RECEIPE_API_1;
const VITE_RECEIPE_URL = import.meta.env.VITE_RECEIPE_URL
export default function FoodDetails({ foodId }) {
  const [food,setFood] = useState({});
  const [isLoading,setIsLoading] = useState(true)
 useEffect(()=>{
    async function fetchReceipe(){
        const result = await fetch(`${VITE_RECEIPE_URL}?i=${foodId}`);
        const receipeData = await result.json();
        console.log(receipeData.meals);
       setFood(receipeData.meals[0]);
       setIsLoading(false)

    }
    fetchReceipe()
 },[foodId])
  return(
  <div>
   <div className={styles.receipeCard}>
     <h1 className={styles.receipeName}>{food.strMeal}</h1>
     <img className={styles.receipeImage} src={food.strMealThumb} />
     <div className={styles.receipeDetails}>
      <span>
    <strong>{food.strArea }😊</strong>
   </span>
   <span>
    {food.strCategory}🍗
   </span>
   </div>

   <div>
    <h2>Instructions</h2>
    {isLoading? (<p>isLoading...</p>):(food.strInstructions)}
    
   </div>

   </div>
  
        
  </div>
  )
}
