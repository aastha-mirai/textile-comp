import {
  Icon,
  Typography,
  type ContactDataProps,
  type ContactInfoProps,
} from "@components";
import { contactInfo } from "@mockData";

const handleAction = (info: ContactInfoProps) => {
  const phone = info.description.replace(/\s|-/g, "");
  switch (info.type) {
    case "location": {
      const query = encodeURIComponent(info.description);
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${query}`,
        "_blank",
      );
      break;
    }

    case "email": {
      const email = info.description;

      try {
        // Try opening default mail client
        window.location.href = `mailto:${email}`;

        // Give the browser a tiny delay to attempt navigation
        setTimeout(() => {
          // If nothing happened, copy to clipboard
          navigator.clipboard
            .writeText(email)
            .then(() => {
              alert(`Email address copied to clipboard: ${email}`);
            })
            .catch(() => {
              console.warn("Could not copy email to clipboard");
            });
        }, 200);
      } catch (err) {
        // Fallback: copy to clipboard if window.location fails
        navigator.clipboard
          .writeText(email)
          .then(() => alert(`Email address copied to clipboard: ${email}`))
          .catch(() => console.warn("Could not copy email", err));
      }

      break;
    }

    case "phone": {
      navigator.clipboard.writeText(phone);
      alert("Phone Number copied");
      break;
    }

    default:
      break;
  }
};

export const ContactInfo = ({ limit }: ContactDataProps) => {
  const data = limit ? contactInfo.slice(0, limit) : contactInfo;

  return (
    <>
      {data.map((item) => (
        <button
          type="button"
          key={item.id}
          onClick={() => handleAction(item)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Icon icon={item.icon} size={16} color="white" />
          <Typography
            variant="caption"
            color="white"
            text={`${item.title}: ${item.description}`}
          />
        </button>
      ))}
    </>
  );
};

export default ContactInfo;
