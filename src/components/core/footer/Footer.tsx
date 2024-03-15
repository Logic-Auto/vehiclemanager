import { Section } from "@/components/core/section/Section";
import { Link } from "@/lib/intl/navigation";
import Logo from "@/components/core/brand/Logo";

export default async function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="mt-auto">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <Section size="sm">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex flex-col gap-1">
                <h5 className="flex items-center gap-2 mb-2 text-white">
                  <Logo className="h-5" />{" "}
                </h5>
                <p>&copy; {year}</p>
                <p>
                  Powered &amp; built by{" "}
                
                    LOGICAUTO
                  .
                </p>
              </div>

        
              <ul className="flex flex-col gap-1">
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
