import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Industries } from "../components/Industries";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

export function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-emerald-200 rounded-full mb-6 shadow-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-emerald-700 tracking-wide uppercase">
                Cross-Industry Expertise
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Industries We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Transform
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Empowering businesses across 12+ industries with cutting-edge digital solutions tailored to your unique challenges and opportunities
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Discuss Your Project
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-full font-semibold border-2 border-gray-300 hover:border-emerald-500 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "12+", label: "Industries Served" },
              { number: "250+", label: "Projects Delivered" },
              { number: "10+", label: "Countries Worldwide" },
              { number: "99%", label: "Client Retention" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Solutions Matter */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Industry-Specific{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Solutions Matter
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Generic solutions can't address the unique regulatory, operational, and customer needs of different industries. Our specialized approach ensures you get technology that truly works for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Deep Domain Knowledge",
                description: "Our teams have extensive experience in your industry's challenges, workflows, and best practices.",
              },
              {
                title: "Regulatory Compliance",
                description: "Built-in compliance with industry-specific regulations like HIPAA, PCI-DSS, GDPR, and more.",
              },
              {
                title: "Faster Time-to-Market",
                description: "Pre-built industry templates and frameworks accelerate development without compromising quality.",
              },
              {
                title: "Competitive Advantage",
                description: "Leverage industry-specific innovations that give you an edge over competitors.",
              },
              {
                title: "Seamless Integration",
                description: "Compatible with industry-standard platforms, tools, and third-party systems.",
              },
              {
                title: "Scalable Growth",
                description: "Solutions designed to grow with your business and adapt to industry evolution.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle2 size={24} className="text-emerald-600 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Industries Component */}
      <Industries />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-emerald-50 leading-relaxed mb-8">
              Let's discuss how our industry-specific solutions can drive innovation and growth for your business. Get a free consultation with our experts today.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-emerald-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-white rounded-full font-semibold border-2 border-white transition-all duration-300"
              >
                View Our Approach
              </Link>
            </div>

            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="text-emerald-50 mb-4">Trusted by leading companies in</p>
              <div className="flex flex-wrap justify-center gap-4 text-white font-semibold">
                <span>Finance</span>
                <span>•</span>
                <span>Healthcare</span>
                <span>•</span>
                <span>Retail</span>
                <span>•</span>
                <span>Manufacturing</span>
                <span>•</span>
                <span>Education</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}