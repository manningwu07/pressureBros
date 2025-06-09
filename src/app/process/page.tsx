"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Phone,
  CheckCircle,
  Droplets,
  Shield,
  SprayCan,
  Sparkles,
  Clock,
  Users,
} from "lucide-react";

const ProcessPage = () => {
  const processSteps = [
    {
      step: 1,
      title: "Initial Assessment",
      description:
        "We evaluate your property to determine the best cleaning approach and identify any special requirements.",
      icon: <CheckCircle className="w-8 h-8 text-blue-400" />,
      details: [
        "Property inspection and surface analysis",
        "Identify stains, mold, and problem areas",
        "Determine appropriate pressure settings",
        "Plan the most efficient cleaning route",
      ],
    },
    {
      step: 2,
      title: "Preparation & Setup",
      description:
        "We protect your property and set up our professional-grade equipment for optimal results.",
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      details: [
        "Cover and protect plants and outdoor furniture",
        "Set up professional pressure washing equipment",
        "Connect to water source and test pressure",
        "Apply pre-treatment solutions where needed",
      ],
    },
    {
      step: 3,
      title: "High-Pressure Cleaning",
      description:
        "Using industrial-grade equipment, we systematically clean every surface to perfection.",
      icon: <SprayCan className="w-8 h-8 text-blue-400" />,
      details: [
        "Use appropriate pressure for each surface type",
        "Apply specialized cleaning solutions",
        "Remove dirt, grime, mold, and stains",
        "Work in systematic patterns for even coverage",
      ],
    },
    {
      step: 4,
      title: "Final Rinse & Inspection",
      description:
        "We thoroughly rinse all surfaces and conduct a final quality inspection to ensure perfection.",
      icon: <Droplets className="w-8 h-8 text-blue-400" />,
      details: [
        "Complete final rinse of all cleaned surfaces",
        "Remove any remaining cleaning solution residue",
        "Inspect work for quality and completeness",
        "Clean up equipment and work area",
      ],
    },
    {
      step: 5,
      title: "Quality Assurance",
      description:
        "We walk through the completed work with you to ensure 100% satisfaction with the results.",
      icon: <Sparkles className="w-8 h-8 text-blue-400" />,
      details: [
        "Complete walkthrough with customer",
        "Address any concerns or touch-ups",
        "Provide maintenance recommendations",
        "Ensure complete customer satisfaction",
      ],
    },
  ];

  const equipmentFeatures = [
    {
      title: "Industrial-Grade Pressure Washers",
      description: "Professional equipment delivering up to 4000 PSI",
      icon: <SprayCan className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Eco-Friendly Solutions",
      description: "Biodegradable cleaners safe for plants and pets",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Variable Pressure Control",
      description: "Adjustable settings for different surface types",
      icon: <Droplets className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Professional Team",
      description: "Trained and insured technicians",
      icon: <Users className="w-6 h-6 text-blue-400" />,
    },
  ];

  const safetyMeasures = [
    "All technicians are fully trained and certified",
    "We carry comprehensive liability insurance",
    "Proper safety equipment used at all times",
    "Environmental protection protocols followed",
    "Surface-appropriate pressure settings used",
    "Pre-treatment testing on inconspicuous areas",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-blue-400 text-white">
              Professional Process
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How We Work
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven 5-step high-pressure cleaning process ensures
              exceptional results every time, with attention to detail and
              safety.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <Card className="h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                            {step.step}
                          </div>
                          <div>{step.icon}</div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-6">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="flex items-start space-x-2"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                    <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-6xl mb-2">{step.icon}</div>
                        <p className="text-lg font-semibold">Step {step.step}</p>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Equipment */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Professional Equipment
              </h2>
              <div className="space-y-6">
                {equipmentFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
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
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Safety & Quality Assurance
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  {safetyMeasures.map((measure, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Typical Service Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Most residential jobs completed in 2-4 hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Small Jobs
                </h3>
                <p className="text-gray-600 mb-4">
                  Driveways, sidewalks, small patios
                </p>
                <div className="text-2xl font-bold text-blue-400">1-2 Hours</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Medium Jobs
                </h3>
                <p className="text-gray-600 mb-4">
                  House washing, large decks, multiple surfaces
                </p>
                <div className="text-2xl font-bold text-blue-400">2-4 Hours</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Large Jobs
                </h3>
                <p className="text-gray-600 mb-4">
                  Commercial properties, large homes, multiple buildings
                </p>
                <div className="text-2xl font-bold text-blue-400">4+ Hours</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Experience Our Process?
            </h2>
            <p className="text-xl mb-8">
              Contact us today to schedule your professional pressure washing
              service!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-400 hover:bg-gray-100"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (925) 931-2228
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-400"
              >
                Get Free Estimate
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;