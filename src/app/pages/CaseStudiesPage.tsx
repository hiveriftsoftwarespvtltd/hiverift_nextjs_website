import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Users, Award, Clock, CheckCircle2, Sparkles, Code, Target, Rocket } from "lucide-react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const caseStudies = [
  {
    id: "education-platform",
    title: "EdTech Learning Platform",
    category: "Education & E-Learning",
    industry: "Education",
    description: "Developed a comprehensive e-learning platform that revolutionized remote education for 50,000+ students across multiple countries.",
    image: "https://i.pinimg.com/736x/00/d7/29/00d7294e25073d9d1899e4f52e014b32.jpg",
    gradient: "from-purple-500 to-indigo-500",
    metrics: [
      { label: "Active Users", value: "50K+", icon: Users },
      { label: "Engagement Rate", value: "85%", icon: TrendingUp },
      { label: "Course Completion", value: "92%", icon: Award },
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "WebRTC"],
    challenge: "A leading educational institution needed a scalable platform to deliver interactive courses, track student progress, and facilitate real-time virtual classrooms.",
    solution: "We built a mobile-first learning management system with video conferencing, interactive assessments, progress tracking, and AI-powered personalized learning paths.",
    results: [
      "Increased student engagement by 85%",
      "Reduced administrative workload by 60%",
      "Improved course completion rates to 92%",
      "Scaled to 50,000+ concurrent users",
    ],
  },
  {
    id: "telemedicine-app",
    title: "Telemedicine Healthcare App",
    category: "Healthcare & Life Sciences",
    industry: "Healthcare",
    description: "Built a HIPAA-compliant telemedicine platform connecting 10,000+ patients with healthcare providers through secure video consultations.",
    image: "https://i.pinimg.com/736x/95/ed/7a/95ed7adc15751e2012dde805744366d7.jpg",
    gradient: "from-red-500 to-pink-500",
    metrics: [
      { label: "Consultations", value: "10K+", icon: Users },
      { label: "Wait Time", value: "-70%", icon: Clock },
      { label: "Patient Satisfaction", value: "4.8/5", icon: Award },
    ],
    technologies: ["React", "Flutter", "Python", "MongoDB", "Twilio", "HIPAA"],
    challenge: "A healthcare network required a secure, user-friendly platform for remote patient consultations, prescription management, and medical records access.",
    solution: "We developed an end-to-end telemedicine solution with video consultations, e-prescriptions, appointment scheduling, health records integration, and secure messaging.",
    results: [
      "Reduced patient wait times by 70%",
      "Enabled 10,000+ remote consultations monthly",
      "Achieved 4.8/5 patient satisfaction rating",
      "Full HIPAA compliance certification",
    ],
  },
  {
    id: "retail-ecommerce",
    title: "Omnichannel Retail Platform",
    category: "Retail & E-Commerce",
    industry: "Retail",
    description: "Transformed a traditional retail business with an omnichannel e-commerce platform, increasing online sales by 300%.",
    image: "https://i.pinimg.com/1200x/34/fc/dc/34fcdcdb50835db557c469231b607ec2.jpg",
    gradient: "from-emerald-500 to-teal-500",
    metrics: [
      { label: "Sales Growth", value: "+300%", icon: TrendingUp },
      { label: "Monthly Orders", value: "25K+", icon: Users },
      { label: "Customer Retention", value: "89%", icon: Award },
    ],
    technologies: ["Next.js", "Shopify", "Stripe", "Google Analytics", "AI/ML"],
    challenge: "A retail chain needed to compete with online giants by creating a seamless shopping experience across physical stores and digital channels.",
    solution: "We created a unified commerce platform integrating POS systems, inventory management, mobile app, and personalized recommendations using AI.",
    results: [
      "Achieved 300% increase in online sales",
      "Processing 25,000+ orders monthly",
      "Customer retention rate of 89%",
      "Reduced cart abandonment by 45%",
    ],
  },
  {
    id: "fintech-dashboard",
    title: "Financial Analytics Dashboard",
    category: "Banking & Financial Services",
    industry: "FinTech",
    description: "Delivered a real-time financial analytics platform processing $500M+ in transactions with advanced fraud detection.",
    image: "https://i.pinimg.com/1200x/0b/2d/eb/0b2deb1ed0b413b1d93ebb0d6c6060ad.jpg",
    gradient: "from-blue-500 to-cyan-500",
    metrics: [
      { label: "Transactions", value: "$500M+", icon: TrendingUp },
      { label: "Fraud Detection", value: "99.8%", icon: Award },
      { label: "Response Time", value: "<50ms", icon: Clock },
    ],
    technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "Redis"],
    challenge: "A fintech company needed a high-performance platform for real-time transaction monitoring, analytics, and AI-powered fraud detection.",
    solution: "We built a scalable dashboard with real-time data visualization, predictive analytics, automated reporting, and machine learning fraud detection algorithms.",
    results: [
      "Processing $500M+ in transactions",
      "99.8% fraud detection accuracy",
      "Sub-50ms query response times",
      "Reduced false positives by 75%",
    ],
  },
  {
    id: "manufacturing-iot",
    title: "Smart Manufacturing IoT System",
    category: "Manufacturing & Industry 4.0",
    industry: "Manufacturing",
    description: "Implemented an IoT-powered manufacturing execution system that increased production efficiency by 45% and reduced downtime by 60%.",
    image: "https://i.pinimg.com/736x/6b/d5/55/6bd555d8700ec74d12e23f86fb715b24.jpg",
    gradient: "from-orange-500 to-red-500",
    metrics: [
      { label: "Efficiency Gain", value: "+45%", icon: TrendingUp },
      { label: "Downtime", value: "-60%", icon: Clock },
      { label: "ROI", value: "320%", icon: Award },
    ],
    technologies: ["IoT", "Python", "TensorFlow", "Azure", "MQTT"],
    challenge: "A manufacturing facility struggled with equipment downtime, production inefficiencies, and lack of real-time visibility into operations.",
    solution: "We deployed an integrated IoT system with sensor networks, predictive maintenance algorithms, real-time monitoring dashboards, and automated quality control.",
    results: [
      "Increased production efficiency by 45%",
      "Reduced unplanned downtime by 60%",
      "Achieved 320% ROI within 12 months",
      "Improved product quality by 35%",
    ],
  },
  {
    id: "logistics-optimization",
    title: "AI-Powered Logistics Platform",
    category: "Supply Chain & Logistics",
    industry: "Logistics",
    description: "Created an AI-driven logistics optimization system that reduced delivery times by 40% and cut operational costs by $2M annually.",
    image: "https://i.pinimg.com/736x/7f/9f/36/7f9f361044e65d6eb09f288c60ed6540.jpg",
    gradient: "from-yellow-500 to-orange-500",
    metrics: [
      { label: "Delivery Time", value: "-40%", icon: Clock },
      { label: "Cost Savings", value: "$2M", icon: TrendingUp },
      { label: "Route Optimization", value: "95%", icon: Award },
    ],
    technologies: ["Python", "TensorFlow", "Google Maps API", "AWS", "MongoDB"],
    challenge: "A logistics company faced challenges with route optimization, delivery delays, and rising fuel costs impacting profitability.",
    solution: "We developed an AI-powered platform with dynamic route optimization, real-time tracking, demand forecasting, and automated dispatch management.",
    results: [
      "Reduced average delivery time by 40%",
      "Annual cost savings of $2M",
      "95% route optimization efficiency",
      "Improved customer satisfaction to 4.7/5",
    ],
  },
];

