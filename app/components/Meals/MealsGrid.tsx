import React from "react";
import { MealItem } from "./MealItem";
import { type Meal } from "@/app/types/Meal";
import { getMeals } from "@/lib/meals";

export const MealsGrid = async () => {
  const meals: Meal[] = await getMeals();

  return (
    <div className="grid grid-cols-3 gap-10">
      {meals.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </div>
  );
};
