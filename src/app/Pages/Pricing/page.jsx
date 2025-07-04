export default function Pricing() {
  return (
    <main className="bg-gray-50 min-h-screen py-20 px-6 text-gray-800">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-900">Our Packages</h1>
        <p className="text-lg text-gray-600">Choose the plan that fits your needs. All packages include responsive design and mobile optimization.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* BASIC PACKAGE */}
        <PricingCard
          title="Basic Package"
          subtitle="Best for: Personal pages, freelancers, portfolios"
          features={[
            "1-page responsive website",
            "Contact form & social links",
            "Mobile + tablet optimization",
            "Basic SEO setup",
            "3–5 day delivery",
          ]}
          price="$100 USD"
          hosts={[
            "DreamHost ($36 first year, $84 onwards)",
            "WebZim ($42/year)",
          ]}
        />

        {/* STANDARD PACKAGE */}
        <PricingCard
          title="Standard Package"
          subtitle="Best for: Small businesses, shops, services"
          features={[
            "Up to 5 pages (Home, About, Services, etc.)",
            "Custom design & branding",
            "WhatsApp button integration",
            "Mobile + tablet optimization",
            "Google Maps integration",
            "Basic SEO setup",
            "5–7 day delivery",
          ]}
          price="$250 USD"
          hosts={[
            "Hostinger ($48 first year, $154 onwards)",
            "WebDev ($50/year)",
          ]}
        />

        {/* PREMIUM PACKAGE */}
        <PricingCard
          title="Premium Package"
          subtitle="Best for: Online stores & brands"
          features={[
            "Full e-commerce site (up to 20 products)",
            "Product pages with payment/delivery setup",
            "WhatsApp checkout option",
            "Mobile + tablet optimization",
            "Admin dashboard (manage products & orders)",
          ]}
          price="$500 USD"
          hosts={[
            "Wix ($132/year)",
            "ZimHero ($60/year)",
          ]}
        />
      </div>
    </main>
  );
}

function PricingCard({ title, subtitle, features, price, hosts }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-1">{title}</h2>
        <p className="text-sm text-gray-500 mb-4 italic">{subtitle}</p>
        <ul className="text-sm text-gray-700 mb-6 space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xl font-semibold text-blue-900 mb-3">{price}</p>
        <p className="text-sm text-gray-600 font-medium mb-1">Website host options:</p>
        <ul className="text-sm text-gray-600 list-disc list-inside">
          {hosts.map((host, i) => (
            <li key={i}>{host}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
