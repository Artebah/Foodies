import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "@/lib/meals";
import { Meal } from "@/app/types/Meal";

interface Props {
  params: { slug: string };
}

export default function MealDetailsPage({ params }: Props) {
  const meal: Meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <div>
      <div className="flex gap-10">
        <div className="w-80 h-64 relative shrink-0 shadow-lg shadow-stone-900">
          <Image className="rounded-md object-cover" src={meal.image} alt={meal.title} fill sizes=" " />
        </div>
        <div className="text-white">
          <h1 className="text-6xl font-bold mb-5 uppercase">{meal.title}</h1>
          <p className="italic">
            by{" "}
            <a className="yellow-orange-gradient-text" href={`mailto:${meal.creator_email}`}>
              {meal.creator}
            </a>
          </p>
          <p className="mt-3">{meal.summary}</p>
        </div>
      </div>
      <div className="mt-10 px-16">
        <p
          className="rounded-md bg-stone-gray text-white p-5"
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: Props) {
  const meal = await getMeal(params.slug);

  return {
    title: meal?.title,
    description: "Details of issue " + meal?.id,
  };
}
