import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";

const servicesData = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "Professional, responsive & SEO-friendly websites that help your business grow online.",
    image: "https://i.pinimg.com/1200x/a8/e8/0a/a8e80a73380d7c15d549a23be9790da8.jpg",
    category: "Development",
    highlighted: true,
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    shortDescription: "Android & iOS applications built for performance, usability & scalability.",
    image: "https://i.pinimg.com/736x/4d/e2/6b/4de26bb962a47b9d5c2e76d30544ddc1.jpg",
    category: "Development",
    highlighted: false,
  },
  {
    id: "software-development",
    title: "Software Development",
    shortDescription: "Powering efficiency & automation with tailored software built for your workflow.",
    image: "https://i.pinimg.com/736x/96/d1/cc/96d1cc416bfc7a2a0a16feb235f1defa.jpg",
    category: "Software Development",
    highlighted: false,
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortDescription: "Intelligent AI solutions that automate processes and deliver data-driven insights.",
    image: "https://i.pinimg.com/736x/db/29/c7/db29c787516fbb468ea220803f35862a.jpg",
    category: "AI & Data",
    highlighted: false,
  },
  {
    id: "data-annotation",
    title: "Data Annotation & AI Training",
    shortDescription: "High-quality labeled datasets to train accurate and scalable AI models.",
    image: "https://i.pinimg.com/736x/65/08/28/6508288ba811d1bb90534dcb8f581e3c.jpg",
    category: "AI & Data",
    highlighted: false,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Drive leads, conversions & brand visibility with comprehensive digital marketing strategies.",
    image: "https://i.pinimg.com/736x/3d/f2/d6/3df2d668076abbadd1204774b0a7173b.jpg",
    category: "Marketing",
    highlighted: true,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    shortDescription: "Setup, optimize & grow online stores with seamless shopping experiences.",
    image: "https://i.pinimg.com/1200x/76/30/85/7630856095ac7979117823645648bcb5.jpg",
    category: "Design & Cloud",
    highlighted: false,
  },
  {
    id: "ui-ux",
    title: "UI/UX Design & Prototyping",
    shortDescription: "Beautiful, intuitive designs that keep users engaged & build trust.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDgwMTI5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Design & Cloud",
    highlighted: false,
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Services",
    shortDescription: "Secure, scalable cloud infrastructure with automated deployment pipelines.",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzcwODgwNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Design & Cloud",
    highlighted: false,
  },
];

const categories = ["All Services", "Development", "AI & Data", "Marketing", "Design & Cloud"];

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const filteredServices =
    activeCategory === "All Services"
      ? servicesData
      : servicesData.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden mt-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 h-full relative z-10 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <Sparkles size={16} className="text-emerald-400" />
              <span className="text-sm font-semibold text-white tracking-wide">
                COMPREHENSIVE SOLUTIONS
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              From innovative software development to strategic digital marketing, we provide end-to-end solutions that drive growth and transform businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredServices.map((service, index) => {
                  return (
                    <motion.div
                      key={service.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Link to={`/services/${service.id}`}>
                        <div className="group relative h-full overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
                          {/* Highlight Badge */}
                          {service.highlighted && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                              ⭐ Featured
                            </div>
                          )}

                          {/* Image with Overlay */}
                          <div className="relative h-80 overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/80 to-emerald-900/40"></div>
                          </div>

                          {/* Content */}
                          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-300 transition-colors duration-300">
                              {service.title}
                            </h3>

                            <p className="text-white/90 mb-6 leading-relaxed line-clamp-2">
                              {service.shortDescription}
                            </p>

                            {/* Learn More Button */}
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full font-semibold transition-all duration-300 group-hover:bg-white group-hover:text-emerald-900">
                              Learn More
                              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
