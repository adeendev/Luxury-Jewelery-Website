import { CrownedLayout } from "@/components/layout/CrownedLayout";
import { Hero } from "@/components/sections/Hero";
import { CollectionsShowcase } from "@/components/sections/CollectionsShowcase";
import { CustomStudio } from "@/components/sections/CustomStudio";
import { AboutFounder } from "@/components/sections/AboutFounder";
import { ContactAndFAQ } from "@/components/sections/ContactAndFAQ";
import { LifestyleGallery } from "@/components/sections/LifestyleGallery";

const Index = () => {
  return (
    <CrownedLayout>
      <Hero />
      <CollectionsShowcase />
      <CustomStudio />
      <AboutFounder />
      <LifestyleGallery />
      <ContactAndFAQ />
    </CrownedLayout>
  );
};

export default Index;
