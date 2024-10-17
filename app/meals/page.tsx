import React, { Suspense } from "react";
import ButtonLink from "../components/ButtonLink";
import { MealsGrid } from "../components/Meals";

const MealsPage = async () => {
  return (
    <div className="w-full">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Delicious meals, created <span className="yellow-orange-gradient-text">by you</span>
        </h1>
        <p className="mb-3 text-white">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <ButtonLink href="/meals/share">Share your favorite recipe</ButtonLink>
      </div>
      <div className="mt-10">
        <Suspense fallback={<p className="text-white text-center animate-pulse">Fetching meals...</p>}>
          <MealsGrid />
        </Suspense>
      </div>
    </div>
  );
};

export default MealsPage;
