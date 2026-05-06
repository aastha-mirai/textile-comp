import { Link } from "react-router-dom";

import logo from "@assets/svgs/logo-with-text.svg";
import msmeLogo from "@assets/imgs/footer-section-msme-certified-logo.png";
import isoLogo from "@assets/imgs/footer-section-iso-certified-logo.png";
import { Icon, Typography, type AddressInfoProps } from "@components";
import { ROUTES, SOCIAL_ICON_LINKS } from "@utils/constants";
import { useScreenSize } from "@utils/useScreenSize";
import { addressInfo } from "@mockData";

const quickLinks = [
  { to: ROUTES.ABOUT, text: "About" },
  { to: ROUTES.SERVICES, text: "Products & Services" },
  { to: ROUTES.CONTACT, text: "Contact Us" },
  { to: ROUTES.PHOTOS, text: "Photos" },
];

const handleAction = (addressInfo: AddressInfoProps) => {
  const query = encodeURIComponent(addressInfo.description);
  window.open(
    `https://www.google.com/maps/search/?api=1&query=${query}`,
    "_blank",
  );
};

const Footer: React.FC = () => {
  const { isMobile } = useScreenSize();
  return (
    <footer id="footer" className="relative bg-secondary mt-18 pt-4">
      <div
        className="absolute right-6 -top-8 lg:-top-16"
        aria-label="Contact us at Whatsapp"
      >
        <Icon
          size={isMobile ? 68 : 128}
          icon="whatsappSupport"
          onClick={() => {
            window.open(SOCIAL_ICON_LINKS.WHATSAPP, "_blank");
          }}
        />
      </div>
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[3fr_2fr_2fr_1fr_1fr] gap-4 lg:gap-6">
          {/* Brand + Newsletter */}
          <div className="flex flex-col sm:w-3/4 w-full md:w-full col-span-2 md:col-span-1 gap-6">
            <Link to="/">
              <img src={logo} alt="logo" loading="lazy" />
            </Link>
            <Typography
              variant="body"
              color="white"
              text="Maa Vindhawasini Enterprises offers a premium range of storage tanks, glue kettle machines, fabrication services, stainless steel filter tanks, and mild steel casing pipes."
            />
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-theme-gradient">
              <Typography
                variant="subtitle"
                color="inherit"
                text="Our Company"
                weight="bold"
              />
            </div>

            <ul className="flex flex-col gap-1 mt-4">
              {quickLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  <div className="group inline-block">
                    <Typography
                      variant="caption"
                      color="white"
                      text={link.text}
                      underline
                    />
                  </div>
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-8 lg:justify-self-end">
            <div className="text-theme-gradient">
              <Typography
                variant="subtitle"
                color="darkGray"
                text="Reach Us"
                weight="bold"
              />
            </div>

            <button
              type="button"
              onClick={() => handleAction(addressInfo)}
              className="flex items-center gap-1 cursor-pointer"
            >
              <div className="mr-2">
                <Icon icon={addressInfo.icon} size={20} color="white" />
              </div>
              <div className="flex flex-col text-left">
                <Typography
                  variant="caption"
                  text={addressInfo.description}
                  color="white"
                />
              </div>
            </button>
          </div>

          <div className="flex flex-col w-36 lg:justify-self-end">
            <img src={msmeLogo} alt="MSME Certification Logo" />
          </div>

          <div className="flex flex-col w-36 lg:justify-self-end">
            <img src={isoLogo} alt="ISO Certification Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
