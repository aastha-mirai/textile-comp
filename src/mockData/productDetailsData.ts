import type { ProductPageData } from "@containers";
import product1Img1 from "@assets/imgs/products-images/product-1-image1.webp";
import product1Img2 from "@assets/imgs/products-images/product-1-image2.webp";

import product2Img1 from "@assets/imgs/products-images/product-2-image1.webp";
import product2Img2 from "@assets/imgs/products-images/product-2-image2.webp";
import product2Img3 from "@assets/imgs/products-images/product-2-image3.webp";

import product3Img1 from "@assets/imgs/products-images/product-3-image1.webp";
import product3Img2 from "@assets/imgs/products-images/product-3-image2.webp";

import product4Img1 from "@assets/imgs/products-images/product-4-image1.webp";
import product4Img2 from "@assets/imgs/products-images/product-4-image2.webp";
import product4Img3 from "@assets/imgs/products-images/product-4-image3.webp";

import product5Img1 from "@assets/imgs/products-images/product-5-image1.webp";
import product5Img2 from "@assets/imgs/products-images/product-5-image2.webp";
import product5Img3 from "@assets/imgs/products-images/product-5-image3.webp";

import product6Img1 from "@assets/imgs/products-images/product-6-image1.webp";
import product6Img2 from "@assets/imgs/products-images/product-6-image2.webp";
import product6Img3 from "@assets/imgs/products-images/product-6-image3.webp";

import product7Img1 from "@assets/imgs/products-images/product-7-image1.webp";
import product7Img2 from "@assets/imgs/products-images/product-7-image2.webp";
import product7Img3 from "@assets/imgs/products-images/product-7-image3.webp";

import product8Img1 from "@assets/imgs/products-images/product-8-image1.webp";
import product8Img2 from "@assets/imgs/products-images/product-8-image2.webp";
import product8Img3 from "@assets/imgs/products-images/product-8-image3.webp";

import product9Img1 from "@assets/imgs/products-images/product-9-image1.webp";
import product9Img2 from "@assets/imgs/products-images/product-9-image2.webp";
import product9Img3 from "@assets/imgs/products-images/product-9-image3.webp";
import { getWhatsAppProductLink } from "@utils/constants";

export const glueKettleData: ProductPageData = {
  heading: "Plywood Glue Kettle",
  description:
    "Our heavy-duty Glue Kettle, also known as a Resin Reactor or Glue Cooking Tank, is an essential piece of equipment for any plywood and blockboard manufacturing unit. It is specifically engineered for the preparation of high-quality adhesives used in wood panel production.",
  heroImage: product1Img1,
  secondaryImage: product1Img2,
  keyFunction: {
    title: "Key Function",
    text: "The primary purpose of this kettle is to cook and mix various chemical compounds to produce the adhesive resin that bonds veneer layers together. It is used for preparing Urea-Formaldehyde (UF), Melamine-Urea-Formaldehyde (MUF), and Phenol-Formaldehyde (PF) resins under controlled temperature and agitation.",
  },
  construction: {
    title: "Construction & Features",
    points: [
      {
        title: "Material of Construction",
        text: "Fabricated from high-grade Mild Steel (MS) or Stainless Steel (SS304/SS316) as per client requirements to ensure durability and chemical resistance.",
      },
      {
        title: "Structure",
        text: "A robust, vertical cylindrical vessel with a dished top and bottom for uniformheat distribution and easy cleaning.",
      },
      {
        title: "Heating System",
        text: "Features a steam-jacketed design. Steam circulates between the innervessel and outer jacket, providing indirect and uniform heating to the resin mixture, preventing charring and ensuring consistent quality. The circular studs visible on the shell are for jacket reinforcement.",
      },
      {
        title: "Agitation System",
        text: "The top flange is designed to mount a heavy-duty agitator motor with a gearbox. A stainless steel anchor-type stirrer ensures thorough mixing of chemicals, maintaining homogeneity and preventing sedimentation.",
      },
      {
        title: "Ports & Nozzles",
        text: "Equipped with multiple nozzles for raw material inlet, temperature gauge, pressure gauge, safety valve, steam inlet/outlet, and a bottom discharge valve for draining the prepared glue. The rectangular opening on the side serves as a manhole or inspection port.",
      },
      {
        title: "Capacity",
        text: "Available in standard capacities ranging from 2000 Liters to 8000 Liters. Custom sizes can be fabricated as per factory requirements.",
      },
    ],
  },
  whyChooseUs: {
    title: "Advantages",
    points: [
      {
        title: "Consistent Glue Quality",
        text: "Precise temperature control and continuous agitation result in resin with optimal viscosity and bonding strength.",
      },
      {
        title: "High Efficiency",
        text: "The steam-jacketed design ensures faster heating cycles and energy savings.",
      },
      {
        title: "Durable & Low Maintenance",
        text: "Sturdy fabrication with quality welding ensures a long service life with minimal maintenance.",
      },
      {
        title: "Improved Plywood Strength",
        text: "High-quality adhesive directly contributes to superior bonding, water resistance, and overall grade of the plywood produced.",
      },
    ],
  },
  applications: {
    title: "Applications",
    text: "Ideal for plywood, blockboard, flush door, and veneer manufacturing units for cooking synthetic resin adhesives.",
  },
  cta1: {
    label: "Yes, Send me a Quote!",
    onClick: () => {
      window.open(
        getWhatsAppProductLink("Glue Kettle / Resin Reactor"),
        "_blank",
      );
    },
  },
};

