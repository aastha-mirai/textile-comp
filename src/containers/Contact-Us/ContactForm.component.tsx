import { useState } from "react";

import { Button, Typography } from "@components";
import { contactForm } from "@mockData";

export const ContactForm: React.FC = () => {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formValues, setFormValues] = useState(
    contactForm.reduce(
      (acc, field) => {
        acc[field.label] = "";
        return acc;
      },
      {} as Record<string, string>,
    ),
  );
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
    setFormErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  return (
    <>
      <div className="flex flex-col p-4 md:p-8">
        <Typography
          variant="h4"
          text="Request a quote today!"
          color="secondary"
          weight="bold"
        />
        <div className="mt-6 mb-5">
          <Typography
            variant="body"
            text="Get in touch with us to discuss your fabrication and industrial equipment requirements."
            color="lightGray"
          />
        </div>
        <div className="w-1/3 border border-primary" />

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-10">
          {contactForm.map((field) => {
            const error = formErrors[field.label];

            return (
              <div
                key={field.id}
                className={`flex flex-col ${
                  field.fieldType === "textarea" ? "md:col-span-2" : ""
                }`}
              >
                <label htmlFor={field.label}>
                  <Typography
                    variant="subtitle"
                    text={`${field.label}${field.isRequired ? "*" : ""}`}
                    color="lightGray"
                    weight="medium"
                  />
                </label>

                {field.fieldType === "input" ? (
                  <div className="relative mt-2">
                    <input
                      id={field.label}
                      name={field.name}
                      type={field.type}
                      value={formValues[field.label]}
                      onChange={handleChange}
                      className="w-full border-b border-offWhite mt-2 px-2 py-1 focus:outline-none focus:ring-none"
                    />
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[2px] bg-lightGray"></span>
                  </div>
                ) : (
                  <div className="relative mt-2">
                    <textarea
                      id={field.label}
                      name={field.name}
                      rows={1}
                      value={formValues[field.label]}
                      onChange={handleChange}
                      className="w-full border-b border-offWhite mt-2 px-2 py-1 focus:outline-none focus:ring-none"
                    />
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[2px] bg-lightGray"></span>
                  </div>
                )}

                {error && (
                  <span className="text-red-500 text-sm mt-1">{error}</span>
                )}
              </div>
            );
          })}

          <div className="mt-2 md:mt-0 md:col-span-2 flex justify-end">
            <Button
              text="Send Message"
              iconName="arrowRight"
              size="md"
              type="submit"
              bgColor="primary"
            />
          </div>
        </form>
      </div>
    </>
  );
};
