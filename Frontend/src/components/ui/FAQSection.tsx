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
    <section className="bg-gray-100 py-8 sm:py-16 m-4 sm:m-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        {/* Left FAQ Section */}
        <div>
          <p className="text-blue-700 font-semibold uppercase text-left text-sm sm:text-base">Some FAQ's</p>
          <h2 className="mt-2 text-left font-bold text-gray-900 text-2xl sm:text-4xl">
            Strengthening Tomorrow <br /> with Smarter Power.
          </h2>

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-md overflow-hidden border transition-all duration-300 ${
                  openIndex === index ? "bg-green-600 text-white" : "bg-green-700 text-white"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-3 sm:p-4 text-left text-base sm:text-lg font-medium"
                >
                  {faq.question}
                  {openIndex === index ? (
                    <Minus className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ml-2" />
                  ) : (
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ml-2" />
                  )}
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  } bg-white text-gray-700`}
                >
                  <p className="p-3 sm:p-4 text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative mt-8 lg:mt-0">
          <img
            src="src/assets/faqgenerator.png"
            alt="Generator"
            className="w-full h-[250px] sm:h-[400px] object-cover rounded-l-[50px] sm:rounded-l-[100px]"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
