import { Link, useLocation } from '@remix-run/react';
import { ShoppingBagIcon, ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { UserIcon } from '@heroicons/react/24/solid';
import { useScrollingUp } from '~/utils/use-scrolling-up';
import { classNames } from '~/utils/class-names';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

const navItems = [
  {
    label: 'Our Services',
    children: [
      { label: 'Purchasing Service', href: '/services' },
      { label: 'Dropshipping Service', href: '/services/dropshipping' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Shipping Solutions', href: '/solutions/shipping' },
      { label: 'Quality Control', href: '/solutions/quality-control' },
    ],
  },
  { label: 'Products', href: '/products' },
  {
    label: 'About',
    children: [
      { label: 'Payment Information', href: '/payment-information' },
      { label: 'About Us', href: '/about' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Sourcing Guide', href: '/resources' },
      { label: 'Our Blog', href: '/resources' },
      { label: 'Import from China', href: '/resources' },
    ],
  },
];

const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'zh', label: '中文' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'pl', label: 'Polski' },
  { code: 'sv', label: 'Svenska' },
  { code: 'da', label: 'Dansk' },
  { code: 'no', label: 'Norsk' },
];

export function Header({
  onCartIconClick,
  cartQuantity,
}: {
  onCartIconClick: () => void;
  cartQuantity: number;
}) {
  const data = useRootLoader();
  const isSignedIn = !!data.activeCustomer.activeCustomer?.id;
  const isScrollingUp = useScrollingUp();
  const { t, i18n } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const location = useLocation();
  const isProductPage = location.pathname.startsWith('/products') || location.pathname.startsWith('/collections') || location.pathname.startsWith('/product');
  const currentLocale = data.locale || 'en';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      let isInsideDropdown = false;
      
      Object.values(dropdownRefs.current).forEach(ref => {
        if (ref?.contains(target)) {
          isInsideDropdown = true;
        }
      });
      
      if (!isInsideDropdown) {
        setActiveDropdown(null);
        setShowLangDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setShowLangDropdown(false);
  };

  return (
    <header
      className={classNames(
        isScrollingUp ? 'sticky top-0 z-50 animate-dropIn' : '',
        'bg-white shadow-md',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">
            <Link to="/" className="flex items-center">
              <span className="text-orange-500 font-bold">Tai</span>
                  <span className="text-gray-800 font-medium">Sourcing</span>
            </Link>
          </h1>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              ref={el => { dropdownRefs.current[item.label] = el; }}
              className="relative"
            >
              {item.children ? (
                <>
                  <button
                    className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300 px-3 py-2"
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-48 z-50 border border-gray-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-6 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500 text-sm transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  className="px-3 py-2 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="relative" ref={el => { dropdownRefs.current['language'] = el; }}>
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors duration-300 px-2 py-1"
              onClick={() => setShowLangDropdown(!showLangDropdown)}
            >
              <GlobeAltIcon className="w-4 h-4" />
              <span className="text-sm">{languages.find(l => l.code === currentLocale)?.label || 'English'}</span>
              <ChevronDownIcon className="w-3 h-3" />
            </button>
            {showLangDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-40 z-50 border border-gray-100">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                      currentLocale === lang.code 
                        ? 'bg-orange-50 text-orange-500' 
                        : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                    }`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="hidden md:block">
            <Link
              to={isSignedIn ? '/account' : '/sign-in'}
              className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors duration-300"
            >
              <UserIcon className="w-4 h-4" />
              <span className="text-sm">
                {isSignedIn ? t('account.myAccount') : t('account.signIn')}
              </span>
            </Link>
          </div>
          {isProductPage && (
            <button
              className="relative w-9 h-9 bg-orange-50 rounded-full text-orange-500 p-1 hover:bg-orange-100 transition-colors duration-300"
              onClick={onCartIconClick}
              aria-label="Open cart tray"
            >
              <ShoppingBagIcon />
              {cartQuantity ? (
                <div className="absolute rounded-full -top-2 -right-2 bg-orange-500 min-w-6 min-h-6 flex items-center justify-center text-xs text-white p-1">
                  {cartQuantity}
                </div>
              ) : (
                ''
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}