import sql from "better-sqlite3";
import delay from "delay";

const db = sql("meals.db");

export async function getMeals() {
  await delay(2000);
  return db.prepare("SELECT * FROM meals").all();
}
