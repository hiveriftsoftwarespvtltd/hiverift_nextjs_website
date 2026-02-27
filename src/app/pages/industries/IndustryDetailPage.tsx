import { useParams, Link } from "react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Shield, Zap ,ShoppingBag} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

interface IndustryData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  challenges: string[];
  solutions: {
    title: string;
    description: string;
    icon: any;
  }[];
  benefits: string[];
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
  };
  technologies: string[];
}

const industriesData: Record<string, IndustryData> = {
  healthcare: {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Digital Solutions for Modern Healthcare",
    description: "Transform patient care and operational efficiency with cutting-edge healthcare technology solutions. We help healthcare providers deliver better outcomes through innovative digital platforms.",
    heroImage: "healthcare technology",
    challenges: [
      "Patient data management and security",
      "Regulatory compliance (HIPAA, GDPR)",
      "Interoperability between systems",
      "Telemedicine and remote patient monitoring",
      "Electronic Health Records (EHR) integration"
    ],
    solutions: [
      {
        title: "Patient Management Systems",
        description: "Comprehensive platforms for managing patient records, appointments, and care coordination",
        icon: Users
      },
      {
        title: "Telemedicine Platforms",
        description: "Secure video consultation and remote monitoring solutions",
        icon: Zap
      },
      {
        title: "Data Security & Compliance",
        description: "HIPAA-compliant systems with advanced encryption and access controls",
        icon: Shield
      }
    ],
    benefits: [
      "Improved patient outcomes and satisfaction",
      "Reduced operational costs by 30-40%",
      "Enhanced data security and compliance",
      "Streamlined workflows and communication",
      "Better resource utilization"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "HL7/FHIR", "WebRTC"]
  },
  finance: {
    id: "finance",
    title: "Finance & Banking",
    subtitle: "Secure Digital Banking Solutions",
    description: "Empower your financial institution with secure, scalable, and user-friendly digital banking solutions. From mobile banking to fraud detection, we build systems that customers trust.",
    heroImage: "banking technology",
    challenges: [
      "Security and fraud prevention",
      "Regulatory compliance (PCI-DSS, SOX)",
      "Real-time transaction processing",
      "Customer experience and engagement",
      "Legacy system modernization"
    ],
    solutions: [
      {
        title: "Mobile Banking Apps",
        description: "Secure and intuitive mobile banking experiences with biometric authentication",
        icon: Users
      },
      {
        title: "Fraud Detection Systems",
        description: "AI-powered fraud detection and prevention systems",
        icon: Shield
      },
      {
        title: "Payment Gateways",
        description: "Fast and secure payment processing infrastructure",
        icon: Zap
      }
    ],
    benefits: [
      "99.99% uptime and reliability",
      "Reduced fraud by up to 60%",
      "Improved customer satisfaction scores",
      "Faster time-to-market for new features",
      "Seamless integration with existing systems"
    ],
    technologies: ["React Native", "Java", "MongoDB", "Azure", "Blockchain", "AI/ML"]
  },
  retail: {
    id: "retail",
    title: "Retail & E-Commerce",
    subtitle: "Transform Your Retail Experience",
    description: "Build seamless omnichannel retail experiences that drive sales and customer loyalty. Our e-commerce solutions help retailers thrive in the digital age.",
    heroImage: "online shopping",
    challenges: [
      "Omnichannel customer experience",
      "Inventory management",
      "Payment processing and security",
      "Personalization and recommendations",
      "Supply chain optimization"
    ],
    solutions: [
      {
        title: "E-Commerce Platforms",
        description: "Full-featured online stores with advanced product management",
        icon: Users
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking across all channels",
        icon: TrendingUp
      },
      {
        title: "AI-Powered Recommendations",
        description: "Personalized product recommendations to increase conversions",
        icon: Zap
      }
    ],
    benefits: [
      "30-50% increase in online sales",
      "Improved inventory turnover",
      "Better customer insights and analytics",
      "Reduced cart abandonment rates",
      "Seamless omnichannel experience"
    ],
    technologies: ["React", "Shopify", "WooCommerce", "Magento", "Stripe", "AI/ML"]
  },
  education: {
    id: "education",
    title: "Education",
    subtitle: "Digital Learning Solutions",
    description: "Empower educators and students with innovative e-learning platforms and educational technology. Create engaging, accessible, and effective learning experiences.",
    heroImage: "online education",
    challenges: [
      "Remote learning infrastructure",
      "Student engagement and retention",
      "Assessment and grading automation",
      "Content management and delivery",
      "Accessibility and inclusivity"
    ],
    solutions: [
      {
        title: "Learning Management Systems",
        description: "Comprehensive LMS platforms for course delivery and management",
        icon: Users
      },
      {
        title: "Virtual Classrooms",
        description: "Interactive online classroom solutions with real-time collaboration",
        icon: Zap
      },
      {
        title: "Assessment Tools",
        description: "Automated grading and analytics for better learning outcomes",
        icon: TrendingUp
      }
    ],
    benefits: [
      "Increased student engagement by 40%",
      "Scalable learning infrastructure",
      "Better learning outcome tracking",
      "Reduced administrative overhead",
      "Accessible education for all"
    ],
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS", "Canvas LMS"]
  },
  "real-estate": {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Smart Property Solutions",
    description: "Modernize your real estate business with digital solutions for property management, virtual tours, and customer relationship management.",
    heroImage: "real estate technology",
    challenges: [
      "Property listing management",
      "Virtual property tours",
      "Lead generation and nurturing",
      "Document management",
      "Market analytics and insights"
    ],
    solutions: [
      {
        title: "Property Management Platforms",
        description: "Comprehensive systems for managing properties, tenants, and maintenance",
        icon: Users
      },
      {
        title: "Virtual Tour Solutions",
        description: "3D virtual tours and augmented reality property viewing",
        icon: Zap
      },
      {
        title: "CRM Systems",
        description: "Lead management and client relationship tools",
        icon: TrendingUp
      }
    ],
    benefits: [
      "50% faster property sales cycles",
      "Reduced operational costs",
      "Better lead conversion rates",
      "Enhanced customer experience",
      "Data-driven market insights"
    ],
    technologies: ["React", "Three.js", "Node.js", "MongoDB", "AWS", "Matterport"]
  },
  manufacturing: {
    id: "manufacturing",
    title: "Manufacturing",
    subtitle: "Industry 4.0 Solutions",
    description: "Optimize your manufacturing operations with IoT, automation, and data analytics solutions for the smart factory of the future.",
    heroImage: "smart manufacturing",
    challenges: [
      "Production optimization",
      "Supply chain management",
      "Quality control and assurance",
      "Predictive maintenance",
      "Inventory and resource management"
    ],
    solutions: [
      {
        title: "IoT & Automation",
        description: "Connected devices and automated workflows for smart manufacturing",
        icon: Zap
      },
      {
        title: "Predictive Analytics",
        description: "AI-powered insights for maintenance and optimization",
        icon: TrendingUp
      },
      {
        title: "Supply Chain Management",
        description: "End-to-end visibility and optimization of supply chains",
        icon: Shield
      }
    ],
    benefits: [
      "20-30% increase in productivity",
      "Reduced downtime and maintenance costs",
      "Improved product quality",
      "Better resource utilization",
      "Real-time operational insights"
    ],
    technologies: ["React", "IoT", "Python", "TensorFlow", "AWS IoT", "PostgreSQL"]
  },
  logistics: {
    id: "logistics",
    title: "Logistics",
    subtitle: "Smart Transportation & Delivery",
    description: "Streamline your logistics operations with intelligent routing, real-time tracking, and automated warehouse management solutions.",
    heroImage: "logistics technology",
    challenges: [
      "Route optimization",
      "Real-time tracking and visibility",
      "Warehouse management",
      "Last-mile delivery efficiency",
      "Fleet management"
    ],
    solutions: [
      {
        title: "Route Optimization",
        description: "AI-powered route planning for faster, cost-effective deliveries",
        icon: TrendingUp
      },
      {
        title: "Real-Time Tracking",
        description: "GPS tracking and delivery status updates",
        icon: Zap
      },
      {
        title: "Warehouse Automation",
        description: "Automated inventory and warehouse management systems",
        icon: Shield
      }
    ],
    benefits: [
      "25-35% reduction in delivery costs",
      "Improved delivery times",
      "Better fleet utilization",
      "Enhanced customer satisfaction",
      "Real-time operational visibility"
    ],
    technologies: ["React", "Google Maps API", "Node.js", "MongoDB", "IoT", "Machine Learning"]
  },
  hospitality: {
    id: "hospitality",
    title: "Hospitality",
    subtitle: "Guest Experience Excellence",
    description: "Enhance guest experiences and streamline operations with digital solutions for hotels, restaurants, and hospitality businesses.",
    heroImage: "hotel technology",
    challenges: [
      "Reservation and booking management",
      "Guest experience personalization",
      "Staff coordination",
      "Revenue management",
      "Online reputation management"
    ],
    solutions: [
      {
        title: "Booking Management",
        description: "Integrated reservation systems with dynamic pricing",
        icon: Users
      },
      {
        title: "Guest Experience Apps",
        description: "Mobile apps for seamless guest services and communication",
        icon: Zap
      },
      {
        title: "Revenue Optimization",
        description: "AI-powered pricing and revenue management systems",
        icon: TrendingUp
      }
    ],
    benefits: [
      "Increased booking conversions",
      "Higher guest satisfaction scores",
      "Optimized pricing and revenue",
      "Streamlined operations",
      "Better staff productivity"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Analytics"]
  },

  energy: {
    id: "energy",
    title: "Energy & Utilities",
    subtitle: "Smart Grid & Sustainable Energy Solutions",
    description: "Modernize energy infrastructure with smart grid solutions and sustainable energy management systems. We help utility providers optimize distribution and enhance consumer engagement.",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1080",
    challenges: [
      "Smart grid integration and management",
      "Renewable energy source optimization",
      "Real-time energy consumption monitoring",
      "Infrastructure security and resilience",
      "Regulatory compliance and reporting"
    ],
    solutions: [
      {
        title: "Smart Metering Systems",
        description: "Advanced metering infrastructure for real-time tracking and automated billing.",
        icon: Zap
      },
      {
        title: "Grid Analytics",
        description: "AI-powered platforms for predictive maintenance and load balancing.",
        icon: TrendingUp
      },
      {
        title: "Renewable Portals",
        description: "Dashboards for managing solar, wind, and other green energy assets.",
        icon: Shield
      }
    ],
    benefits: [
      "25% reduction in energy wastage",
      "Improved grid reliability and uptime",
      "Faster response to power outages",
      "Seamless integration of green energy",
      "Data-driven consumption insights"
    ],
    technologies: ["IoT", "Python", "React", "AWS IoT Core", "PostgreSQL", "Time Series DB"]
  },
"public-services": {
    id: "public-services",
    title: "Public Services",
    subtitle: "Digital Governance & Citizen-Centric Solutions",
    description: "Modernize government services with secure, accessible, and efficient digital platforms that improve transparency and citizen engagement.",
    heroImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1080",
    challenges: [
      "Bureaucratic bottlenecks in service delivery",
      "Data security and citizen privacy protection",
      "Outdated legacy infrastructure",
      "Lack of real-time transparency",
      "Limited accessibility for remote citizens"
    ],
    solutions: [
      {
        title: "E-Governance Portals",
        description: "Unified digital platforms for citizen applications, tracking, and information.",
        icon: Users
      },
      {
        title: "Secure Data Repositories",
        description: "Cloud-based compliant storage for government records and sensitive data.",
        icon: Shield
      },
      {
        title: "Automation Workflows",
        description: "Streamlined internal processes to reduce processing time and errors.",
        icon: Zap
      }
    ],
    benefits: [
      "Enhanced transparency and accountability",
      "Faster citizen service turnaround",
      "Cost reduction in administrative tasks",
      "Better data-driven policy making",
      "High security and regulatory compliance"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Blockchain", "AWS GovCloud", "Docker"]
  },
  insurance: {
    id: "insurance",
    title: "Insurance",
    subtitle: "Modern Digital Insurance Solutions",
    description: "Transform your insurance business with digital platforms that automate claims processing, enhance risk assessment, and improve customer engagement.",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1080",
    challenges: [
      "Manual and slow claims processing",
      "Accurate risk assessment and underwriting",
      "Customer retention and personalized offerings",
      "Legacy system integration",
      "Fraud detection and prevention"
    ],
    solutions: [
      {
        title: "Claims Automation",
        description: "AI-driven platforms to speed up claim settlements and reduce paperwork.",
        icon: Zap
      },
      {
        title: "Customer Portals",
        description: "Self-service mobile and web apps for policy management and renewals.",
        icon: Users
      },
      {
        title: "Fraud Analytics",
        description: "Advanced algorithms to detect suspicious patterns and prevent insurance fraud.",
        icon: Shield
      }
    ],
    benefits: [
      "40% faster claims settlement",
      "Improved underwriting accuracy",
      "Higher customer satisfaction scores",
      "Reduced operational overhead",
      "Enhanced data-driven decision making"
    ],
    technologies: ["React", "Node.js", "AI/ML", "MongoDB", "AWS", "Python"]
  },
  "capital-markets": {
    id: "capital-markets",
    title: "Capital Markets",
    subtitle: "High-Performance Trading Solutions",
    description: "Empower your investment firm with high-frequency trading platforms, real-time analytics, and secure portfolio management systems.",
    heroImage: "https://images.unsplash.com/photo-1611974714024-463ef9c7418b?q=80&w=1080",
    challenges: [
      "High-latency in trade execution",
      "Complex regulatory reporting requirements",
      "Real-time data processing at scale",
      "Cybersecurity and asset protection",
      "Market volatility and risk management"
    ],
    solutions: [
      {
        title: "Trading Platforms",
        description: "Low-latency systems for institutional and retail trading.",
        icon: TrendingUp
      },
      {
        title: "Real-time Analytics",
        description: "Dashboards providing instant market insights and trend analysis.",
        icon: Zap
      },
      {
        title: "Risk Management",
        description: "Comprehensive tools for monitoring and mitigating investment risks.",
        icon: Shield
      }
    ],
    benefits: [
      "Sub-millisecond trade execution",
      "Automated compliance reporting",
      "Better investment performance tracking",
      "Secure asset management",
      "Scalable infrastructure for peak loads"
    ],
    technologies: ["Java", "Python", "React", "Kafka", "PostgreSQL", "C++"]
  },
  "consumer-goods": {
    id: "consumer-goods",
    title: "Consumer Goods",
    subtitle: "Next-Gen CPG & Retail Solutions",
    description: "Optimize your supply chain and enhance brand loyalty with integrated consumer goods solutions and data-driven marketing.",
    heroImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1080",
    challenges: [
      "Supply chain visibility and efficiency",
      "Changing consumer behavior patterns",
      "Inventory management across channels",
      "Direct-to-consumer (D2C) transition",
      "Effective trade promotion management"
    ],
    solutions: [
      {
        title: "Supply Chain Optimization",
        description: "End-to-end tracking of goods from factory to shelf.",
        icon: TrendingUp
      },
      {
        title: "D2C Platforms",
        description: "E-commerce solutions for brands to sell directly to customers.",
        icon: ShoppingBag
      },
      {
        title: "Consumer Insights",
        description: "Big data analytics to understand and predict buyer trends.",
        icon: Users
      }
    ],
    benefits: [
      "Improved inventory turnover",
      "Stronger brand-customer relationship",
      "Reduced supply chain costs",
      "Better marketing ROI",
      "Agile response to market shifts"
    ],
    technologies: ["Shopify", "React", "Node.js", "BigQuery", "Snowflake", "ERP Integration"]
  },
  media: {
    id: "media",
    title: "Media & Entertainment",
    subtitle: "Digital Content Solutions",
    description: "Create, distribute, and monetize digital content with scalable streaming, content management, and audience engagement platforms.",
    heroImage: "media streaming",
    challenges: [
      "Content delivery and streaming",
      "Digital rights management",
      "Audience engagement",
      "Monetization strategies",
      "Multi-platform distribution"
    ],
    solutions: [
      {
        title: "Streaming Platforms",
        description: "Scalable video streaming with adaptive bitrate",
        icon: Zap
      },
      {
        title: "Content Management",
        description: "Comprehensive CMS for media assets and metadata",
        icon: Users
      },
      {
        title: "Audience Analytics",
        description: "Deep insights into viewer behavior and preferences",
        icon: TrendingUp
      }
    ],
    benefits: [
      "Seamless content delivery worldwide",
      "Increased viewer engagement",
      "Better monetization opportunities",
      "Multi-platform reach",
      "Data-driven content strategies"
    ],
    technologies: ["React", "Video.js", "AWS MediaServices", "CDN", "Node.js", "Analytics"]
  },
  automotive: {
    id: "automotive",
    title: "Automotive",
    subtitle: "Connected Vehicle Solutions",
    description: "Drive innovation in the automotive industry with connected car technologies, dealership management systems, and customer engagement platforms.",
    heroImage: "connected car",
    challenges: [
      "Vehicle connectivity and IoT",
      "Dealership management",
      "Customer experience",
      "Predictive maintenance",
      "Supply chain optimization"
    ],
    solutions: [
      {
        title: "Connected Car Platforms",
        description: "IoT solutions for vehicle connectivity and telematics",
        icon: Zap
      },
      {
        title: "Dealership Management",
        description: "Comprehensive CRM and inventory management for dealerships",
        icon: Users
      },
      {
        title: "Predictive Maintenance",
        description: "AI-powered vehicle health monitoring and maintenance alerts",
        icon: Shield
      }
    ],
    benefits: [
      "Enhanced vehicle safety and performance",
      "Improved customer satisfaction",
      "Better inventory management",
      "Reduced maintenance costs",
      "Data-driven business insights"
    ],
    technologies: ["React", "IoT", "AWS", "Machine Learning", "MongoDB", "APIs"]
  },
  telecommunications: {
    id: "telecommunications",
    title: "Telecommunications",
    subtitle: "Next-Gen Telecom Solutions",
    description: "Build robust telecom infrastructure with 5G readiness, network management, and customer engagement platforms.",
    heroImage: "telecom network",
    challenges: [
      "Network infrastructure management",
      "Customer billing and subscriptions",
      "Service quality monitoring",
      "5G integration",
      "Customer retention"
    ],
    solutions: [
      {
        title: "Network Management",
        description: "Real-time monitoring and optimization of telecom networks",
        icon: Zap
      },
      {
        title: "Billing Systems",
        description: "Automated billing and subscription management platforms",
        icon: TrendingUp
      },
      {
        title: "Customer Portals",
        description: "Self-service platforms for better customer experience",
        icon: Users
      }
    ],
    benefits: [
      "99.9% network uptime",
      "Reduced operational costs",
      "Improved customer satisfaction",
      "Faster issue resolution",
      "Scalable infrastructure"
    ],
    technologies: ["React", "5G APIs", "Node.js", "PostgreSQL", "Kubernetes", "Monitoring Tools"]
  },
  government: {
    id: "government",
    title: "Government",
    subtitle: "Digital Governance Solutions",
    description: "Modernize public services with secure, accessible, and efficient digital platforms for citizen engagement and government operations.",
    heroImage: "government technology",
    challenges: [
      "Citizen service delivery",
      "Data security and privacy",
      "Regulatory compliance",
      "Legacy system modernization",
      "Transparency and accountability"
    ],
    solutions: [
      {
        title: "Citizen Portals",
        description: "Self-service platforms for government services and information",
        icon: Users
      },
      {
        title: "Secure Data Management",
        description: "Compliant data storage and management systems",
        icon: Shield
      },
      {
        title: "Workflow Automation",
        description: "Streamlined processes for government operations",
        icon: Zap
      }
    ],
    benefits: [
      "Improved citizen satisfaction",
      "Reduced processing times",
      "Enhanced transparency",
      "Better resource allocation",
      "Secure and compliant systems"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Security Tools", "Blockchain", "AWS GovCloud"]
  }
};

export function IndustryDetailPage() {
  const { industryId } = useParams();
  const industry = industryId ? industriesData[industryId] : null;

  if (!industry) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
            <p className="text-gray-600 mb-8">The industry you're looking for doesn't exist.</p>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all"
            >
              View All Industries
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                ← Back 
              </Link>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{industry.title}</h1>
            <p className="text-2xl text-gray-300 mb-4">{industry.subtitle}</p>
            <p className="text-lg text-gray-400 leading-relaxed">{industry.description}</p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Industry Challenges We Solve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={24} />
                  <p className="text-gray-700">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {industry.solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {industry.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl"
                >
                  <TrendingUp className="text-emerald-600 flex-shrink-0" size={24} />
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {industry.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gray-800 rounded-full text-gray-300 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 hover:text-white transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your {industry.title} Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help you overcome challenges and achieve your business goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-gray-100 transition-all font-semibold"
          >
            Get Started Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
