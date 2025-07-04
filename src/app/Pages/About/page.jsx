export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-900 to-orange-500 py-20 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We’re a passionate startup based in Harare, Zimbabwe, dedicated to crafting innovative, high-quality websites that help businesses grow.
        </p>
      </header>

      {/* Description */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          Founded by a team of creative web enthusiasts, we believe in combining technology and design to build digital experiences that stand out. From startups to small businesses, our goal is to deliver websites that are not only visually stunning but also fast, user-friendly, and tailored to your unique brand.
        </p>
      </section>

      {/* Key Values */}
      <section className="bg-white py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Key Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <ValueCard
            title="Innovation"
            description="We constantly explore new technologies and creative solutions to keep your website ahead of the curve."
          />
          <ValueCard
            title="Quality"
            description="Attention to detail and best practices ensure every website we build is reliable and polished."
          />
          <ValueCard
            title="Customer Focus"
            description="Your goals drive our work. We listen closely and collaborate to create a website that fits your vision."
          />
        </div>
      </section>
    </main>
  );
}

function ValueCard({ title, description }) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}