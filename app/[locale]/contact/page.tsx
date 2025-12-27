import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/sections/contact"
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata.contact'});

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactSection />
      <Footer />
    </main>
  )
}
