import { Icon, Typography } from "@components";

export const ContactInfo = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Icon icon="call" size={16} color="white" />
        <Typography variant="caption" color="white" text="Call: +70042 94010" />
      </div>

      <div className="flex items-center gap-2">
        <Icon icon="email" size={16} color="white" />
        <Typography
          variant="caption"
          color="white"
          text="Email: desk@maavindhawasini.in"
        />
      </div>
    </>
  );
};

export default ContactInfo;
