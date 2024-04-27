import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

const testimonials = [
  {
    quote:
    "Partnering with this sales platform was a game-changer for our business. Their expert guidance and innovative strategies took our sales to unprecedented heights.",
    name: "Sarah Johnson, CEO",
    title: "Acme Enterprises",
  },
  {
    quote:
    "I was skeptical at first, but the results speak for themselves. This sales solution has transformed the way we approach our market and deliver value to our customers.",
    name: "Michael Chen, Sales Director",
    title: "Horizon Technologies",
  },
  {
    quote: "Hands down the best sales platform I've ever used. The personalized support and data-driven insights have been instrumental in driving our company's revenue growth.",
    name: "David Hernandez, Founder",
    title: "Sunrise Enterprises",
  },
];

export default Testimonials;
