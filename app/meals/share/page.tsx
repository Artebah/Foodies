import { ImagePicker } from "@/app/components/ImagePicker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import { MealFormSubmit } from "@/app/components/Meals/MealFormSubmit";
import { Metadata } from "next";

export default function ShareMealPage() {
  return (
    <>
      <div className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </div>
      <div className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea id="instructions" name="instructions" rows={10} required></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          <p className={classes.actions}>
            <MealFormSubmit />
          </p>
        </form>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Share meal",
  description: "Share your favorite recipe",
};
