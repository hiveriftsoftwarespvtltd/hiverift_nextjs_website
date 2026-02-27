import { motion } from "motion/react";
import { Award, Users, Target, Zap, CheckCircle2, TrendingUp, Globe, Heart } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import teamImage from "figma:asset/da3014488732291082fa8d0be52028c1a8ccbc4f.png";

export function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Image Background */}
      <section className="relative h-[500px] overflow-hidden mt-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA4ODEyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="HiveRift Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-900/85 to-slate-900/90"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 h-full relative z-10 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Transforming businesses through innovative digital solutions and strategic technology partnerships
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                HiveRift is a leading digital solutions company helping businesses leverage technology to achieve sustainable growth and competitive advantage in today's digital economy.
              </p>
            </motion.div>

            {/* Story Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1762341121032-510ad9df0ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwb2ZmaWNlJTIwbW9kZXJufGVufDF8fHx8MTc3MDg4MTIwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Professional Business"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Our Story
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Building Digital Excellence Since 2022
                </h3>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    We started <span className="font-semibold text-emerald-600">KhatuShyam Technologies</span> in 2022 with a clear and simple goal — to help businesses use technology more effectively so they can work smarter and grow faster.
                  </p>
                  <p>
                    As we collaborated with a diverse range of clients, we recognized a larger opportunity to solve everyday business challenges through innovative and cutting-edge IT solutions. This vision gave rise to HiveRift.
                  </p>
                  <p>
                    Today, everything operates under one unified identity — <span className="font-semibold text-emerald-600">HiveRift | KhatuShyam Technologies</span>. We function as a single, dedicated team providing comprehensive services including software development, digital marketing, strategic consulting, and operational support.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-center text-white shadow-xl">
                <div className="text-5xl font-bold mb-2">250+</div>
                <div className="text-white/90">Projects Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white shadow-xl">
                <div className="text-5xl font-bold mb-2">99%</div>
                <div className="text-white/90">Client Retention</div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-8 text-center text-white shadow-xl">
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-white/90">Countries Served</div>
              </div>
              <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl p-8 text-center text-white shadow-xl">
                <div className="text-5xl font-bold mb-2">5+</div>
                <div className="text-white/90">Years in Business</div>
              </div>
            </motion.div>

            {/* Mission & Vision */}
            <div className="grid lg:grid-cols-2 gap-12 mb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-10 shadow-xl border-2 border-emerald-100"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-6">
                  <Target size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and sustainable success. We're committed to being more than just a service provider—we're your trusted technology partner.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-10 shadow-xl border-2 border-teal-100"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl mb-6">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the global leader in digital transformation, known for delivering exceptional results, fostering innovation, and creating lasting partnerships that help businesses thrive in the digital age.
                </p>
              </motion.div>
            </div>

            {/* 3T Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our 3T <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Pillars</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Talent. Tailored. Trust — The foundation of everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-emerald-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">TALENT</h3>
                <p className="text-gray-700 leading-relaxed">
                  Skilled teams delivering measurable outcomes through expertise and innovation. Our professionals bring years of experience and passion to every project.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-teal-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Zap size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">TAILORED</h3>
                <p className="text-gray-700 leading-relaxed">
                  Custom-built solutions designed to solve real business challenges effectively. We don't believe in one-size-fits-all approaches.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-cyan-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">TRUST</h3>
                <p className="text-gray-700 leading-relaxed">
                  Transparent processes and reliable delivery that build long-term confidence. We're committed to your success every step of the way.
                </p>
              </motion.div>
            </div>

            {/* Team Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Our Team
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  The Talent Behind Our Success
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our strength lies in our people. From seasoned developers and creative designers to strategic thinkers and digital marketing experts, every team member brings specialized skills and a passion for innovation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Together, we form a dynamic force dedicated to solving complex challenges, exceeding expectations, and building lasting partnerships with every client we serve.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
                    <div className="text-gray-700 font-semibold">Team Members</div>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200">
                    <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
                    <div className="text-gray-700 font-semibold">Technologies</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={teamImage}
                    alt="Our Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-emerald-600 px-6 py-3 rounded-full font-bold">
                      <Users size={20} />
                      <span>Expert Team</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* What We Stand For */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Stand For</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These aren't just buzzwords—they're the principles that guide every decision we make
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {[
                {
                  icon: Award,
                  title: "Purpose-Driven",
                  description: "We wake up every day focused on helping your business win. Technology is just the tool—your success is the goal.",
                },
                {
                  icon: Users,
                  title: "Better Together",
                  description: "Great work happens when people collaborate. We partner closely with you to deliver the best solutions.",
                },
                {
                  icon: TrendingUp,
                  title: "Always Raising the Bar",
                  description: "We pour care and craft into every project because we know you're counting on us to deliver excellence.",
                },
                {
                  icon: Globe,
                  title: "Thinking Globally",
                  description: "Our team spans different cultures bringing fresh perspectives to every challenge, wherever you are.",
                },
                {
                  icon: Heart,
                  title: "You Come First",
                  description: "Your wins are our wins. We're here to build real partnerships where your growth becomes our shared mission.",
                },
                {
                  icon: CheckCircle2,
                  title: "Future-Focused",
                  description: "We're constantly learning and staying ahead so you always get solutions that are relevant and powerful.",
                },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Innovation Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvZGluZ3xlbnwxfHx8fDE3NzA4NjAyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Development Team"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-48 rounded-xl overflow-hidden shadow-lg">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWFtfGVufDF8fHx8MTc3MDg3ODEwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Modern Workspace"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="h-48 rounded-xl overflow-hidden shadow-lg">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwY29uZmlkZW50fGVufDF8fHx8MTc3MDgzMjM3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Professional Team Member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                          <div className="text-5xl font-bold mb-2">111%</div>
                          <div className="text-lg">Average Growth Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Innovation & Technology
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Driven by Innovation
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At HiveRift, we believe innovation isn't just about adopting the latest technology—it's about understanding how to apply it in ways that truly matter to your business.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  From AI-powered solutions to custom software development, we combine cutting-edge tools with strategic thinking to create solutions that drive real results.
                </p>

                <div className="space-y-4">
                  {[
                    "Cutting-edge technology stack",
                    "Agile development methodology",
                    "Continuous learning & improvement",
                    "Client-focused innovation",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Remove Bottom Stats Banner section */}

      <Footer />
    </div>
  );
}