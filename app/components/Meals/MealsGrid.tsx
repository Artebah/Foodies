import React from "react";
import { MealItem } from "./MealItem";
import { type Meal } from "@/types/Meal";
import { getMeals } from "@/lib/meals";

const MealsGrid = async () => {
  const meals: Meal[] = await getMeals();

  if (!meals) {
    return <div>Error loading meals</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-10">
      {meals?.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </div>
  );
};

export { MealsGrid };
