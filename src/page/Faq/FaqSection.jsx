import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Heading from "../../components/Heading/Heading";
import { faqs } from "../../data/faqsData";
import GrowBrand from "../../components/GrowBrand/GrowBrand";



const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="container-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <Heading
          title={"FAQ"}
          paragraph={"Frequently asked questions"}
          description={
            "Everything you need to know about working with our agency. If you have more questions, feel free to reach out."
          }
        />

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs?.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden "
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
              >
                <span className="text-lg sm:text-xl font-semibold text-slate-900">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out cursor-pointer ${
                  activeIndex === faq.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-base text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GrowBrand />
    </section>
  );
};

export default FaqSection;
