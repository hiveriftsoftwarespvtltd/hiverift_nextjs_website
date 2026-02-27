import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, Cloud } from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router";

export function CloudDevOpsPage() {
  const features = [
    "AWS, Azure & Google Cloud",
    "CI/CD Pipeline Setup",
    "Cloud Migration & Scaling",
    "Server Monitoring & Security",
    "Infrastructure Automation",
    "Container Orchestration",
    "Backup & Disaster Recovery",
    "Performance Optimization",
  ];

  const technologies = ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Terraform"];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Emerald & Teal Theme */}
      <section className="relative h-[600px] overflow-hidden mt-20">
        <img
          src="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?q=80&w=1080"
          alt="Cloud & DevOps"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Changed from sky/blue to professional emerald/teal gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/85 to-teal-900/90"></div>

        <div className="container mx-auto px-4 lg:px-8 h-full relative z-10 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <Cloud size={16} className="text-emerald-400" />
              <span className="text-sm font-semibold tracking-wide uppercase">Infrastructure Service</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Cloud & DevOps Services
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed mb-8">
              Secure, scalable cloud infrastructure with automated deployment pipelines. Accelerate development and ensure reliability.
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

      {/* Features Section - Emerald Styling */}
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
                Modernize your infrastructure with automated, secure, and scalable cloud solutions
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
                  <CheckCircle2 size={24} className="flex-shrink-0 text-emerald-500 mt-1" strokeWidth={2.5} />
                  <span className="text-lg text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Dark Emerald Gradient */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-teal-950 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Solid Emerald Theme */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-white shadow-2xl shadow-emerald-200/50">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Move to the Cloud?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">Let's discuss how we can help modernize your infrastructure and implement high-performance DevOps pipelines.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="px-8 py-4 bg-white text-emerald-900 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2 transition-all">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}