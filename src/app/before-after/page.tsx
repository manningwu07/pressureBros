"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Star, Phone } from "lucide-react";
import Image from "next/image";
import type { PressureBrosData, Testimonial } from "~/types/types";
import ImageComparisonSlider from "./imageComparisonSlider";
import { usePullContent } from "~/utils/pageUtils";
import { Skeleton } from "~/components/ui/skeleton";


interface PageProps {
  adminContent: PressureBrosData;
  adminError: boolean;
}


const BeforeAfterPage = ({ adminContent, adminError }: PageProps) => {
  const pullContent = usePullContent();
  const content = adminContent ?? pullContent.content;
  const error = adminError ?? pullContent.error;

  if (error) {
    return <div className="py-10 text-center">Error loading content.</div>;
  }
  if (!content) {
    return (
      <div className="space-y-10 p-4">
        <Skeleton className="h-96 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  const { hero, gallery, testimonials, cta  } = content.beforeAfterPage;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-blue-400 text-white">
              {hero.badge}
            </Badge>
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
              {hero.title}
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              {hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageComparisonSlider
                      beforeImage={item.before}
                      afterImage={item.after}
                      beforeLabel="Before"
                      afterLabel="After"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              {testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">
              {testimonials.subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Image
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="mb-2 flex items-center">
                          <div className="mr-2 flex">
                            {[
                              ...(Array(testimonial.rating) as Testimonial[]),
                            ].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-current text-yellow-400"
                              />
                            ))}
                          </div>
                          <Badge
                            variant="outline"
                            className="border-blue-400 text-xs text-blue-400"
                          >
                            {testimonial.service}
                          </Badge>
                        </div>
                        <p className="mb-4 text-gray-600 italic">
                          &quot;{testimonial.comment}&quot;
                        </p>
                        <div>
                          <div className="font-semibold text-gray-800">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-400 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold">
              {cta.title}
            </h2>
            <p className="mb-8 text-xl">
              {cta.subtitle}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-blue-400 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-4 w-4" />
                {cta.quoteButton.text}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-400"
              >
                {cta.scheduleButton.text}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BeforeAfterPage;
