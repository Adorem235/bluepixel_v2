export default function Footer() {
    return (
      <footer className="bg-darkBlue text-white py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="font-bold text-lg">BluePixel</h3>
            <p>Professional web development service for startups and businesses.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul>
              <li>Web Development</li>
              <li>Design</li>
              <li>SEO</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>hello@bluepixel.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-400">
          © 2025 BluePixel. All rights reserved.
        </div>
      </footer>
    )
}