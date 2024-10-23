import Link from "next/link";
import { Slideshow } from "./components/Slideshow";
import { ButtonLink } from "./components/ButtonLink";
import { Metadata } from "next";

export default function Home() {
  return (
    <div className="flex gap-7 h-80">
      <div className="basis-96 shrink-0">
        <Slideshow />
      </div>
      <div>
        <div>
          <h1 className="text-3xl uppercase font-bold yellow-orange-gradient-text">
            NextLevel Food for NextLevel Foodies
          </h1>
          <p className="text-white pt-3 text-sm">Taste & share food from all over the world.</p>
        </div>
        <div className="mt-5">
          <Link className="navlink text-custom-yellow mr-4" href="/community">
            Join the Community
          </Link>
          <ButtonLink href="/meals">Explore Meals</ButtonLink>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Taste & share food from all over the world",
};
