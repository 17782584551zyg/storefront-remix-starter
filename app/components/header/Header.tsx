import { Link } from '@remix-run/react';
import { ShoppingBagIcon, ChevronDownIcon, GlobeIcon } from '@heroicons/react/24/outline';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { UserIcon } from '@heroicons/react/24/solid';
import { useScrollingUp } from '~/utils/use-scrolling-up';
import { classNames } from '~/utils/class-names';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const navItems = [
  {
    label: 'Our Services',
    children: [
      { label: 'Purchasing Service', href: '/services' },
      { label: 'Dropshipping Service', href: '/services' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Shipping Solutions', href: '/services' },
      { label: 'Quality Control', href: '/services' },
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
              <span className="text-primary font-bold">TAI</span>
              <span className="text-gray-800 font-medium">Sourcing</span>
            </Link>
          </h1>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.children ? (
                <>
                  <button
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium transition-colors duration-300 px-3 py-2"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.label}</span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-48 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-6 py-2 text-gray-600 hover:bg-primary/10 hover:text-primary text-sm transition-colors duration-200"
                          onMouseEnter={() => setActiveDropdown(item.label)}
                          onMouseLeave={() => setActiveDropdown(null)}
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
                  className="px-3 py-2 text-gray-700 hover:text-primary font-medium transition-colors duration-300"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors duration-300 px-2 py-1"
              onClick={() => setShowLangDropdown(!showLangDropdown)}
            >
              <GlobeIcon className="w-4 h-4" />
              <span className="text-sm">{languages.find(l => l.code === i18n.language)?.label || 'English'}</span>
              <ChevronDownIcon className="w-3 h-3" />
            </button>
            {showLangDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-40 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                      i18n.language === lang.code 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-gray-600 hover:bg-primary/10 hover:text-primary'
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
              className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors duration-300"
            >
              <UserIcon className="w-4 h-4" />
              <span className="text-sm">
                {isSignedIn ? t('account.myAccount') : t('account.signIn')}
              </span>
            </Link>
          </div>
          <button
            className="relative w-9 h-9 bg-primary/10 rounded-full text-primary p-1 hover:bg-primary/20 transition-colors duration-300"
            onClick={onCartIconClick}
            aria-label="Open cart tray"
          >
            <ShoppingBagIcon />
            {cartQuantity ? (
              <div className="absolute rounded-full -top-2 -right-2 bg-primary min-w-6 min-h-6 flex items-center justify-center text-xs text-white p-1">
                {cartQuantity}
              </div>
            ) : (
              ''
            )}
          </button>
        </div>
      </div>
    </header>
  );
}