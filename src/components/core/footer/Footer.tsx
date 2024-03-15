import { Section } from "@/components/core/section/Section";
import { Link } from "@/lib/intl/navigation";
import Logo from "@/components/core/brand/Logo";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default async function Footer() {
  const year = new Date().getFullYear();
  return (
    <Section size="sm">
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3">
        {/* Logo and company info */}
        <div className="flex flex-col gap-2">
        <img src="/logo3.png" alt="Logo" width={200} height={100} />
        </div>
        {/* Links */}
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/privacy"
              title="Privacy"
              className="text-indigo-300 hover:text-white"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              href="/terms"
              title="Terms"
              className="text-indigo-300 hover:text-white"
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              href="/license"
              title="License"
              className="text-indigo-300 hover:text-white"
            >
              License
            </Link>
          </li>
        </ul>
        {/* Social links */}
        <div className="flex flex-col gap-2">
          <p className="text-white">Follow us:</p>
          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className="text-indigo-300 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className="text-indigo-300 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="text-indigo-300 hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
