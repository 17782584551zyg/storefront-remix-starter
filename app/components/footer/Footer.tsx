import { RootLoaderData } from '~/root';
import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

export default function Footer({
  collections,
}: {
  collections: RootLoaderData['collections'];
}) {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <h2 className="text-xl font-bold mb-6">
              <span className="text-primary">TAI</span>
              <span className="text-gray-300">Sourcing</span>
            </h2>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">MAIN MENU</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-500 hover:text-primary text-sm transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-500 hover:text-primary text-sm transition-colors">Products</a></li>
              <li><a href="/about" className="text-gray-500 hover:text-primary text-sm transition-colors">About Us</a></li>
              <li><a href="/payment-information" className="text-gray-500 hover:text-primary text-sm transition-colors">Payment Information</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Shipping Information</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">OUR SERVICE</h3>
            <ul className="space-y-3">
              <li><a href="/services" className="text-gray-500 hover:text-primary text-sm transition-colors">Purchasing Service</a></li>
              <li><a href="/services" className="text-gray-500 hover:text-primary text-sm transition-colors">Dropshipping Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Extra Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Who We Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">OUR SOLUTIONS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Shipping Solutions</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Quality Control</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Private Label</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Amazon FBA</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">CONTACT US</h3>
            <ul className="space-y-3">
              <li className="text-gray-500 text-sm">Email:</li>
              <li><a href="mailto:info@Taisourcing@gmail.com" className="text-gray-400 hover:text-primary text-sm transition-colors">info@Taisourcing@gmail.com</a></li>
              <li className="text-gray-500 text-sm mt-3">Tel:</li>
              <li><a href="tel:+8617793529591" className="text-gray-400 hover:text-primary text-sm transition-colors">+86 17793529591</a></li>
              <li className="text-gray-400 text-sm">(Call from China)</li>
              <li className="text-gray-500 text-sm mt-3">WhatsApp:</li>
              <li><a href="https://wa.me/8617793529591" className="text-gray-400 hover:text-primary text-sm transition-colors">+86 17793529591</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">WORKING HOURS</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Monday to Friday</li>
              <li className="text-gray-400 text-sm">9:00 AM - 6:00 PM</li>
              <li className="text-gray-500 text-sm mt-2">Saturday</li>
              <li className="text-gray-400 text-sm">9:00 AM - 4:00 PM</li>
              <li className="text-gray-500 text-sm mt-2">(China Standard Time)</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              Copyright 2026 | All Rights Reserved | Powered by Tai Sourcing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}