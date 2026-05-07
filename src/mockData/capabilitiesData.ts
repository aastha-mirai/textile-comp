import fabricationImg from "@assets/imgs/fabrication.webp";
import drawingImg from "@assets/imgs/drawing.webp";
import deliveryImg from "@assets/imgs/delivery.webp";

export const capabilitiesData = [
  {
    id: 1,
    title: "Custom Fabrication",
    image: fabricationImg,
    desc: [
      "Structural steel and storage tank fabrication with high precision and durability",
      "Skid-mounted process equipment manufacturing for efficient and reliable operations",
      "Welding to international standards ensuring quality, safety, and long-lasting performance",
    ],
    buttonText: "Request Quotation & Manufacturing",
    onClick: () => {
      console.log("Custom Fabrication clicked");
    },
  },

  {
    id: 2,
    title: "As Per Drawing / BOQ",
    image: drawingImg,
    desc: [
      "Tank fabrication as per provided drawings with accuracy and compliance",
      "Customization of material requirements to meet project needs and standards",
      "Precise design and engineering execution with strong quality control",
    ],
    buttonText: "Request a Design Discussion",
    onClick: () => {
      console.log("BOQ clicked");
    },
  },

  {
    id: 3,
    title: "On-Time Delivery",
    image: deliveryImg,
    desc: [
      "Strict adherence to project timelines to ensure timely completion and delivery",
      "Efficient logistics and delivery management for smooth and reliable operations",
      "Quality-checked finished products ensuring high standards, durability, and performance",
    ],
    buttonText: "Request Quotation & Manufacturing",
    onClick: () => {
      console.log("Delivery clicked");
    },
  },
];
