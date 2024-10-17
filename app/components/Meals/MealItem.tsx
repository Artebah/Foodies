import { type Meal } from "@/app/types/Meal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonLink from "../ButtonLink";

export const MealItem = ({ creator, image, slug, summary, title }: Meal) => {
  return (
    <article className="text-white text-xs flex flex-col rounded-md shadow-lg shadow-stone-900 overflow-hidden bg-gradient-to-r from-card-bg-from to-card-bg-to">
      <header>
        <div className="h-56 w-full relative">
          <Image priority sizes=" " className="object-cover" src={image} alt={title} fill />
        </div>
        <div className="pt-3 px-2">
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-xs italic text-dark-text">by {creator}</p>
        </div>
      </header>
      <div className="px-2 mt-3">
        <p className="">{summary}</p>
      </div>
      <div className="mt-4 flex justify-end items-end grow pb-3 px-2">
        <ButtonLink href={`/meals/${slug}`}>View Details</ButtonLink>
      </div>
    </article>
  );
};
