import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";



export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <Testimonials/>
      <WhyChooseUs/>
      <FeaturedCourses/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
