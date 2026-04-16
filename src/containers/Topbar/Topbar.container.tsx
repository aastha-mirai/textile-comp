import { ContactInfo, SocialIconPanel } from "@components";

const Topbar = () => {
  return (
    <div className="hidden md:fixed top-0 left-0 w-full h-auto md:flex justify-between items-center px-4 xl:px-16 py-3 bg-secondary shadow z-level-9">
      <div className="flex items-center gap-4">
        <ContactInfo limit={2} />
      </div>

      <SocialIconPanel size={24} color="secondary" />
    </div>
  );
};

export default Topbar;
