"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidField(field) {
  return !field || !field.trim();
}

export async function shareMeal(formData) {
  try {
    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };

    if (
      isInvalidField(meal.title) ||
      isInvalidField(meal.summary) ||
      isInvalidField(meal.instructions) ||
      isInvalidField(meal.creator) ||
      isInvalidField(meal.creator_email) ||
      !meal.creator_email.includes("@") ||
      !meal.image ||
      meal.image.size === 0
    ) {
      throw new Error("Invalid Input");
    }

    await saveMeal(meal);

    revalidatePath("/meals");
    redirect("/meals");
  } catch (error) {
    console.error("Error sharing meal:", error);
    throw error;
  }
}
