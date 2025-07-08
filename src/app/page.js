import Link from "next/link";

export default function Home() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-100 via-orange-200 to-blue-100 py-20 px-4 md:px-0 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            BRINGING YOUR VISION TO LIFE<br />ONE PIXEL AT A TIME
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Custom websites designed to reflect your brand and grow your business.
          </p>
          <Link
            href="/Pages/Contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
          >
            Kickstart Your Website
          </Link>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">What We Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Web Development"
              text="Custom websites built with modern tech, scalability, and performance in mind."
            />
            <Card
              title="Responsive Design"
              text="Mobile-first design to look great on all devices and screen sizes."
            />
            <Card
              title="Fast Delivery"
              text="Quick turnarounds without compromising attention to detail."
            />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">How We Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <Step
              number="1"
              title="Discovery"
              description="We understand your needs & propose a design strategy to suit your goals."
            />
            <Step
              number="2"
              title="Development"
              description="Our expert developers bring your idea to life using modern frameworks."
            />
            <Step
              number="3"
              title="Launch"
              description="We deploy your website and provide ongoing support for long-term success."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="mb-6">Let’s discuss your website needs and create something amazing together.</p>
          <Link
            href="/Pages/Contact"
            className="inline-block px-6 py-3 bg-white text-blue-900 font-semibold rounded hover:bg-gray-100"
          >
            Get in Touch!
          </Link>
        </div>
      </section>

      
    </>
  );
}

function Card({ title, text }) {
  return (
    <div className="p-6 border rounded shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-blue-900 mb-3">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div>
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
