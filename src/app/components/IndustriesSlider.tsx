import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const industries = [
  {
    name: "Banking & Financial Services",
    image: "https://images.unsplash.com/photo-1760555960699-dc19c4104301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwZmluYW5jaWFsJTIwc2VydmljZXN8ZW58MXx8fHwxNzcwODgzNTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Capital Markets",
    image: "https://images.unsplash.com/photo-1723587693188-52754b315b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBpdGFsJTIwbWFya2V0cyUyMHRyYWRpbmd8ZW58MXx8fHwxNzcwODgzNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Healthcare & Life Sciences",
    image: "https://images.unsplash.com/photo-1564732005956-20420ebdab60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGhvc3BpdGFsfGVufDF8fHx8MTc3MDgxOTYxNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Education & E-Learning",
    image: "https://images.unsplash.com/photo-1762330917056-e69b34329ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBvbmxpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzA4NTc1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Energy & Utilities",
    image: "https://images.unsplash.com/photo-1685376594043-844022374fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjB1dGlsaXRpZXMlMjBwb3dlcnxlbnwxfHx8fDE3NzA4ODM1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Communications & Media",
    image: "https://images.unsplash.com/photo-1764745222097-222e3b188c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pY2F0aW9ucyUyMG1lZGlhJTIwYnJvYWRjYXN0aW5nfGVufDF8fHx8MTc3MDg4MzU1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Consumer Goods",
    image: "https://images.unsplash.com/photo-1668420449452-732901a1531d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdW1lciUyMGdvb2RzJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzcwODgzNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Manufacturing",
    image: "https://images.unsplash.com/photo-1695603414636-987030c7a890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzcwNzc1NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Retail & E-Commerce",
    image: "https://images.unsplash.com/photo-1605513524042-426bace35fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzA4ODM1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function IndustriesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100/40 to-emerald-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-4 md:mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm font-semibold text-emerald-700 tracking-wide uppercase">
                Industry Expertise
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Trusted Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Multiple Industries
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Delivering scalable, secure, and smart digital solutions tailored to industry-specific needs
            </p>
          </motion.div>

          {/* Industries Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="industries-slider"
          >
            <Slider {...settings}>
              {industries.map((industry, index) => (
                <div key={index} className="px-4">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-80">
                    {/* Industry Image */}
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/70 to-transparent group-hover:from-emerald-800 group-hover:via-emerald-800/80 transition-all duration-500"></div>

                    {/* Industry Name */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-teal-300 transition-colors duration-300">
                        {industry.name}
                      </h3>
                      
                      {/* Decorative Line */}
                      <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full transform origin-left transition-all duration-500 group-hover:w-24"></div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>

      <style>{`
        .industries-slider .slick-dots {
          bottom: -50px;
        }

        .industries-slider .slick-dots li button:before {
          font-size: 12px;
          color: #10b981;
          opacity: 0.3;
        }

        .industries-slider .slick-dots li.slick-active button:before {
          color: #10b981;
          opacity: 1;
        }

        .industries-slider .slick-prev,
        .industries-slider .slick-next {
          width: 50px;
          height: 50px;
          z-index: 10;
        }

        .industries-slider .slick-prev {
          left: -60px;
        }

        .industries-slider .slick-next {
          right: -60px;
        }

        .industries-slider .slick-prev:before,
        .industries-slider .slick-next:before {
          font-size: 50px;
          color: #10b981;
          opacity: 0.7;
        }

        .industries-slider .slick-prev:hover:before,
        .industries-slider .slick-next:hover:before {
          opacity: 1;
        }

        @media (max-width: 1280px) {
          .industries-slider .slick-prev {
            left: 0;
          }
          .industries-slider .slick-next {
            right: 0;
          }
        }
      `}</style>
    </section>
  );
}