export const storageTankData: ProductPageData = {
  heading: "MS Storage Tank",
  description:
    "We manufacture and supply high-quality Mild Steel (MS) Storage Tanks designed for safe and efficient storage of water, chemicals, oils, and other industrial liquids. These tanks are widely used across industries such as water treatment, manufacturing, pharmaceuticals, food processing, and chemical plants.",

  heroImage: product2Img1,
  secondaryImage: product2Img2,
  tertiaryImage: product2Img3,

  keyFunction: {
    title: "Key Function",
    text: "The MS Storage Tank is used for storing large volumes of liquids in a controlled and secure environment. It ensures durability, leak-proof performance, and protection of stored materials while maintaining operational efficiency in industrial processes.",
  },

  construction: {
    title: "Construction & Features",
    points: [
      {
        title: "Material of Construction",
        text: "Fabricated using premium quality Mild Steel plates conforming to IS 2062 grade, ensuring high strength, durability, and weldability.",
      },
      {
        title: "Tank Shape & Orientation",
        text: "Cylindrical design available in both horizontal and vertical configurations, depending on site requirements and application.",
      },
      {
        title: "Capacity Range",
        text: "Standard capacity starts from 500 liters to 100,000+ liters. Custom-built tanks available as per client specifications (e.g., 10,000 L as shown).",
      },
      {
        title: "Wall Thickness",
        text: "Typically ranges from 4 mm to 12 mm, depending on tank capacity and application to ensure structural stability and long service life.",
      },
      {
        title: "Structure",
        text: "Robust welded construction with reinforced supports or saddles for horizontal tanks to provide stability during operation.",
      },
      {
        title: "Surface Treatment",
        text: "External surface coated with red oxide primer and optional enamel/PU paint for corrosion resistance. Internal lining options like epoxy coating, rubber lining, or food-grade coating available based on usage.",
      },
      {
        title: "Installation Type",
        text: "Designed for above-ground installation, with provisions for easy placement and maintenance.",
      },
      {
        title: "Key Components",
        text: "Includes inlet/outlet nozzles, manhole for inspection, vent pipe, drain valve, and level indicator (optional).",
      },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Our MS Storage Tanks",
    points: [
      {
        title: "Durable & Cost-Effective",
        text: "Strong Mild Steel construction ensures long-lasting performance at an economical cost.",
      },
      {
        title: "Leak-Proof Design",
        text: "Precision welding and quality checks ensure zero leakage and safe storage.",
      },
      {
        title: "Customizable Design",
        text: "Tanks are designed based on specific requirements such as capacity, liquid type, and available space.",
      },
      {
        title: "Corrosion Protection",
        text: "Multiple coating and lining options increase tank life and protect stored material.",
      },
      {
        title: "Easy Maintenance",
        text: "User-friendly design with inspection points for cleaning and maintenance.",
      },
    ],
  },

  applications: {
    title: "Applications",
    text: "MS Storage Tanks are widely used for water storage systems, handling industrial process liquids, and storing chemicals and solvents safely. They are also suitable for oil and fuel storage, as well as in effluent and wastewater treatment plants. With appropriate internal lining, these tanks can be effectively used in food and pharmaceutical industries, ensuring safe and hygienic storage conditions.",
  },
  cta1: {
    label: "Yes, Send me a Quote!",
    onClick: () => {
      window.open(
        getWhatsAppProductLink("Storage Tank / Mild Steel Storage Tank"),
        "_blank",
      );
    },
  },
  cta2: {
    label: "Yes, Send me a Quote!",
    onClick: () => {
      window.open(
        getWhatsAppProductLink("5000 L Chemical Storage Tank"),
        "_blank",
      );
    },
  },
  cta3: {
    label: "Yes, Send me a Quote!",
    onClick: () => {
      window.open(getWhatsAppProductLink("50000 L Oil Storage Tank"), "_blank");
    },
  },
};

export const msHopperData: ProductPageData = {
  heading: "MS Hopper for Industrial Applications",

  description:
    "We manufacture and supply high-quality Mild Steel (MS) Hoppers designed for efficient storage, handling, and controlled discharge of bulk materials in industrial environments. These hoppers are widely used in plywood factories, cement plants, chemical industries, and material handling systems.",

  heroImage: product3Img1,
  secondaryImage: product3Img2,
  tertiaryImage: product3Img1,

  keyFunction: {
    title: "Key Function",
    text: "The MS Hopper is used for collecting, storing, and discharging bulk materials such as powder, granules, dust, or chips. Its sloped design ensures smooth gravity flow of materials into conveyors, feeders, or processing units, reducing manual handling and improving operational efficiency.",
  },

  construction: {
    title: "Construction & Features",
    points: [
      {
        title: "Material of Construction:",
        text: "Fabricated using high-quality Mild Steel plates conforming to IS 2062 grade, ensuring strength, durability, and long service life.",
      },
      {
        title: "Structure:",
        text: "The hopper features a rectangular or square top section with a conical or pyramidal bottom, designed for efficient material flow. It is supported on a sturdy MS structural frame for elevated installation.",
      },
      {
        title: "Capacity:",
        text: "Available in various capacities depending on application requirements, ranging from small storage units to large industrial bulk hoppers.",
      },
      {
        title: "Wall Thickness:",
        text: "Typically ranges from 4 mm to 10 mm, depending on load capacity and material type.",
      },
      {
        title: "Discharge System:",
        text: "Equipped with a bottom outlet connected to belt conveyors, screw conveyors, or feeders for controlled material discharge.",
      },
      {
        title: "Support Structure:",
        text: "Heavy-duty MS legs and cross supports provide stability and load-bearing strength.",
      },
      {
        title: "Surface Finish:",
        text: "Coated with red oxide primer and industrial paint for corrosion resistance and longer life. Internal lining can be provided if required.",
      },
      {
        title: "Customization:",
        text: "Design, size, outlet type, and angle of inclination can be customized based on material flow properties and site conditions.",
      },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Our MS Hopper",
    points: [
      {
        title: "Efficient Material Flow:",
        text: "Scientifically designed slopes ensure smooth and blockage-free discharge.",
      },
      {
        title: "Robust Construction:",
        text: "Built to handle heavy loads and continuous industrial usage.",
      },
      {
        title: "Low Maintenance:",
        text: "Simple design with minimal moving parts ensures easy maintenance.",
      },
      {
        title: "Custom Engineered:",
        text: "Tailor-made solutions based on your plant layout and material handling needs.",
      },
      {
        title: "Complete Solution:",
        text: "We provide fabrication, supply, and on-site installation support.",
      },
    ],
  },

  applications: {
    title: "Applications",
    text: "MS Storage Tanks are widely used for water storage systems, handling industrial process liquids, and storing chemicals and solvents safely. They are also suitable for oil and fuel storage, as well as in effluent and wastewater treatment plants. With appropriate internal lining, these tanks can be effectively used in food and pharmaceutical industries, ensuring safe and hygienic storage conditions.",
  },

  cta1: {
    label: "Yes, Send me a Quote!",
    onClick: () => {
      window.open(getWhatsAppProductLink("MS Hopper"), "_blank");
    },
  },
};

export const msShutteringPlateData: ProductPageData = {
  heading: "MS Shuttering Plate",

  description:
    "We manufacture and supply high-quality Mild Steel (MS) Shuttering Plates designed for use in construction and industrial applications. These plates are essential for creating strong and precise concrete structures, widely used in building construction, infrastructure projects, and industrial flooring.",

  heroImage: product4Img1,
  secondaryImage: product4Img2,
  tertiaryImage: product4Img3,

  keyFunction: {
    title: "Key Function",
    text: "MS Shuttering Plates are used as temporary molds or formwork to hold wet concrete in place until it gains sufficient strength. They ensure accurate shape, smooth surface finish, and structural integrity of slabs, beams, columns, and foundations.",
  },

  construction: {
    title: "Construction & Features",
    points: [
      {
        title: "Material of Construction:",
        text: "Fabricated from premium quality Mild Steel (MS) plates of IS 2062 grade, ensuring high strength, durability, and resistance to deformation under load.",
      },
      {
        title: "Structure:",
        text: "The plates feature a flat surface reinforced with MS stiffeners and ribs at the back, as visible in the image, to prevent bending and ensure uniform load distribution.",
      },
      {
        title: "Plate Thickness:",
        text: "Typically ranges from 2 mm to 6 mm for the base plate, with additional support sections for enhanced rigidity.",
      },
      {
        title: "Design:",
        text: "Available in rectangular or square modular panels, allowing easy alignment and interlocking during installation.",
      },
      {
        title: "Edge Framing:",
        text: "Strong MS angle or channel framing is provided along the edges to enhance durability and maintain shape during repeated usage.",
      },
      {
        title: "Surface Finish:",
        text: "Coated with anti-rust oil or red oxide primer to prevent corrosion and ensure longer service life. Smooth surface helps in easy de-shuttering and better concrete finish.",
      },
      {
        title: "Reusability:",
        text: "Designed for multiple reuse cycles, making it a cost-effective solution for construction projects.",
      },
      {
        title: "Customization:",
        text: "Sizes, thickness, and reinforcement pattern can be customized based on project requirements.",
      },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Our MS Shuttering Plates",
    points: [
      {
        title: "High Load Bearing Capacity:",
        text: "Reinforced structure ensures excellent strength to withstand concrete pressure.",
      },
      {
        title: "Smooth Concrete Finish:",
        text: "Provides a uniform and clean finish, reducing the need for additional plastering.",
      },
      {
        title: "Durable & Long-Lasting:",
        text: "Manufactured using high-quality materials for extended service life.",
      },
      {
        title: "Easy Handling & Installation:",
        text: "Modular design allows quick assembly and dismantling at the site.",
      },
      {
        title: "Cost-Effective Solution:",
        text: "Reusable design reduces overall construction costs.",
      },
    ],
  },

  applications: {
    title: "Applications",
    text: "MS Shuttering Plates are widely used in construction for casting concrete slabs, beams, columns, walls, and foundations. They are essential in residential buildings, commercial complexes, industrial structures, bridges, and infrastructure projects where precise and durable formwork is required.",
  },

  cta1: {
    label: "Yes, Send me a Quote!",
    onClick: () => {
      window.open(getWhatsAppProductLink("MS Shuttering Plates"), "_blank");
    },
  },
  cta2: {
    label: "Yes, Send me a Quote!",
    onClick: () => {
      window.open(
        getWhatsAppProductLink("4 mm Mild Steel Shuttering Plate"),
        "_blank",
      );
    },
  },
};

export const chimneyData: ProductPageData = {
  heading: "Industrial Chimney / Exhaust Stack for Plywood Factory",
  description:
    "We manufacture and supply high-quality Mild Steel (MS) Chimneys / Exhaust Stacks specifically designed for plywood, veneer, and blockboard manufacturing units. The chimney is a critical component for venting out flue gases from the thermic fluid heater or boiler used in the plywood pressing process.",

  heroImage: product5Img1,
  secondaryImage: product5Img2,
  tertiaryImage: product5Img3,

  keyFunction: {
    title: "Key Function",
    text: "The chimney provides a safe and efficient outlet for hot flue gases, smoke, and particulate matter generated during the heating process. It creates the necessary draft for proper combustion and ensures compliance with pollution control norms by releasing exhaust at a safe height.",
  },

  construction: {
    title: "Construction & Features",
    points: [
      {
        title: "Material of Construction",
        text: "Fabricated from premium quality Mild Steel (MS) plates of IS 2062 grade. Plate thickness ranges from 5mm to 12mm based on the height and diameter to ensure structural stability and long service life.",
      },
      {
        title: "Structure",
        text: "Modular design. The chimney is fabricated in multiple cylindrical sections as seen in the image, which are then welded or flanged together at the site for easy transportation and erection.",
      },
      {
        title: "Dimensions",
        text: "Customizable to client requirements. Standard heights range from 30 feet to 100 feet with diameters from 450mm to 1200mm, calculated based on the boiler capacity and CPCB guidelines.",
      },
      {
        title: "Key Components",
        text: "Includes a conical top for rain protection, inspection door at the base, drain point, and a sturdy base plate with foundation bolts for secure grouting.",
      },
      {
        title: "Surface Finish",
        text: "External surface is treated with a coat of red oxide primer followed by heat-resistant aluminum paint to protect against corrosion and high temperatures.",
      },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Our MS Chimney",
    points: [
      {
        title: "Structural Integrity",
        text: "Designed to withstand high wind loads and thermal stress. Internal stiffener rings are provided for larger diameters.",
      },
      {
        title: "Compliance Ready",
        text: "Designed as per industry standards to help clients get NOC from the Pollution Control Board.",
      },
      {
        title: "End-to-End Solution",
        text: "We provide complete fabrication, supply, and on-site erection services with proper alignment and stability testing.",
      },
      {
        title: "Custom Built",
        text: "Each chimney is designed based on your factory's boiler capacity, fuel type, and site conditions.",
      },
    ],
  },

  applications: {
    title: "Applications",
    text: "Essential for venting exhaust from thermic fluid heaters, boilers, and hot presses used in plywood, particle board, and MDF manufacturing plants.",
  },

  cta1: {
    label: "Yes, Send me a Quote!",
    onClick: () => {
      window.open(getWhatsAppProductLink("MS Chimney"), "_blank");
    },
  },
};

export const linearCasingPipeData: ProductPageData = {
  heading: "Borewell Pipe",
  description:
    "We manufacture and supply high-precision Linear Casting Pipe designed for accurate linear measurement in industrial and engineering applications. These Pipe are widely used in manufacturing units, quality inspection departments, machine shops, and fabrication industries where dimensional accuracy is essential.",

  heroImage: product8Img1,
  secondaryImage: product8Img2,
  tertiaryImage: product8Img3,

  keyFunction: {
    title: "Key Function",
    text: "Linear Casting Pipe are used to measure straight-line dimensions, displacement, thickness, and alignment with high precision. They help maintain dimensional consistency, improve quality control, and ensure accurate machining and assembly operations.",
  },

  construction: {
    title: "Construction & Features",
    points: [
      {
        title: "Material of Construction",
        text: "Manufactured using hardened steel or stainless steel for durability, wear resistance, and long service life.",
      },
      {
        title: "Measurement Accuracy",
        text: "Designed for precise linear measurement with fine graduations and minimal measurement error.",
      },
      {
        title: "Structure",
        text: "Compact and rigid body construction ensures stable and vibration-free operation.",
      },
      {
        title: "Display System",
        text: "Available with analog, dial, or digital display options for easy and accurate readings.",
      },
      {
        title: "Smooth Operation",
        text: "Precision-machined sliding and measuring components ensure effortless movement and reliable measurement.",
      },
      {
        title: "Surface Finish",
        text: "Corrosion-resistant coating or polished finish for enhanced durability.",
      },
      {
        title: "Customization",
        text: "Available in different sizes and measurement ranges based on application requirements.",
      },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Our Linear Casing Pipe",
    points: [
      {
        title: "High Precision Measurement",
        text: "Ensures accurate and repeatable results.",
      },
      {
        title: "Robust Construction",
        text: "Suitable for industrial working conditions.",
      },
      {
        title: "Easy to Operate",
        text: "User-friendly design with clear readability.",
      },
      {
        title: "Reliable Performance",
        text: "Maintains accuracy over long-term usage.",
      },
      {
        title: "Versatile Applications",
        text: "Suitable for multiple industrial measurement tasks.",
      },
    ],
  },

  applications: {
    title: "Applications",
    text: "Widely used in machining, fabrication, automotive industries, tool rooms, quality inspection labs, and manufacturing plants for dimensional checking and precision measurement tasks.",
  },

  cta1: {
    label: "Yes, Send me a Quote!",
    onClick: () => {
      window.open(getWhatsAppProductLink("Linear Casing Pipe"), "_blank");
    },
  },
};

export const heightGaugeData: ProductPageData = {
  heading: "Height Gauge",
  description:
    "We manufacture and supply high-quality Height Gauges / Road Height Barriers designed for vehicle height restriction and safety control on roads, bridges, underpasses, factory entrances, toll plazas, and restricted entry zones. These structures are fabricated using heavy-duty Mild Steel (MS) sections to ensure durability, visibility, and long service life in outdoor environments.",

  heroImage: product7Img1,
  secondaryImage: product7Img2,
  tertiaryImage: product7Img3,

  keyFunction: {
    title: "Key Function",
    text: "Height Gauges are used to restrict the entry of over-height vehicles into specific areas where height clearance is limited. They help prevent accidents, protect bridges and overhead structures, and ensure smooth traffic management by providing a visible warning before restricted zones.",
  },

  construction: {
    title: "Construction & Features",
    points: [
      {
        title: "Material of Construction",
        text: "Fabricated using premium quality Mild Steel (MS) beams, channels, and plates for high structural strength and durability.",
      },
      {
        title: "Structure",
        text: "Heavy-duty rectangular frame structure with vertical support columns and horizontal cross beam for height restriction indication.",
      },
      {
        title: "Design",
        text: "Available in fixed or customized designs based on required road clearance and site conditions.",
      },
      {
        title: "Height Marking",
        text: "Clearly painted in high-visibility black and white reflective patterns for easy identification during day and night.",
      },
      {
        title: "Support System",
        text: "Strong foundation base plates and reinforced support members ensure stability against wind load and vehicle impact.",
      },
      {
        title: "Surface Finish",
        text: "Coated with red oxide primer and weather-resistant industrial paint for corrosion protection and outdoor durability.",
      },
      {
        title: "Customization",
        text: "Height, width, beam size, and structural design can be customized according to road standards and client requirements.",
      },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Our Height Gauge",
    points: [
      {
        title: "Robust Construction",
        text: "Designed for continuous outdoor usage and harsh environmental conditions.",
      },
      {
        title: "High Visibility",
        text: "Reflective color patterns improve safety and visibility for drivers.",
      },
      {
        title: "Accurate Height Restriction",
        text: "Prevents entry of oversized vehicles into restricted areas.",
      },
      {
        title: "Low Maintenance",
        text: "Durable fabrication with corrosion-resistant coating ensures long service life.",
      },
      {
        title: "Custom Fabrication",
        text: "Manufactured according to site dimensions and project specifications.",
      },
    ],
  },

  applications: {
    title: "Applications",
    text: "Widely used on roads, railway crossings, bridges, underpasses, toll plazas, industrial premises, warehouses, parking areas, and restricted entry zones to control vehicle height and enhance traffic safety.",
  },

  cta1: {
    label: "Yes, Send me a Quote!",
    onClick: () => {
      window.open(getWhatsAppProductLink("Height Gauge"), "_blank");
    },
  },
};

export const fabricationAsPerDesignData: ProductPageData = {
  heading: "Fabrication as per Design",
  description:
    "We provide custom fabrication services as per client design and specifications, delivering high-quality engineered solutions for industrial, commercial, and infrastructure applications. Our fabrication capabilities cover a wide range of components and structures tailored to meet specific project requirements.",

  heroImage: product9Img1,
  secondaryImage: product9Img2,
  tertiaryImage: product9Img3,

  keyFunction: {
    title: "Key Function",
    text: "Fabrication as per design ensures that every component is manufactured exactly according to client drawings, technical specifications, and functional requirements. It enables precise execution of complex designs while maintaining quality and performance standards.",
  },

  construction: {
    title: "Construction & Features",
    points: [
      {
        title: "Material Flexibility",
        text: "Fabrication in Mild Steel (MS), Stainless Steel (SS), and other metals based on application needs.",
      },
      {
        title: "Precision Engineering",
        text: "Advanced machinery and skilled workforce ensure accurate cutting, bending, welding, and assembly.",
      },
      {
        title: "Design Compliance",
        text: "Strict adherence to client drawings, industry standards, and quality norms.",
      },
      {
        title: "Welding & Assembly",
        text: "High-quality welding techniques ensure structural strength and durability.",
      },
      {
        title: "Surface Treatment",
        text: "Options such as painting, powder coating, galvanizing, or polishing for corrosion resistance and finish.",
      },
      {
        title: "Quality Control",
        text: "Thorough inspection at every stage of fabrication to ensure defect-free output.",
      },
      {
        title: "Customization",
        text: "Fully customizable designs, sizes, and finishes as per project requirements.",
      },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Our Fabrication Services",
    points: [
      {
        title: "Tailor-Made Solutions",
        text: "Designed and built exactly as per client requirements.",
      },
      {
        title: "High Quality Standards",
        text: "Ensures durability, strength, and performance.",
      },
      {
        title: "Skilled Workforce",
        text: "Experienced team handling complex fabrication projects.",
      },
      {
        title: "Timely Delivery",
        text: "Efficient processes to meet project deadlines.",
      },
      {
        title: "End-to-End Support",
        text: "From design understanding to final delivery and installation.",
      },
    ],
  },

  applications: {
    title: "Applications",
    text: "Used across various industries including construction, manufacturing, infrastructure, energy, and industrial plants for structural components, machinery parts, platforms, tanks, frames, and custom-built equipment.",
  },

  cta1: {
    label: "Yes, Send me a Quote!",
    onClick: () => {
      window.open(
        getWhatsAppProductLink("Fabrication as per Design"),
        "_blank",
      );
    },
  },
};

export const bentoniteTankData: ProductPageData = {
  heading: "Bentonite Tank / Square Storage Tank",
  description:
    "We manufacture and supply high-quality Bentonite Tanks / Square Storage Tanks designed for efficient storage, mixing, and handling of bentonite slurry, water, chemicals, and other industrial liquids. These tanks are widely used in construction projects, drilling operations, industrial plants, and material handling applications where a strong and space-efficient storage solution is required.",

  heroImage: product6Img1,
  secondaryImage: product6Img2,
  tertiaryImage: product6Img3,

  keyFunction: {
    title: "Key Function",
    text: "Bentonite Tanks / Square Storage Tanks are used for storing and managing bentonite slurry and industrial liquids in a safe and controlled manner. Their square-shaped structure allows better space utilization while ensuring easy handling, mixing, and discharge of materials during industrial and construction operations.",
  },

  construction: {
    title: "Construction & Features",
    points: [
      {
        title: "Material of Construction",
        text: "Fabricated using premium quality Mild Steel (MS) plates conforming to IS 2062 standards for high strength and durability.",
      },
      {
        title: "Structure",
        text: "Heavy-duty square-shaped welded tank construction with reinforced supports and stiffeners for enhanced structural stability.",
      },
      {
        title: "Capacity Range",
        text: "Available in various storage capacities depending on project and operational requirements.",
      },
      {
        title: "Mixing Arrangement",
        text: "Can be equipped with agitator or mixing systems to maintain uniform slurry consistency where required.",
      },
      {
        title: "Wall Thickness",
        text: "Manufactured with suitable plate thickness to withstand pressure, load, and continuous industrial usage.",
      },
      {
        title: "Discharge System",
        text: "Provided with outlet valves, drain points, and piping connections for smooth material flow and easy cleaning.",
      },
      {
        title: "Support Structure",
        text: "Strong MS support legs and structural frames ensure safe installation and operation.",
      },
      {
        title: "Surface Finish",
        text: "Coated with anti-corrosion primer and industrial paint for protection against rust and harsh working environments.",
      },
      {
        title: "Customization",
        text: "Tank dimensions, thickness, outlet design, and accessories can be customized as per client specifications.",
      },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Our Bentonite Tank / Square Storage Tank",
    points: [
      {
        title: "Robust Construction",
        text: "Designed for heavy-duty industrial and construction applications.",
      },
      {
        title: "Space Efficient Design",
        text: "Square structure allows maximum utilization of available space.",
      },
      {
        title: "Leak-Proof Performance",
        text: "Precision fabrication and welding ensure safe and reliable storage.",
      },
      {
        title: "Low Maintenance",
        text: "Durable design with corrosion-resistant finish ensures long service life.",
      },
      {
        title: "Custom Fabrication",
        text: "Manufactured according to site conditions and project requirements.",
      },
    ],
  },

  applications: {
    title: "Applications",
    text: "Widely used in piling works, drilling operations, tunneling projects, construction sites, industrial plants, slurry handling systems, water storage applications, and chemical processing industries.",
  },

  cta1: {
    label: "Yes, Send me a Quote!",
    onClick: () => {
      window.open(
        getWhatsAppProductLink("Bentonite Tank / Square Storage Tank"),
        "_blank",
      );
    },
  },
};
