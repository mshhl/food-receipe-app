import styles from "./fooditem.module.css";
export default function FoodItem({ food,setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.strMealThumb} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.strMeal}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
           setFoodId(food.idMeal);
          }}
          className={styles.itemButton}
        >
          View Receipe
        </button>
      </div>
    </div>
  );
}
