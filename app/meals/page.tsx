import Link from "next/link";
import React from "react";
import ButtonLink from "../components/ButtonLink";

const MealsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">
        Delicious meals, created <span className="yellow-orange-gradient-text">by you</span>
      </h1>
      <p className="mb-3 text-white">Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
      <ButtonLink href="/meals/share">Share your favorite recipe</ButtonLink>
    </div>
  );
};

export default MealsPage;
