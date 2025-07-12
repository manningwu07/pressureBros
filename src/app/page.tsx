"use client";

import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  Zap,
  Shield,
  Clock,
  Star,
  CheckCircle,
  Phone,
  ArrowRight,
  MapPin,
} from "lucide-react";
import type { PressureBrosData, Testimonial } from "~/types/types";
import { usePullContent } from "~/utils/pageUtils";
import { Skeleton } from "~/components/ui/skeleton";
import jsonContent from "~/content.json";

interface PageProps {
  adminContent: PressureBrosData | null;
  adminError: boolean;
}

const iconMap = {
  Zap: <Zap className="h-8 w-8 text-blue-400" />,
  Shield: <Shield className="h-8 w-8 text-blue-400" />,
  Clock: <Clock className="h-8 w-8 text-blue-400" />,
  Star: <Star className="h-8 w-8 text-blue-400" />,
  CheckCircle: <CheckCircle className="h-8 w-8 text-blue-400" />,
  Phone: <Phone className="h-8 w-8 text-blue-400" />,
  ArrowRight: <ArrowRight className="h-8 w-8 text-blue-400" />,
  MapPin: <MapPin className="w=8 h-8 text-blue-400" />,
};

const Homepage = ({ adminContent, adminError }: PageProps) => {
  const pullContent = usePullContent();
  const content = adminContent ?? pullContent.content ?? jsonContent;
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

  const { hero, services, serviceAreas, whyChooseUs, testimonials, contact } =
    content.homepage;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-blue-400 text-white">
                {hero.badge}
              </Badge>
              <h1 className="mb-6 text-5xl font-bold text-gray-800 md:text-6xl">
                {hero.title.split(" ")[0]}{" "}
                <span className="text-blue-400">
                  {hero.title.split(" ")[1]}
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
                {hero.subtitle}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-blue-400 text-white hover:bg-blue-500"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {hero.quoteButton.text}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700"
                >
                  {hero.viewWorkButton.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              {services.title}
            </h2>
            <p className="text-xl text-gray-600">{services.subtitle}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.items.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      {iconMap[service.icon as keyof typeof iconMap]}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <Badge className="mb-4 bg-blue-400 text-sm font-semibold tracking-wider text-white">
                  {serviceAreas.badge}
                </Badge>
                <h2 className="mb-6 text-4xl font-bold text-gray-800">
                  {serviceAreas.title}
                </h2>
                <p className="mb-8 text-lg text-gray-600">
                  {serviceAreas.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {serviceAreas.areas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <MapPin className="h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span className="text-sm font-medium">{area}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="bg-blue-400 text-white hover:bg-blue-500">
                  <Phone className="mr-2 h-4 w-4" />
                  {serviceAreas.quoteButton.text}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <iframe
                    src="https://maps.google.com/maps?width=100%25&height=450&hl=en&q=Dublin,%20CA+(Pressure%20Bros)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    width="450"
                    height="450"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-800">
                {whyChooseUs.title}
              </h2>
              <div className="space-y-4">
                {whyChooseUs.reasons.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-blue-400 p-8 text-white">
              <h3 className="mb-4 text-2xl font-bold">
                {whyChooseUs.cta.title}
              </h3>
              <p className="mb-6">{whyChooseUs.cta.description}</p>
              <Button
                size="lg"
                className="w-full bg-white text-blue-400 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-4 w-4" />
                {whyChooseUs.cta.button.text}
              </Button>
            </div>
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
            <p className="text-xl text-gray-600">{testimonials.subtitle}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.items.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex">
                      {[...(Array(testimonial.rating) as Testimonial[])].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-current text-yellow-400"
                          />
                        ),
                      )}
                    </div>
                    <p className="mb-4 text-gray-600">
                      &quot;{testimonial.comment}&quot;
                    </p>
                    <div className="font-semibold text-gray-800">
                      - {testimonial.name}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-400 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-4xl font-bold">{contact.title}</h2>
          <p className="mb-8 text-xl">{contact.subtitle}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-blue-400 hover:bg-gray-100"
            >
              <Phone className="mr-2 h-4 w-4" />
              {contact.callButton.text}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-400"
            >
              {contact.quoteButton.text}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
