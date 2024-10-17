import Link from "next/link";
import Slideshow from "./components/Slideshow";

export default function Home() {
  return (
    <main className="_container flex gap-7 mt-10">
      <div className="basis-96 shrink-0">
        <Slideshow />
      </div>
      <div>
        <div>
          <h1 className="text-3xl uppercase font-bold tracking-wider text-transparent bg-gradient-to-r from-custom-orange to-custom-yellow bg-clip-text">
            NextLevel Food for NextLevel Foodies
          </h1>
          <p className="text-white pt-3 text-sm">Taste & share food from all over the world.</p>
        </div>
        <div className="mt-5">
          <Link className="navlink text-custom-yellow mr-4" href="/community">
            Join the Community
          </Link>
          <Link
            className="yellow-orange-gradient-highligh bg-gradient-to-r from-custom-orange to-custom-yellow px-2 py-1 rounded-md text-white shadow-md"
            href="/meals">
            Explore Meals
          </Link>
        </div>
      </div>
    </main>
  );
}
