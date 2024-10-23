"use client";

import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.log(error.message);
  }, [error]);

  return (
    <div className="text-center w-full">
      <h2 className="yellow-orange-gradient-text font-bold text-4xl">Something went wrong!</h2>
      <p className="text-white">Failed to fetch meal data. Please try again later</p>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;
