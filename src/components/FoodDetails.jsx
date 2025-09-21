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
   <h2>Ingredients</h2>
   <div className={styles.ingredients}>
   <div className={styles.innerIngredientDiv}>
       <strong>{food.strIngredient1}</strong>
       <strong>{food.strMeasure1}</strong>
    </div>
   <div className={styles.innerIngredientDiv}>
       <strong>{food.strIngredient2}</strong>
       <strong>{food.strMeasure2}</strong>
    </div>
   <div className={styles.innerIngredientDiv}>
       <strong>{food.strIngredient3}</strong>
       <strong>{food.strMeasure3}</strong>
    </div>
   <div className={styles.innerIngredientDiv}>
       <strong>{food.strIngredient4}</strong>
       <strong>{food.strMeasure4}</strong>
    </div>
   <div className={styles.innerIngredientDiv}>
       <strong>{food.strIngredient5}</strong>
       <strong>{food.strMeasure5}</strong>
    </div>
   <div className={styles.innerIngredientDiv}>
       <strong>{food.strIngredient6}</strong>
       <strong>{food.strMeasure6}</strong>
    </div>
   <div className={styles.innerIngredientDiv}>
       <strong>{food.strIngredient7}</strong>
       <strong>{food.strMeasure7}</strong>
    </div>
   <div className={styles.innerIngredientDiv}>
       <strong>{food.strIngredient8}</strong>
       <strong>{food.strMeasure8}</strong>
    </div>
   <div className={styles.innerIngredientDiv}>
       <strong>{food.strIngredient9}</strong>
       <strong>{food.strMeasure9}</strong>
    </div>
   </div>
   <h2>Instructions</h2>
   <div className={styles.receipeInstructions}>
    {isLoading? (<p>isLoading...</p>):(food.strInstructions)}

   </div>

   </div>
  
        
  </div>
  )
}
