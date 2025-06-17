
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Clock, TrendingUp, RefreshCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { parseRSSFeed, BlogPost } from "@/utils/rssParser";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface LiveFeedCarouselProps {
  category?: string;
  title?: string;
  description?: string;
}

const LiveFeedCarousel = ({ 
  category, 
  title = "Latest from GearUpToFit",
  description = "Live updates from our latest reviews, guides, and fitness insights"
}: LiveFeedCarouselProps) => {
  const { data: posts, isLoading, error, refetch } = useQuery({
    queryKey: ['gearuptofit-feed', category],
    queryFn: () => parseRSSFeed('https://gearuptofit.com/feed', category),
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    staleTime: 2 * 60 * 1000, // Consider data stale after 2 minutes
    retry: 1, // Only retry once on failure
    retryDelay: 3000,
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleRefresh = () => {
    refetch();
  };

  // Always show exactly 15 posts
  const displayPosts = posts ? posts.slice(0, 15) : [];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gearup-charcoal">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gearup-red" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
              {title}
            </h2>
            <Button
              onClick={handleRefresh}
              disabled={isLoading}
              className="bg-gearup-red hover:bg-red-700 text-white"
              size="sm"
            >
              <RefreshCw className={`w-3 h-3 sm:w-4 sm:h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
          <p className="text-lg sm:text-xl text-gearup-light max-w-3xl mx-auto px-2">
            {description}
          </p>
          <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
            <div className={`w-2 h-2 rounded-full animate-pulse ${error ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
            <span className={`text-xs sm:text-sm font-medium ${error ? 'text-yellow-400' : 'text-green-400'}`}>
              {isLoading ? 'Loading...' : error ? `Showing ${displayPosts.length} cached posts` : `Live Feed • ${displayPosts.length} latest posts`}
            </span>
          </div>
        </div>

        {displayPosts.length > 0 && (
          <div className="max-w-7xl mx-auto">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 1000, // 1 second between slides
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                })
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
                {displayPosts.map((post, index) => (
                  <CarouselItem key={index} className="pl-1 sm:pl-2 md:pl-4 basis-4/5 sm:basis-3/5 md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-gearup-light-gray border-gearup-red/20 hover:border-gearup-red transition-all h-full group hover:shadow-xl hover:shadow-gearup-red/10">
                      <div className="relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-36 sm:h-40 md:h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                          }}
                        />
                        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                          <span className="bg-gearup-red text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-6">
                        <div className="flex items-center gap-2 text-gearup-light text-xs sm:text-sm mb-1 sm:mb-2">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{formatDate(post.pubDate)}</span>
                        </div>
                        <CardTitle className="text-white text-sm sm:text-base lg:text-lg leading-tight line-clamp-2 group-hover:text-gearup-red transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-gearup-light line-clamp-2 text-xs sm:text-sm">
                          {post.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0 px-3 sm:px-6">
                        <Button 
                          className="w-full bg-gearup-red hover:bg-red-700 text-white transition-all duration-300 group-hover:shadow-lg text-xs sm:text-sm"
                          asChild
                          size="sm"
                        >
                          <a href={post.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            Read Article
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-8 lg:-left-12 bg-gearup-red hover:bg-red-700 text-white border-gearup-red" />
              <CarouselNext className="hidden md:flex -right-8 lg:-right-12 bg-gearup-red hover:bg-red-700 text-white border-gearup-red" />
            </Carousel>
          </div>
        )}

        <div className="text-center mt-6 sm:mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gearup-red text-gearup-red hover:bg-gearup-red hover:text-white transition-all duration-300"
            asChild
          >
            <a href="https://gearuptofit.com" target="_blank" rel="noopener noreferrer">
              Visit GearUpToFit.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveFeedCarousel;
