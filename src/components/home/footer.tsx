import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

type SocialIconProps = {
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  alt: string;
};

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <Link
    href={href}
    className="text-gray-400 hover:text-[#4cd965] transition-colors"
  >
    {children}
  </Link>
);

const SocialIcon = ({ href, Icon, alt }: SocialIconProps) => (
  <a
    href={href}
    className="text-gray-400 hover:text-[#4cd965] transition-colors"
  >
    <span className="sr-only">{alt}</span>
    <Icon className="h-6 w-6" />
  </a>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#4cd965] flex items-center justify-center">
                <span className="text-white font-bold text-xl">BA</span>
              </div>
              <span className="text-xl font-bold text-white">BigAppsShop</span>
            </Link>
            <p className="text-gray-400">
              Sustainable products for a better planet. Join us in making a
              difference.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {["All Products", "Featured", "Sale", "New Arrivals"].map(
                (item, idx) => (
                  <li key={idx}>
                    <FooterLink href="/products">{item}</FooterLink>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              {["Login", "Dashboard"].map((item, idx) => (
                <li key={idx}>
                  <FooterLink href={`/${item.toLowerCase()}`}>
                    {item}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              {[
                "123 biskra route Street",
                "Bous aada City, EC 12345",
                "support@bigappsshop.com",
                "(213) 666666666",
              ].map((item, idx) => (
                <li key={idx} className="text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {year} BigAppsShop. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[
              { href: "#", Icon: Facebook, alt: "Facebook" },
              { href: "#", Icon: Instagram, alt: "Instagram" },
              { href: "#", Icon: Twitter, alt: "Twitter" },
              { href: "#", Icon: Youtube, alt: "YouTube" },
            ].map(({ href, Icon, alt }, idx) => (
              <SocialIcon key={idx} href={href} Icon={Icon} alt={alt} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
