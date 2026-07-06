import { Link, useLoaderData } from '@remix-run/react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { UserIcon } from '@heroicons/react/24/solid';
import { useScrollingUp } from '~/utils/use-scrolling-up';
import { classNames } from '~/utils/class-names';
import { useTranslation } from 'react-i18next';

const navItems = [
  { label: 'Our Services', href: '/services' },
  { label: 'Solutions', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
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
  const { t } = useTranslation();

  return (
    <header
      className={classNames(
        isScrollingUp ? 'sticky top-0 z-10 animate-dropIn' : '',
        'bg-white shadow-md',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">
            <Link to="/" className="flex items-center">
              <span className="text-primary font-bold">JINGQO</span>
              <span className="text-gray-800 font-medium">Sourcing</span>
            </Link>
          </h1>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
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