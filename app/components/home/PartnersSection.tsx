import { Link } from '@remix-run/react';

const partners = [
  { name: 'PayPal', description: '支付合作' },
  { name: 'Stripe', description: '支付合作' },
  { name: 'UPS', description: '物流合作' },
  { name: 'DHL', description: '物流合作' },
  { name: 'Amazon', description: '平台合作' },
  { name: 'eBay', description: '平台合作' },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            合作伙伴
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            值得信赖的伙伴
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            与全球知名企业建立长期合作关系
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300"
            >
              <div className="text-2xl font-bold text-gray-700 mb-2">{partner.name}</div>
              <div className="text-xs text-gray-500">{partner.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-secondary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          准备好开启跨境电商之旅了吗？
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          加入我们，让专业团队帮您实现出海梦想。现在咨询，享受专属优惠！
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/collections"
            className="px-8 py-4 bg-gradient-to-r from-white to-orange-50 text-primary font-semibold rounded-lg hover:from-orange-50 hover:to-orange-100 transition-all duration-300 shadow-lg hover:shadow-xl border border-orange-200"
          >
            立即咨询
          </Link>
          <Link
            to="#features"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            了解更多
          </Link>
        </div>
      </div>
    </section>
  );
}