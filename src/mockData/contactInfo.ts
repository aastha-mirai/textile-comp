import type { AddressInfoProps, ContactInfoProps } from "@components";

export const addressInfo: AddressInfoProps = {
  id: 1,
  icon: "location",
  type: "location",
  description: "Maa Vindhawasini Enterprises Patna - 800026, Bihar, India",
};

export const contactInfo: ContactInfoProps[] = [
  {
    id: 1,
    icon: "phone",
    type: "phone",
    title: "Call",
    description: "+917004294010",
  },
  {
    id: 2,
    icon: "email",
    type: "email",
    title: "Email",
    description: "desk@maavindhawasini.in",
  },
  {
    id: 3,
    icon: "location",
    type: "location",
    title: "Address",
    description: "Opposite Kallu Tondon Sweets, Mahadev Asthan, Patna City, Bihar, PIN Code: 800006",
  },
];
