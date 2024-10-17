"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center w-full">
      <h2 className="yellow-orange-gradient-text font-bold text-4xl">Something went wrong!</h2>
      <p className="text-white">Failed to fetch meal data. Please try again later</p>
    </div>
  );
}
