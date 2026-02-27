import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Smartphone,
  Code,
  Brain,
  Database,
  TrendingUp,
  ShoppingCart,
  Palette,
  Cloud,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    id: "web-dev",
    icon: Globe,
    title: "Web Development",
    description: "Professional, responsive & SEO-friendly websites that help your business grow online.",
    features: [
      "Business & Portfolio Websites",
      "Custom Web Applications",
      "Hosting & Security Setup",
      "Landing Page Development",
      "CMS Integration (WordPress)",
    ],
    category: "Development",
    highlighted: true,
  },
  {
    id: "mobile-dev",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Android & iOS applications built for performance, usability & scalability.",
    features: [
      "Native & Hybrid Apps",
      "UI/UX for Mobile",
      "App Store Deployment",
      "Push Notifications & APIs",
      "Ongoing Maintenance",
    ],
    category: "Development",
    highlighted: false,
  },
  {
    id: "software-dev",
    icon: Code,
    title: "Software Development",
    description: "Powering efficiency & automation with tailored software built for your workflow.",
    features: [
      "Custom ERP / CRM Solutions",
      "Workflow Automation",
      "Cloud-Based Applications",
      "API Development & Integration",
      "System Modernization",
    ],
    category: "Development",
    highlighted: false,
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent AI solutions that automate processes and deliver data-driven insights.",
    features: [
      "Predictive Analytics",
      "Computer Vision Solutions",
      "NLP & Chatbot Development",
      "Custom ML Model Development",
      "AI System Deployment",
    ],
    category: "AI & Data",
    highlighted: false,
  },
  {
    id: "data-annotation",
    icon: Database,
    title: "Data Annotation & AI Training",
    description: "High-quality labeled datasets to train accurate and scalable AI models.",
    features: [
      "Image & Video Annotation",
      "Text & NLP Data Labeling",
      "Audio & Speech Annotation",
      "Quality Validation & Review",
      "Model Training Support",
    ],
    category: "AI & Data",
    highlighted: false,
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Drive leads, conversions & brand visibility with comprehensive digital marketing strategies.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing (SMM)",
      "Content Marketing & Blogging",
      "Email Marketing Campaigns",
      "Google Ads (PPC)",
      "Facebook & Instagram Ads",
      "Marketing Analytics & Reporting",
      "Brand Strategy & Positioning",
      "Lead Generation & Nurturing",
      "Conversion Rate Optimization (CRO)",
    ],
    category: "Marketing",
    highlighted: true,
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Setup, optimize & grow online stores with seamless shopping experiences.",
    features: [
      "Custom Online Stores",
      "Payment Gateway Integration",
      "Product & Order Management",
      "Shipping & Tracking Setup",
      "Store UI/UX Optimization",
    ],
    category: "Design & Cloud",
    highlighted: false,
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX Design & Prototyping",
    description: "Beautiful, intuitive designs that keep users engaged & build trust.",
    features: [
      "Wireframes & Prototypes",
      "Website UI/UX Design",
      "Mobile App Design",
      "Branding & Identity Design",
      "User Journey Improvement",
    ],
    category: "Design & Cloud",
    highlighted: false,
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps Services",
    description: "Secure, scalable cloud infrastructure with automated deployment pipelines.",
    features: [
      "AWS, Azure & Google Cloud",
      "CI/CD Pipeline Setup",
      "Cloud Migration & Scaling",
      "Server Monitoring & Security",
      "Infrastructure Automation",
    ],
    category: "Design & Cloud",
    highlighted: false,
  },
];

const categories = ["All Services", "Development", "AI & Data", "Marketing", "Design & Cloud"];

export function Services() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  // Show only first 6 services on homepage
  const homePageServices = services.slice(0, 6);

  const filteredServices =
    activeCategory === "All Services"
      ? homePageServices
      : homePageServices.filter((service) => service.category === activeCategory);

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100/40 to-emerald-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full mb-3 md:mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm font-semibold text-emerald-700 tracking-wide uppercase">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Digital Services
            </span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            From concept to deployment, we deliver cutting-edge technology solutions tailored to transform your business and accelerate growth.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-16 px-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                activeCategory === category
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-emerald-300 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <div
                    className={`relative h-full p-6 md:p-8 rounded-2xl md:rounded-3xl transition-all duration-500 ${
                      service.highlighted
                        ? "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transform hover:scale-105 hover:-translate-y-2"
                        : "bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1"
                    }`}
                  >
                    {/* Highlight Badge */}
                    {service.highlighted && (
                      <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-yellow-400 text-gray-900 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg rotate-12 animate-pulse">
                        ⭐ Featured
                      </div>
                    )}

                    {/* Icon Circle */}
                    <div className="mb-4 md:mb-6">
                      <div
                        className={`inline-flex p-3 md:p-5 rounded-xl md:rounded-2xl transition-all duration-300 ${
                          service.highlighted
                            ? "bg-white/20 backdrop-blur-sm"
                            : "bg-gradient-to-br from-emerald-100 to-teal-100 group-hover:from-emerald-200 group-hover:to-teal-200"
                        }`}
                      >
                        <Icon
                          size={28}
                          className={`md:hidden ${
                            service.highlighted
                              ? "text-white"
                              : "text-emerald-600 group-hover:scale-110 transition-transform"
                          }`}
                          strokeWidth={2}
                        />
                        <Icon
                          size={36}
                          className={`hidden md:block ${
                            service.highlighted
                              ? "text-white"
                              : "text-emerald-600 group-hover:scale-110 transition-transform"
                          }`}
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <h4
                      className={`text-xl md:text-2xl font-bold mb-2 md:mb-3 ${
                        service.highlighted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h4>

                    <p
                      className={`mb-4 md:mb-6 leading-relaxed text-sm md:text-base ${
                        service.highlighted ? "text-white/90" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 md:space-y-2.5">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2 md:gap-3 text-xs md:text-sm ${
                            service.highlighted ? "text-white/95" : "text-gray-700"
                          }`}
                        >
                          <CheckCircle2
                            size={16}
                            className={`flex-shrink-0 mt-0.5 md:hidden ${
                              service.highlighted
                                ? "text-white"
                                : "text-emerald-500"
                            }`}
                            strokeWidth={2.5}
                          />
                          <CheckCircle2
                            size={18}
                            className={`flex-shrink-0 mt-0.5 hidden md:block ${
                              service.highlighted
                                ? "text-white"
                                : "text-emerald-500"
                            }`}
                            strokeWidth={2.5}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Decorative gradient overlay on hover */}
                    {!service.highlighted && (
                      <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 md:mt-16"
        >
          <Link to="/services">
            <button className="group inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              View All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}