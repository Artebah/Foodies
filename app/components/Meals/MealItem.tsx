import { type Meal } from "@/app/types/Meal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MealItem = ({ creator, image, slug, summary, title }: Meal) => {
  return (
    <article className="">
      <header>
        <div className="">
          <Image src={image} alt={title} fill />
        </div>
        <div className="">
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className="">
        <p className="">{summary}</p>
        <div className="">
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};
