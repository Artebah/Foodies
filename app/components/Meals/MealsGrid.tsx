import React from "react";
import { MealItem } from "./MealItem";
import { type Meal } from "@/app/types/Meal";

interface Props {
  meals: Meal[];
}

export const MealsGrid = ({ meals }: Props) => {
  return (
    <div>
      {meals.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </div>
  );
};
