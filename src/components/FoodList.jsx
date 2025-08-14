import FoodItem from "./FoodItem";

export default function FoodList({ foodData }) {
  return (
    <div>
      {foodData.map((food) => {
        return <FoodItem food={food} />;
      })}
    </div>
  );
}
