import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1710770563074-6d9cc0d3e338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZGV2ZWxvcGVyJTIwY29kaW5nfGVufDF8fHx8MTc2MjIxMDI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  
  },
  {
    url: "https://images.unsplash.com/photo-1569396116180-7fe09fa16dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzY3JlZW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjIxMDI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
 
  },
  {
    url: "https://images.unsplash.com/photo-1632454005865-1ea2afe2074f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjIxMDI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  
  },
  {
    url: "https://images.unsplash.com/photo-1652696290920-ee4c836c711e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBsYXB0b3B8ZW58MXx8fHwxNzYyMTI1NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
   
  },
];

export function HeroCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border-4 border-purple-200 dark:border-purple-800 shadow-2xl shadow-purple-500/20">
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white drop-shadow-lg">{image.title}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/90 dark:bg-gray-900/90 border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/50" />
        <CarouselNext className="right-4 bg-white/90 dark:bg-gray-900/90 border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/50" />
      </Carousel>
    </div>
  );
}
