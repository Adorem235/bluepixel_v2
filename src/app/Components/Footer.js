export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-white mb-2">Blue Pixel Studio</h4>
            <p>Professional web design for startups and small businesses.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Services</h4>
            <ul className="space-y-1">
              <li>Web Development</li>
              <li>Design Consulting</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Contact</h4>
            <p>Email: contact@bluepixelstudios.co.zw</p>
            {/*<p>Phone: +1 (234) 567-890</p>*/}
          </div>
        </div>
        <div className="text-center text-sm mt-8 text-gray-500">© 2025 Blue Pixel Studio. All rights reserved.</div>
      </footer>
    )
}