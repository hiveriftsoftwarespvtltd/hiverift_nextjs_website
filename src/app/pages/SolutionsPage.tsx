import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  TrendingUp,
  Heart,
  GraduationCap,
  Zap,
  Radio,
  ShoppingBag,
  Factory,
  ShoppingCart,
  Plane,
  Shield,
  Landmark,
  Users,
  Layers,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Rocket,
  Code,
  X,
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const industrySolutions = [
  {
    id: "finance",
    name: "Banking & Financial Services",
    icon: Building2,
    color: "from-emerald-500 to-teal-500",
    image: "https://i.pinimg.com/736x/74/d1/32/74d1320b80747acd0234b7a458ebe1e2.jpg",
    description: "Transform your financial services with secure, scalable digital solutions that enhance customer experience and operational efficiency.",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: Heart,
    color: "from-emerald-600 to-teal-600",
    image: "https://i.pinimg.com/1200x/24/83/de/2483dec64055ddcf8baa5e2760543d48.jpg",
    description: "Deliver better patient care with innovative healthcare technology solutions that streamline operations and improve outcomes.",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    icon: ShoppingCart,
    color: "from-teal-500 to-emerald-500",
    image: "https://i.pinimg.com/736x/d9/c9/ca/d9c9ca3071f052121f8c70ccd8b0e89b.jpg",
    description: "Drive sales and customer loyalty with omnichannel retail solutions that deliver seamless shopping experiences.",
  },
  {
    id: "education",
    name: "Education & E-Learning",
    icon: GraduationCap,
    color: "from-teal-600 to-emerald-600",
    image: "https://i.pinimg.com/736x/00/d7/29/00d7294e25073d9d1899e4f52e014b32.jpg",
    description: "Empower educators and students with digital learning platforms that make education accessible and engaging.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    color: "from-emerald-500 to-teal-500",
    image: "https://i.pinimg.com/1200x/23/55/87/2355876d4d8ca2d753b72aaee06f6a19.jpg",
    description: "Optimize production and supply chain with smart manufacturing solutions powered by IoT and AI.",
  },
  {
    id: "hospitality",
    name: "Travel & Hospitality",
    icon: Plane,
    color: "from-emerald-600 to-teal-600",
    image: "https://i.pinimg.com/736x/ba/18/27/ba1827c7d0547371f27c8f379188d925.jpg",
    description: "Enhance guest experiences and streamline operations with comprehensive hospitality technology solutions.",
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    icon: Zap,
    color: "from-teal-500 to-emerald-500",
    image: "https://i.pinimg.com/736x/88/f7/c8/88f7c86f52f44f9209d0ca7df329edd5.jpg",
    description: "Modernize energy infrastructure with smart grid solutions and sustainable energy management systems.",
  },
  {
    id: "insurance",
    name: "Insurance",
    icon: Shield,
    color: "from-teal-600 to-emerald-600",
    image: "https://images.unsplash.com/photo-1681505526188-b05e68c77582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGNvbnRyYWN0fGVufDF8fHx8MTc3MDg5MjQwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Modernize insurance operations with digital solutions that improve customer service and streamline claims processing.",
  },
  {
    id: "media",
    name: "Communications & Media",
    icon: Radio,
    color: "from-emerald-500 to-teal-500",
    image: "https://i.pinimg.com/736x/87/10/05/871005a54223842c4b891d8864b67acb.jpg",
    description: "Transform content delivery and audience engagement with modern media technology solutions.",
  },
  {
    id: "capital-markets",
    name: "Capital Markets",
    icon: TrendingUp,
    color: "from-emerald-600 to-teal-600",
    image: "https://i.pinimg.com/1200x/0c/6d/01/0c6d0174972759d1943df78742b06f71.jpg",
    description: "Empower trading and investment with high-performance platforms and real-time analytics solutions.",
  },
  {
    id: "consumer-goods",
    name: "Consumer Goods",
    icon: ShoppingBag,
    color: "from-teal-500 to-emerald-500",
    image: "https://i.pinimg.com/1200x/5f/45/9c/5f459cacef65b53798c4d6fc4e8e505d.jpg",
    description: "Optimize supply chain and enhance customer engagement with integrated consumer goods solutions.",
  },
  {
    id: "public-services",
    name: "public-services",
    icon: Landmark,
    color: "from-teal-600 to-emerald-600",
    image: "https://images.unsplash.com/photo-1740441155424-c1a47ada3eb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwcHVibGljJTIwc2VydmljZXMlMjBjaXR5JTIwYWRtaW5pc3RyYXRpb258ZW58MXx8fHwxNzcwODkyNDAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Modernize government services with citizen-centric digital solutions that improve accessibility and efficiency.",
  },
];

const solutionApproaches = [
  {
    icon: Target,
    title: "Discovery & Strategy",
    description: "We start by understanding your business challenges, goals, and requirements through comprehensive discovery sessions.",
    steps: ["Business analysis", "Requirements gathering", "Stakeholder interviews", "Market research"],
  },
  {
    icon: Layers,
    title: "Custom Design",
    description: "Our team designs tailored solutions that address your specific needs while ensuring scalability and future growth.",
    steps: ["Solution architecture", "UI/UX design", "Technology selection", "Proof of concept"],
  },
  {
    icon: Code,
    title: "Development & Integration",
    description: "We build robust solutions using best practices, with seamless integration into your existing systems and workflows.",
    steps: ["Agile development", "API integration", "Quality assurance", "Security implementation"],
  },
  {
    icon: Rocket,
    title: "Deployment & Support",
    description: "We ensure smooth deployment and provide ongoing support to guarantee long-term success and continuous improvement.",
    steps: ["Deployment planning", "User training", "Performance monitoring", "Continuous optimization"],
  },
];

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden mt-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNvbHV0aW9ucyUyMHRlYW0lMjBzdHJhdGVneXxlbnwwfHx8fDE3Mzk4MzA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-900/85 to-slate-900/90"></div>
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
                INDUSTRY SOLUTIONS
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Our Solutions
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Tailored technology solutions designed for your industry's unique challenges and opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions - MOVED TO FIRST */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry-Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore how we transform businesses across 12+ industries with tailored technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={`/industries/${industry.id}`} className="block group">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}></div>
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="transform group-hover:translate-y-[-8px] transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                        <p className="text-white/90 text-sm leading-relaxed mb-3">
                          {industry.description}
                        </p>
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <span>Learn More</span>
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* 3T Pillars Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">3T Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every solution we deliver is built on our three foundational pillars
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "TALENT",
                description: "Expert teams with deep industry knowledge and technical expertise deliver solutions that drive measurable business outcomes.",
                features: ["Industry specialists", "Certified professionals", "Cross-functional teams", "Continuous learning"],
              },
              {
                icon: Layers,
                title: "TAILORED",
                description: "Custom-built solutions designed specifically for your business needs, challenges, and growth objectives.",
                features: ["Custom development", "Flexible architecture", "Scalable solutions", "Future-ready design"],
              },
              {
                icon: Award,
                title: "TRUST",
                description: "Transparent communication, reliable delivery, and long-term partnerships built on mutual success.",
                features: ["Transparent processes", "On-time delivery", "Quality assurance", "Ongoing support"],
              },
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-emerald-500"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{pillar.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-center">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Solution <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Methodology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach that ensures successful delivery and long-term value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {solutionApproaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 mt-2">
                      <Icon size={24} className="text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{approach.description}</p>
                    <ul className="space-y-1.5">
                      {approach.steps.map((step, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}