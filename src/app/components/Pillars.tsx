import { motion } from "motion/react";
import { Users, Layers, Shield } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "TALENT",
    description: "Skilled teams delivering measurable outcomes through expertise and innovation.",
  },
  {
    icon: Layers,
    title: "TAILORED",
    description: "Custom-built solutions designed to solve real business challenges effectively.",
  },
  {
    icon: Shield,
    title: "TRUST",
    description: "Transparent processes and reliable delivery that build long-term confidence.",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">3T Pillars</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Talent. Tailored. Trust — The foundation of everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-white md:hidden" strokeWidth={2.5} />
                  <Icon size={36} className="text-white hidden md:block" strokeWidth={2.5} />
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                  {pillar.title}
                </h4>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed px-2">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}