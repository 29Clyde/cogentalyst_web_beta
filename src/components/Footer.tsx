import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Cogentalyst</h3>
            <p className="text-neutral-300 text-sm">
              Strategic AI consulting and custom model development for the financial services industry.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#model-showcase" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Model Demos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-neutral-300 text-sm">
              <a href="mailto:info@cogentalyst.com" className="hover:text-white transition-colors">
                info@cogentalyst.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8">
          <p className="text-neutral-400 text-sm text-center">
            © {new Date().getFullYear()} Cogentalyst. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}