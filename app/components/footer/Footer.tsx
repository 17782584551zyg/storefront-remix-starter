import { RootLoaderData } from '~/root';
import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

const footerLinks = {
  services: [
    { label: '全球仓储配送', href: '#features' },
    { label: '专业选品指导', href: '#features' },
    { label: '全链路物流服务', href: '#features' },
    { label: '多币种收款支持', href: '#features' },
  ],
  solutions: [
    { label: '跨境电商解决方案', href: '#services' },
    { label: '品牌出海方案', href: '#services' },
    { label: '供应链优化', href: '#services' },
    { label: '技术支持服务', href: '#services' },
  ],
  company: [
    { label: '关于我们', href: '/about' },
    { label: '新闻动态', href: '#' },
    { label: '合作伙伴', href: '#partners' },
    { label: '加入我们', href: '#' },
  ],
  resources: [
    { label: '帮助中心', href: '#' },
    { label: '文档中心', href: '#' },
    { label: '常见问题', href: '#' },
    { label: '联系我们', href: '#' },
  ],
};

export default function Footer({
  collections,
}: {
  collections: RootLoaderData['collections'];
}) {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <h2 className="text-xl font-bold mb-4">
              <span className="text-primary">JINGQO</span>
              <span className="text-gray-300">Sourcing</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              专注跨境电商领域，提供全链路服务支持，助力中国品牌走向全球市场。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-dark-light rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-dark-light rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.038c-.21.375-.444.864-.608 1.25a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.25A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 18.057a.082.082 0 00.031.057c1.833.893 3.803 1.363 5.814 1.363a.077.077 0 00.074-.041c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.074.074 0 01.077-.01c3.928 1.764 8.18 1.764 12.062 0a.074.074 0 01.078.01c.12.098.245.195.372.288a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.074.042c1.986 0 3.954-.467 5.782-1.356a.061.061 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.538a.06.06 0 00-.031-.028z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-dark-light rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.038c-.21.375-.444.864-.608 1.25a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.25A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 18.057a.082.082 0 00.031.057c1.833.893 3.803 1.363 5.814 1.363a.077.077 0 00.074-.041c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.074.074 0 01.077-.01c3.928 1.764 8.18 1.764 12.062 0a.074.074 0 01.078.01c.12.098.245.195.372.288a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.074.042c1.986 0 3.954-.467 5.782-1.356a.061.061 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.538a.06.06 0 00-.031-.028z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-dark-light rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.171-2.911 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.227 7.462-1.216 0-2.359-.631-2.75-1.378l-.748 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase mb-4">服务</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase mb-4">解决方案</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase mb-4">公司</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase mb-4">资源</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-dark-light">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 JINGQO Sourcing. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors duration-300">隐私政策</a>
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors duration-300">服务条款</a>
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors duration-300">Cookie设置</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}