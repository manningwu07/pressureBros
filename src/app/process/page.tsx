"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Phone,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Skeleton } from "~/components/ui/skeleton";
import type { PressureBrosData } from "~/types/types";
import { usePullContent } from "~/utils/pageUtils";

interface PageProps {
  adminContent: PressureBrosData;
  adminError: boolean;
}

const ProcessPage = ({ adminContent, adminError }: PageProps) => {
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
  const { hero, steps, equipmentAndSafety, timeline, cta } =
    content.processPage;

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
            <Badge className="mb-4 bg-blue-400 text-white">{hero.badge}</Badge>
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
              {hero.title}
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              {hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`grid items-center gap-12 md:grid-cols-2 ${
                    index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <Card className="h-full">
                      <CardContent className="p-8">
                        <div className="mb-4 flex items-center">
                          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 text-xl font-bold text-white">
                            {step.step}
                          </div>
                          <div>{step.icon}</div>
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-gray-800">
                          {step.title}
                        </h3>
                        <p className="mb-6 text-gray-600">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="flex items-start space-x-2"
                            >
                              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                    <div className="flex h-80 items-center justify-center rounded-lg bg-gray-200">
                      <div className="text-center text-gray-500">
                        <div className="mb-2 text-6xl">{step.icon}</div>
                        <p className="text-lg font-semibold">
                          Step {step.step}
                        </p>
                        <p className="text-sm">{step.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Safety */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Equipment */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-800">
                {equipmentAndSafety.equipment.title}
              </h2>
              <div className="space-y-6">
                {equipmentAndSafety.equipment.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Safety */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-800">
                {equipmentAndSafety.safety.title}
              </h2>
              <div className="rounded-lg bg-gray-50 p-6">
                <div className="space-y-4">
                  {equipmentAndSafety.safety.measures.map((measure, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-gray-700">{measure}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              {timeline.title}
            </h2>
            <p className="text-xl text-gray-600">{timeline.subtitle}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {timeline.items.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Clock className="mx-auto mb-4 h-12 w-12 text-blue-400" />
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-gray-600">
                    {item.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-400">
                    {item.duration}
                  </div>
                </CardContent>
              </Card>
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
                {cta.callButton.text}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-400"
              >
                {cta.quoteButton.text}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
