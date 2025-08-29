import FoodItem from "./FoodItem";

export default function FoodList({ setFoodId,foodData }) {
  return (
    <div>
      {foodData.map((food) => {
        return <FoodItem food={food} setFoodId = {setFoodId} />;
      })}
    </div>
  );
}
