import { ContactForm } from "./ContactForm.component";
import { ContactInfo } from "./ContactInfo.component";

const ContactUsSection: React.FC = () => {
  return (
    <section
      aria-label="Contact-Us Section"
      className="relative py-16 bg-whiteSmoke"
    >
      <div className="relative w-full mx-auto">
        <div className="max-w-7xl relative z-level-1 grid grid-cols-1 md:grid-cols-[40%_55%] xl:gap-10 gap-8 mx-auto bg-white rounded-2xl py-6 px-2 md:p-8 shadow-xl">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
