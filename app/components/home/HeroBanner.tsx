import { Link } from '@remix-run/react';

export function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            跨境电商一站式解决方案
          </span>
        </div>
        
        <h1 className="animate-fade-in-up delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          我们让你轻松从中国出海
        </h1>
        
        <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          专注跨境电商领域，提供全链路服务支持，助力中国品牌走向全球市场。
          从选品、物流到支付，一站式解决出海难题。
        </p>
        
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/collections"
            className="px-8 py-4 bg-gradient-to-r from-white to-orange-50 text-primary font-semibold rounded-lg hover:from-orange-50 hover:to-orange-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-orange-200"
          >
            立即开始
          </Link>
          <Link
            to="#features"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            了解更多
          </Link>
        </div>
        
        <div className="animate-fade-in-up delay-400 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {[
            { number: '4000+', label: '合作客户' },
            { number: '120+', label: '覆盖国家' },
            { number: '500M+', label: '年交易额' },
            { number: '200+', label: '专业团队' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
              <div className="text-white/80 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}