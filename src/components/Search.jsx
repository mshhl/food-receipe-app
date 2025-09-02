import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = import.meta.env.VITE_URL;

export default function Search({foodData,setFoodData}) {
  const [query, setQuery] = useState("salad");
  useEffect(() => {
    async function fetchFood() {
     try {
       const response = await fetch(`${URL}?s=${query}`);
      const data = await response.json();
      setFoodData(data.meals);
     } catch (error) {
      console.error("Error occuered",error.message);
     }
    }
    fetchFood();
  }, [query]);1
  return (
    <div className={styles.searchContainer}>
      <input
      className={styles.input}
        value={query}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
