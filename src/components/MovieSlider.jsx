import React, { useState } from "react";
import { cn } from "./lib/utils";  // Assuming this utility exists in your project

export const Card = React.memo(({ card, index, hovered, setHovered }) => (

  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    <img
      src={`/movie_posters/${card.poster_path}`}  // Ensure data has 'src' for images

      alt={card.title} // Ensure data has 'title'
      className="object-cover absolute inset-0" />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}>
      <div className="text-xl w-[100%] font-bold bg-clip-text text-transparent text-white">
        <div className="felx justify-center items-center w-[100%]  flex-col gap-2 rounded-md bg-opacity-75">
          <div className="bg-opacity-80 ">{card.title}</div>
          <div className=""><button className="p-2 text-sm bg-opacity-70 bg-white text-black rounded-md">Play Now</button></div>
        </div>
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

const MovieSlider = ({ data }) => {
  const [hovered, setHovered] = useState(null);

  if (!data) return null;
  return (
    <div className="p-2">
      {
        <swiper-container slides-per-view="4" navigation="false" speed="600" css-mode="true" grid-rows="1" mousewheel-force-to-axis="true">

          {
            data.map((card, index) => {
              return (
                <swiper-slide key={card.id}>
                  <div className="m-2">
                    <Card  // Ensure each card has a unique 'title'
                      card={card}
                      index={index}
                      hovered={hovered}
                      setHovered={setHovered}
                    />
                  </div>
                </swiper-slide>
              )
            })
          }
        </swiper-container>
      }
    </div>
  );
}

export default MovieSlider;


