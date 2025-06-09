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
import type { Testimonial } from "~/types/types";

const Homepage = () => {
  const services = [
    {
      title: "House Washing",
      description: "Complete exterior house cleaning and restoration",
      icon: <Zap className="h-8 w-8 text-blue-400" />,
    },
    {
      title: "Driveway Cleaning",
      description: "Remove oil stains, dirt, and grime from driveways",
      icon: <Shield className="h-8 w-8 text-blue-400" />,
    },
    {
      title: "Deck & Patio",
      description: "Restore your outdoor living spaces to like-new condition",
      icon: <Clock className="h-8 w-8 text-blue-400" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Amazing work! My driveway looks brand new. The Pressure Bros team was professional and efficient.",
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment:
        "Incredible transformation of our house exterior. Highly recommend their services!",
    },
    {
      name: "Lisa Rodriguez",
      rating: 5,
      comment:
        "Fast, reliable, and excellent results. Will definitely use them again.",
    },
  ];

  const serviceAreas = [
    "Dublin, CA",
    "Pleasenton, CA",
    "San Ramon, CA",
    "Livermore, CA",
  ];

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
                Professional Pressure Washing
              </Badge>
              <h1 className="mb-6 text-5xl font-bold text-gray-800 md:text-6xl">
                PRESSURE <span className="text-blue-400">BROS</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
                Transform your property with our professional pressure washing
                services. We make dirty surfaces look brand new!
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-blue-400 text-white hover:bg-blue-500"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Get Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700"
                >
                  View Our Work
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional pressure washing for all your needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      {service.icon}
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
                  SERVICE AREAS
                </Badge>
                <h2 className="mb-6 text-4xl font-bold text-gray-800">
                  Pressure Washing Company
                </h2>
                <p className="mb-8 text-lg text-gray-600">
                  We proudly serve the entire Metro Area and have a strong
                  presence in the following neighborhoods, where we have built a
                  reputation for customer satisfaction. Contact us today to
                  receive a{" "}
                  <span className="font-semibold text-blue-400">
                    personalized quote
                  </span>{" "}
                  tailored to your needs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {serviceAreas.map((area, index) => (
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
                  Get Quote for Your Area
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403099.60970397794!2d-123.03007871093749!3d37.878637999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa014a0ac1129f2b9%3A0xc9f1654a864e2ba8!2sBay%20Area%20Pressure%20Pros!5e0!3m2!1sen!2sus!4v1729050498049!5m2!1sen!2sus"
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
                Why Choose Pressure Bros?
              </h2>
              <div className="space-y-4">
                {[
                  "Professional equipment and eco-friendly solutions",
                  "Fully insured and licensed technicians",
                  "Satisfaction guarantee on all services",
                  "Competitive pricing with no hidden fees",
                  "Quick response times and flexible scheduling",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-blue-400 p-8 text-white">
              <h3 className="mb-4 text-2xl font-bold">Ready to Get Started?</h3>
              <p className="mb-6">
                Contact us today for a free estimate. We&apos;ll have your
                property looking amazing in no time!
              </p>
              <Button
                size="lg"
                className="w-full bg-white text-blue-400 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call (925) 931-2228
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
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don&apos;t just take our word for it
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex">
                      {[...Array(testimonial.rating) as Testimonial[]].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-current text-yellow-400"
                        />
                      ))}
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
          <h2 className="mb-4 text-4xl font-bold">
            Ready to Transform Your Property?
          </h2>
          <p className="mb-8 text-xl">
            Get your free quote today and see the Pressure Bros difference!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-blue-400 hover:bg-gray-100"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now: (925) 931-2228
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-400"
            >
              Request Quote Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
