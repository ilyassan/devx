import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/sections/services"
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata.services'});

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesSection />
      <Footer />
    </main>
  )
}
