import Link from "next/link";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("Footer");

  const footerSections = [
    {
      title: t("services.title"),
      links: [
        { label: t("services.webDevelopment"), href: "#services" },
        { label: t("services.mobileDevelopment"), href: "#services" },
        { label: t("services.cloudSolutions"), href: "#services" },
        { label: t("services.digitalTransformation"), href: "#services" },
      ],
    },
    {
      title: t("company.title"),
      links: [{ label: t("company.contact"), href: "#contact" }],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Company Info - Left Side */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-2xl font-bold">DevX</h3>
            <p className="text-primary-foreground/80 text-sm">
              {t("companyDescription")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections - Right Side */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p className="flex items-center justify-center gap-2">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
