import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  // Web Development Clients
  {
    name: "Rajesh Kumar",
    position: "CEO",
    rating: 5,
    text: "HiveRift delivered an exceptional website for our startup. Their attention to detail and professional approach exceeded our expectations. The SEO optimization has already increased our organic traffic by 150%.",
    location: "Mumbai, India",
  },
  {
    name: "Sarah Mitchell",
    position: "Founder",
    rating: 5,
    text: "Working with HiveRift was a game-changer for our business. They transformed our outdated website into a modern, responsive platform that our customers love. Highly recommend their web development expertise!",
    location: "San Francisco, USA",
  },
  {
    name: "Priya Sharma",
    position: "Marketing Director",
    rating: 5,
    text: "The team at HiveRift built us a beautiful e-commerce website that's easy to manage and drives sales. Our conversion rate improved by 40% within the first month!",
    location: "Delhi, India",
  },
  
  // Mobile App Development
  {
    name: "Michael Chen",
    position: "CTO",
    rating: 5,
    text: "HiveRift developed our mobile app with incredible efficiency. The iOS and Android versions launched on time and bug-free. Their technical expertise in mobile development is unmatched.",
    location: "New York, USA",
  },
  {
    name: "Ananya Patel",
    position: "Product Manager",
    rating: 5,
    text: "Our healthcare app needed HIPAA compliance and flawless UX. HiveRift delivered both perfectly. The patient feedback has been overwhelmingly positive!",
    location: "Bangalore, India",
  },
  {
    name: "David Rodriguez",
    position: "Founder",
    rating: 5,
    text: "The mobile app HiveRift created for our fitness business is stunning and performs flawlessly. User engagement is up 200% since launch. Worth every penny!",
    location: "Los Angeles, USA",
  },

  // Digital Marketing
  {
    name: "Sanjay Deshmukh",
    position: "Owner",
    rating: 5,
    text: "HiveRift's digital marketing strategies brought our restaurant chain to the top of local search results. Our online orders increased by 180% in just 3 months!",
    location: "Pune, India",
  },
  {
    name: "Emily Watson",
    position: "CMO",
    rating: 5,
    text: "Their SEO and social media marketing campaigns transformed our online presence. We went from page 5 to ranking #1 for our primary keywords. Exceptional results!",
    location: "Seattle, USA",
  },
  {
    name: "Vikram Singh",
    position: "Director",
    rating: 5,
    text: "HiveRift's PPC campaigns gave us incredible ROI. They managed our Google Ads budget efficiently and delivered quality leads consistently. Highly professional team!",
    location: "Jaipur, India",
  },

  // AI & Machine Learning
  {
    name: "Jennifer Park",
    position: "VP Engineering",
    rating: 5,
    text: "HiveRift developed a custom ML model that dramatically improved our predictive analytics. Their AI expertise saved us months of development time.",
    location: "Austin, USA",
  },
  {
    name: "Amit Agarwal",
    position: "Founder",
    rating: 5,
    text: "The AI solution HiveRift built for inventory forecasting has been a game-changer. Our stock optimization improved by 65%, reducing waste significantly.",
    location: "Hyderabad, India",
  },
  {
    name: "Lisa Thompson",
    position: "Head of Innovation",
    rating: 5,
    text: "Their computer vision solution for medical imaging analysis exceeded our expectations. HiveRift's AI team is world-class!",
    location: "Boston, USA",
  },

  // E-Commerce Solutions
  {
    name: "Neha Kapoor",
    position: "Owner",
    rating: 5,
    text: "HiveRift set up our Shopify store with seamless payment integration and beautiful design. Sales have tripled since we launched. Couldn't be happier!",
    location: "Chennai, India",
  },
  {
    name: "Robert Martinez",
    position: "CEO",
    rating: 5,
    text: "From product management to checkout optimization, HiveRift's e-commerce solution covers everything. Our cart abandonment rate dropped by 45%!",
    location: "Miami, USA",
  },
  {
    name: "Kavita Reddy",
    position: "Director",
    rating: 5,
    text: "The custom e-commerce platform HiveRift built handles thousands of daily transactions flawlessly. Their ongoing support is excellent too!",
    location: "Mumbai, India",
  },

  // UI/UX Design
  {
    name: "Alex Johnson",
    position: "Product Lead",
    rating: 5,
    text: "HiveRift's UI/UX design transformed our confusing interface into an intuitive masterpiece. User satisfaction scores jumped from 6.2 to 9.1!",
    location: "San Jose, USA",
  },
  {
    name: "Ravi Malhotra",
    position: "Founder",
    rating: 5,
    text: "The mobile app design they created is both beautiful and functional. Student engagement improved dramatically after the redesign!",
    location: "Kolkata, India",
  },
  {
    name: "Maria Garcia",
    position: "Design Director",
    rating: 5,
    text: "Working with HiveRift's design team was a pleasure. They understood our brand perfectly and delivered prototypes that wowed our stakeholders.",
    location: "Chicago, USA",
  },

  // Cloud & DevOps
  {
    name: "Suresh Iyer",
    position: "CTO",
    rating: 5,
    text: "HiveRift migrated our entire infrastructure to AWS with zero downtime. Their DevOps expertise saved us thousands in cloud costs through smart optimization.",
    location: "Bangalore, India",
  },
  {
    name: "Christopher Lee",
    position: "VP Operations",
    rating: 5,
    text: "The CI/CD pipeline they set up reduced our deployment time from hours to minutes. HiveRift's cloud architecture is robust and scalable!",
    location: "Denver, USA",
  },
  {
    name: "Pooja Nair",
    position: "Head of IT",
    rating: 5,
    text: "Their cloud monitoring and security setup gives us peace of mind. No downtime in 8 months since HiveRift took over our infrastructure!",
    location: "Delhi, India",
  },

  // Software Development
  {
    name: "James Anderson",
    position: "CEO",
    rating: 5,
    text: "HiveRift built a custom CRM that perfectly fits our unique workflow. The automation features have increased our team's productivity by 50%!",
    location: "Atlanta, USA",
  },
  {
    name: "Deepak Verma",
    position: "Managing Director",
    rating: 5,
    text: "The ERP system HiveRift developed streamlined our entire operation. Real-time tracking and reporting capabilities are exceptional!",
    location: "Ahmedabad, India",
  },
  {
    name: "Rachel Cohen",
    position: "Operations Manager",
    rating: 5,
    text: "Their custom software solution automated our appointment scheduling and patient management. Staff efficiency improved by 60%!",
    location: "Philadelphia, USA",
  },

  // Data Annotation & Training
  {
    name: "Karthik Subramanian",
    position: "AI Lead",
    rating: 5,
    text: "HiveRift's data annotation team delivered high-quality labeled datasets that significantly improved our model accuracy. Professional and reliable!",
    location: "Hyderabad, India",
  },
  {
    name: "Nicole Brown",
    position: "ML Engineer",
    rating: 5,
    text: "The video annotation work for our autonomous vehicle project was precise and delivered on schedule. HiveRift's quality control is top-notch!",
    location: "Detroit, USA",
  },
  {
    name: "Arun Kumar",
    position: "Data Science Manager",
    rating: 5,
    text: "Their text annotation and NLP labeling services helped us launch our chatbot ahead of schedule. Great communication throughout the project!",
    location: "Pune, India",
  },

  // Mixed Services
  {
    name: "Daniel Kim",
    position: "Founder",
    rating: 5,
    text: "HiveRift handled our entire digital transformation - website, mobile app, and marketing. They're a one-stop shop for tech solutions!",
    location: "Portland, USA",
  },
  {
    name: "Meera Krishnan",
    position: "CEO",
    rating: 5,
    text: "From initial concept to launch, HiveRift guided us every step. Their full-stack expertise across web, mobile, and cloud is impressive!",
    location: "Chennai, India",
  },
  {
    name: "Thomas Wright",
    position: "Director",
    rating: 5,
    text: "We've partnered with HiveRift on multiple projects - each one delivered on time and exceeding quality expectations. They're now our go-to tech partner!",
    location: "Washington DC, USA",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalPages]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Trustpilot Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6 md:mb-8"
        >
          <div className="bg-white px-4 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl shadow-lg border border-emerald-100 flex flex-col sm:flex-row items-center gap-3 md:gap-4">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-green-500 fill-green-500 md:hidden" />
              <Star size={24} className="text-green-500 fill-green-500 hidden md:block" />
              <span className="text-xl md:text-2xl font-bold text-gray-900">Trustpilot</span>
            </div>
            <div className="sm:border-l border-gray-300 sm:pl-4">
              <div className="flex gap-0.5 md:gap-1 mb-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-green-500 fill-green-500 md:hidden" />
                ))}
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-green-500 fill-green-500 hidden md:block" />
                ))}
              </div>
              <p className="text-xs md:text-sm text-gray-600 font-semibold">4.9 out of 5 | 250+ reviews</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Testimonials</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Trusted by businesses across India and USA - hear what our satisfied clients have to say
          </p>
        </motion.div>

        {/* Auto-playing Carousel */}
        <div className="max-w-7xl mx-auto mb-6 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {getCurrentTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-emerald-200">
                  <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 md:hidden" />
                    ))}
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-yellow-400 hidden md:block" />
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6 min-h-[100px] md:min-h-[120px]">
                    "{testimonial.text}"
                  </p>

                  <div className="pt-3 md:pt-4 border-t border-gray-100">
                    <div className="font-bold text-gray-900 text-sm md:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-xs md:text-sm text-emerald-600 font-semibold">
                      {testimonial.position}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      📍 {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bullet Point Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 w-8 h-3"
                    : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Remove Stats Summary section */}
      </div>
    </section>
  );
}