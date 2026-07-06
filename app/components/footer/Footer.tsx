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
              <span className="text-primary">JINGQO</span>
              <span className="text-gray-300">Sourcing</span>
            </h2>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">MAIN MENU</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-500 hover:text-primary text-sm transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-500 hover:text-primary text-sm transition-colors">Our Products</a></li>
              <li><a href="/about" className="text-gray-500 hover:text-primary text-sm transition-colors">About Jingsourcing</a></li>
              <li><a href="/payment-information" className="text-gray-500 hover:text-primary text-sm transition-colors">Payment Information</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Shipping Information</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Sourcing Tutorial</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Payment Tutorial</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Visit Yiwu</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Our Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">OUR SERVICE</h3>
            <ul className="space-y-3">
              <li><a href="/services" className="text-gray-500 hover:text-primary text-sm transition-colors">Sourcing & Purchasing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Dropshipping Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Extra Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Who We Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">OUR SOLUTIONS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Private Label</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Product Development</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Shipping Solution</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Amazon FBA</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Quality Control</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Credit Payment Terms</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Graphic Design</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Affiliates Program</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">CONTACT US</h3>
            <ul className="space-y-3">
              <li className="text-gray-500 text-sm">Email:</li>
              <li><a href="mailto:info@jingsourcing.com" className="text-gray-400 hover:text-primary text-sm transition-colors">info@jingsourcing.com</a></li>
              <li className="text-gray-500 text-sm mt-3">Tel:</li>
              <li><a href="tel:+18653018888" className="text-gray-400 hover:text-primary text-sm transition-colors">+1 865 301 8888</a></li>
              <li className="text-gray-400 text-sm">(Call from outside China)</li>
              <li className="text-gray-500 text-sm mt-3">Tel:</li>
              <li><a href="tel:+864009966066" className="text-gray-400 hover:text-primary text-sm transition-colors">+86 400 996 6066</a></li>
              <li className="text-gray-400 text-sm">(Call from China)</li>
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
              Copyright 2026 | All Rights Reserved | Powered by Jingsourcing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}