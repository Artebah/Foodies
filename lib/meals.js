import sql from "better-sqlite3";
import delay from "delay";
import xss from "xss";
import slugify from "slugify";
import fs from "node:fs";

const dbPath = process.env.NODE_ENV === "production" ? "/tmp/meals.db" : "meals.db";

const db = sql(dbPath, { verbose: console.log });

export async function getMeals() {
  try {
    await delay(2000);

    //throw new Error("meals error");
    return db.prepare("SELECT * FROM meals").all();
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw error;
  }
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  try {
    // "Hello World!" > "hello-world"
    meal.slug = slugify(meal.title, { lover: true });
    // removes < and > signs to avoid attacks
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split(".").pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error("Saving image failed!");
      }
    });

    meal.image = `/images/${fileName}`;

    const query = `
      INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.prepare(query).run(
      meal.title,
      meal.summary,
      meal.instructions,
      meal.creator,
      meal.creator_email,
      meal.image,
      meal.slug
    );
  } catch (error) {
    console.error("Error saving meal:", error);
    throw error;
  }
}
