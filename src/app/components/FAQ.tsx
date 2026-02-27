import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does HiveRift offer?",
    answer: "We offer web development, mobile app development, AI/ML solutions, digital marketing, UI/UX design, cloud solutions, and more across 12+ industries.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A standard website takes 4-8 weeks, while mobile apps can take 8-16 weeks. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you work internationally?",
    answer: "Yes! We proudly serve clients worldwide with offices in India, Canada, and Michigan, USA. We work across all time zones and have experience delivering projects globally.",
  },
  {
    question: "What is your minimum project budget?",
    answer: "Our minimum project budget starts from $1,500 for basic websites. For custom software, mobile apps, and enterprise solutions, budgets typically range from $5,000 to $50,000+ depending on scope and complexity.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies including React, Node.js, Python, React Native, Flutter, AWS, Azure, Google Cloud, TensorFlow, and more. We select the best tech stack based on your project requirements.",
  },
  {
    question: "Do you sign NDA (Non-Disclosure Agreements)?",
    answer: "Absolutely! We understand the importance of confidentiality. We are happy to sign NDAs before discussing your project details to ensure complete security and privacy.",
  },
  {
    question: "Do you provide AMC (Annual Maintenance Contract)?",
    answer: "Yes! We offer comprehensive AMC packages that include regular updates, security patches, bug fixes, performance monitoring, technical support, and feature enhancements to keep your solution running smoothly.",
  },
  {
    question: "What industries do you serve?",
    answer: "We serve 12+ industries including Healthcare, Finance, E-Commerce, Education, Real Estate, Travel, Manufacturing, Media & Entertainment, and more with tailored digital solutions.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Questions</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="mb-3 md:mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white border-2 border-gray-200 rounded-lg md:rounded-xl p-4 md:p-6 text-left hover:border-emerald-500 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 pr-3 md:pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-emerald-600 transition-transform duration-300 flex-shrink-0 md:hidden ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                  <ChevronDown
                    size={24}
                    className={`text-emerald-600 transition-transform duration-300 flex-shrink-0 hidden md:block ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 mt-3 md:mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}