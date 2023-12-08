"use client";

import { Accordion } from "flowbite-react";
import { faq } from "../../data/index";

function Faqcomponent() {
  return (
    <div className=" px-10 py-20 ">
      <div className="flex flex-col pb-5 text-center">
        <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Pertanyaan yang sering di tanyakan
        </h1>
      </div>
      <div className="grid gap-2 lg:grid-cols-2 mb-5">
        {faq.map((faq) => {
          return (
            <div key={faq.id}>
              <Accordion
                collapseAll
                className="flex flex-wrap gap-2 shadow-md"
                data-aos="fade-up"
              >
                <Accordion.Panel>
                  <Accordion.Title>{faq.title}</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {faq.desc}
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faqcomponent;
