import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  Globe,
  Award,
  Zap,
  Shield,
} from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router";

export function WebDevelopmentPage() {
  const features = [
    "Business & Portfolio Websites",
    "Custom Web Applications",
    "Hosting & Security Setup",
    "Landing Page Development",
    "CMS Integration (WordPress)",
    "Progressive Web Apps (PWA)",
    "Website Maintenance & Support",
    "Performance Optimization",
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with fast loading speeds",
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description: "Enterprise-grade security and infrastructure",
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Built for search engines from the ground up",
    },
    {
      icon: Award,
      title: "Mobile-First",
      description: "Responsive design that works on all devices",
    },
  ];

  const technologies = ["React", "Next.js", "Node.js", "WordPress", "Tailwind CSS", "TypeScript"];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We understand your goals, target audience, and project requirements",
    },
    {
      number: "02",
      title: "Design & Prototype",
      description: "Create wireframes and interactive prototypes for your approval",
    },
    {
      number: "03",
      title: "Development",
      description: "Build your website using modern technologies and best practices",
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Thorough testing followed by smooth deployment and support",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden mt-20">
        <img
          src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzA4NTM5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Web Development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/85 to-teal-900/90"></div>

        <div className="container mx-auto px-4 lg:px-8 h-full relative z-10 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <Globe size={16} />
              <span className="text-sm font-semibold tracking-wide">DEVELOPMENT SERVICE</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Web Development
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed mb-8">
              Professional, responsive & SEO-friendly websites that help your business grow online. Transform your digital presence with cutting-edge web solutions.
            </p>

            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-emerald-900 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Offer</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive web development services tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                >
                  <CheckCircle2
                    size={24}
                    className="flex-shrink-0 text-emerald-500 mt-1"
                    strokeWidth={2.5}
                  />
                  <span className="text-lg text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Our Services</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4">
                    <benefit.icon size={32} className="text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that delivers results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="text-7xl font-bold text-emerald-100 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-white/80 mb-12">
                Cutting-edge tools and frameworks for optimal results
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {technologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-12 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Build Your Website?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let's discuss how we can help transform your business with professional web development services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="px-8 py-4 bg-white text-emerald-900 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
                    Contact Us Today
                    <ArrowRight size={20} />
                  </button>
                </Link>
                <Link to="/services">
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                    View All Services
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
