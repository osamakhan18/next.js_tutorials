import { notFound } from 'next/navigation';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  // Randomly throw an error (simulating failure)
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }

  // Await params (used with React's `use()` in Server Components)
  const { productId, reviewId } = await params;

  // Simulate a "not found" condition
  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      <h1>Review {reviewId} for Product {productId}</h1>
    </div>
  );
}
