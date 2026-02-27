import { motion } from "motion/react";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    title: "Starter Package",
    price: "$999",
    period: "One-time",
    description: "Perfect for small businesses and startups",
    features: [
      "Responsive Website Design",
      "Up to 5 Pages",
      "Mobile Optimization",
      "Basic SEO Setup",
      "Contact Form",
      "1 Month Support",
    ],
    popular: false,
  },
  {
    title: "Business Pro",
    price: "$1,999",
    period: "One-time",
    description: "Ideal for growing businesses",
    features: [
      "Custom Web Application",
      "Up to 15 Pages",
      "Advanced SEO",
      "CMS Integration",
      "E-commerce Ready",
      "3 Months Support",
    ],
    popular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "Quote",
    description: "For large-scale projects",
    features: [
      "Full-Stack Development",
      "Unlimited Pages",
      "AI/ML Integration",
      "Cloud Infrastructure",
      "Custom Features",
      "12 Months Support",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Find The Right <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Plan for your Business</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Flexible pricing options designed to fit your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "md:lg:scale-105 z-10" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border-2 ${
                plan.popular ? "border-emerald-500" : "border-gray-100"
              }`}>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-6">{plan.description}</p>

                <div className="mb-5 md:mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-sm md:text-base text-gray-500">/ {plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 md:gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-white md:hidden" strokeWidth={3} />
                        <Check size={14} className="text-white hidden md:block" strokeWidth={3} />
                      </div>
                      <span className="text-sm md:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 md:py-4 rounded-full font-bold transition-all duration-300 text-sm md:text-base ${
                  plan.popular
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg hover:shadow-xl hover:scale-105"
                    : "bg-gray-900 text-white hover:bg-emerald-600"
                }`}>
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}