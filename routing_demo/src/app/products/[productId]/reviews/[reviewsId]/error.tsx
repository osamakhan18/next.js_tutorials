"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh(); // refresh the current route
      reset();           // retry the boundary
    });
  };

  return (
    <div>
      <h2>Something went wrong in the review page.</h2>
      <p>{error.message}</p>
      <button onClick={reload}>Try again</button>
    </div>
  );
}
