import { Section } from "@/components/core/section/Section";
import { Link } from "@/lib/intl/navigation";
import Logo from "@/components/core/brand/Logo";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Container } from "../container/container";
import { InstagramIcon, LinkedinIcon, XIcon } from "lucide-react";
const footerLinks = [
  {
    title: "About",
    links: [
      { title: "Features", href: "#" },
      { title: "Pricing", href: "#" },
    
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },

    ],
  },


];
export default async function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex items-center text-grey">
          <img src="/logo3.png" alt="Logo" width={200} height={100} />
          </div>
          <div className="mt-auto flex space-x-4 text-grey">
            <XIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="mb-3 block text-grey transition-colors hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
  );
}
