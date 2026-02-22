import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import GalleryStrip from '@/components/sections/GalleryStrip';
import Residences from '@/components/sections/Residences';
import ImageBreak from '@/components/sections/ImageBreak';
import Amenities from '@/components/sections/Amenities';
import UpdateBanner from '@/components/sections/UpdateBanner';
import Visionaries from '@/components/sections/Visionaries';
import CTAForm from '@/components/sections/CTAForm';
import BrokerFooter from '@/components/layout/BrokerFooter';

import { residencesData } from '@/data/residences';
import { amenitiesData } from '@/data/amenities';
import { visionariesData } from '@/data/visionaries';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <GalleryStrip />
      <Residences data={residencesData} />
      <ImageBreak />
      <Amenities data={amenitiesData} />
      <UpdateBanner />
      <Visionaries data={visionariesData} />
      <CTAForm />
      <BrokerFooter />
    </main>
  );
}
