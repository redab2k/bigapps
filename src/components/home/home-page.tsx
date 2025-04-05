import BenefitsSection from "./benefits-section";
import CategorySection from "./category-section";
import FeaturedProductsSection from "./featured-products-section";
import Footer from "./footer";
import Header from "./header";
import HeroSection from "./hero-section";
import NewsletterSection from "./newsletter-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProductsSection />
        <BenefitsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
