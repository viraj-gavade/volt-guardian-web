// src/components/FAQSection.tsx
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What types of generators do you offer?",
    answer:
      "We offer a wide range of diesel generators, including new, used, and rental options, to suit various power requirements for industries, businesses, and homes.",
  },
  {
    question: "Do you provide installation services for solar projects?",
    answer:
      "Yes, we provide complete installation services for solar projects, ensuring seamless integration and reliable performance.",
  },
  {
    question: "How do I know which generator is right for my needs?",
    answer:
      "Our experts help you assess your power requirements and recommend the most suitable generator for your specific needs.",
  },
  {
    question: "What makes your services stand out?",
    answer:
      "We provide quality equipment, quick support, and customized solutions to ensure customer satisfaction.",
  },
  {
    question: "Do you offer post-installation maintenance for solar projects?",
    answer:
      "Yes, we offer regular maintenance and after-sales support to ensure optimal performance of your solar projects.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 m-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left FAQ Section */}
        <div>
          <p className="text-blue-700 font-semibold uppercase text-left">Some FAQ’s</p>
          <h2 className="mt-2 text-left font-bold text-gray-900 sm:text-4xl">
            Strengthening Tomorrow <br /> with Smarter Power.
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-md overflow-hidden border transition-all duration-300 ${
                  openIndex === index ? "bg-green-600 text-white" : "bg-green-700 text-white"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left text-lg font-medium"
                >
                  {faq.question}
                  {openIndex === index ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  } bg-white text-gray-700`}
                >
                  <p className="p-4 text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <img
            src="src/assets/faqgenerator.png"
            alt="Generator"
            className="w-full h-[400px] object-cover rounded-l-[100px]"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
