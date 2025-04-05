import BenefitsSection from "./benefits-section";
import CategorySection from "./category-section";
import FeaturedProductsSection from "./featured-products-section";
import HeroSection from "./hero-section";
import NewsletterSection from "./newsletter-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProductsSection />
        <BenefitsSection />
        <NewsletterSection />
      </main>
    </div>
  );
}
