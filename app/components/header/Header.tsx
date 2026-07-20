import { Link, useLocation, useNavigate } from '@remix-run/react';
import {
  ShoppingBagIcon,
  ChevronDownIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { UserIcon } from '@heroicons/react/24/solid';
import { useScrollingUp } from '~/utils/use-scrolling-up';
import { classNames } from '~/utils/class-names';
import { useTranslation } from '~/hooks/useTranslation';
import { useState, useRef, useEffect } from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'nl', label: 'Nederlands' },
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
  const navigate = useNavigate();
  const isProductPage =
    location.pathname.startsWith('/products') ||
    location.pathname.startsWith('/collections') ||
    location.pathname.startsWith('/product');
  const currentLocale = i18n.language || data.locale || 'en';

  const navItems = [
    { label: t('header.ourServices'), href: '/services', key: 'ourServices' },
    {
      label: t('header.solutions'),
      key: 'solutions',
      children: [
        {
          label: t('header.shippingSolutions'),
          href: '/solutions/shipping',
          key: 'shippingSolutions',
        },
        {
          label: t('header.qualityControl'),
          href: '/solutions/quality-control',
          key: 'qualityControl',
        },
      ],
    },
    { label: t('header.products'), href: '/products', key: 'products' },
    {
      label: t('header.about'),
      key: 'about',
      children: [
        {
          label: t('header.paymentInformation'),
          href: '/payment-information',
          key: 'paymentInformation',
        },
        { label: t('header.aboutUs'), href: '/about', key: 'aboutUs' },
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      let isInsideDropdown = false;

      Object.values(dropdownRefs.current).forEach((ref) => {
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

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  const changeLanguage = (code: string) => {
    setCookie('i18next', code, 30);
    setShowLangDropdown(false);
    window.location.href = window.location.pathname;
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
              key={item.key}
              ref={(el) => {
                dropdownRefs.current[item.key] = el;
              }}
              className="relative"
            >
              {item.children ? (
                <>
                  <button
                    className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300 px-3 py-2"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.key ? null : item.key,
                      )
                    }
                    onMouseEnter={() => setActiveDropdown(item.key)}
                  >
                    <span>{item.label}</span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                  {activeDropdown === item.key && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-48 z-50 border border-gray-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
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
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors duration-300 px-2 py-1"
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              ref={(el) => {
                dropdownRefs.current['language'] = el;
              }}
            >
              <GlobeAltIcon className="w-4 h-4" />
              <span className="text-sm">
                {languages.find((l) => l.code === currentLocale)?.label ||
                  'English'}
              </span>
              <ChevronDownIcon className="w-3 h-3" />
            </button>
            {showLangDropdown && (
              <div
                className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-40 z-50 border border-gray-100"
                ref={(el) => {
                  dropdownRefs.current['languageDropdown'] = el;
                }}
              >
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
          {false && (
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
          )}
        </div>
      </div>
    </header>
  );
}