export function CaseStudiesPage() {
  
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden mt-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjB0ZWFtJTIwY2VsZWJyYXRpb258ZW58MHx8fHwxNzM5ODMwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Case Studies"
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
                SUCCESS STORIES
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Real results from real projects. Discover how we've helped businesses transform through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col group">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-sm text-emerald-600 font-semibold mb-3">{study.category}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((metric, idx) => {
                        const Icon = metric.icon;
                        return (
                          <div key={idx} className="text-center">
                            <div className="flex items-center justify-center mb-2">
                              <Icon size={16} className="text-emerald-600" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-lg font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {study.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
                            +{study.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <details className="group/details mt-auto">
                      <summary className="flex items-center justify-between cursor-pointer text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                        <span>View Full Case Study</span>
                        <ArrowRight size={18} className="group-hover/details:translate-x-1 transition-transform duration-300" />
                      </summary>
                      
                      <div className="mt-4 space-y-4 pt-4 border-t border-gray-200">
                        {/* Challenge */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Target size={16} className="text-red-500" />
                            <h4 className="font-bold text-gray-900">Challenge</h4>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{study.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Code size={16} className="text-emerald-600" />
                            <h4 className="font-bold text-gray-900">Solution</h4>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{study.solution}</p>
                        </div>

                        {/* Results */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Rocket size={16} className="text-blue-600" />
                            <h4 className="font-bold text-gray-900">Results</h4>
                          </div>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* All Technologies */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss how we can help transform your business with innovative digital solutions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-900 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
