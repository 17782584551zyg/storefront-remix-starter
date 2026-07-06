import { useState } from 'react';

const services = [
  {
    title: '一站式跨境电商解决方案',
    description: '从店铺搭建到运营推广，提供全方位的跨境电商服务支持，让您专注于产品本身。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20e-commerce%20dashboard%20with%20analytics%20charts%20and%20global%20sales%20data%20visualization&image_size=landscape_16_9',
    features: ['店铺注册', '产品上架', '运营优化', '数据分析'],
  },
  {
    title: '智能仓储物流服务',
    description: '全球智能分仓，就近发货，降低物流成本，提升配送效率，让您的客户享受更好的购物体验。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20warehouse%20with%20automated%20storage%20system%20and%20global%20shipping%20containers&image_size=landscape_16_9',
    features: ['全球仓储', '智能分仓', '快速配送', '实时追踪'],
  },
  {
    title: '多平台收款解决方案',
    description: '支持PayPal、Stripe等主流收款方式，多币种自动兑换，资金安全有保障，到账速度快。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Secure%20payment%20processing%20system%20with%20multiple%20currency%20icons%20and%20financial%20security%20badges&image_size=landscape_16_9',
    features: ['多平台收款', '多币种支持', '安全保障', '快速到账'],
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            服务内容
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            我们提供的服务
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            全链路跨境电商服务，满足您从开店到运营的所有需求
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-xl flex items-center justify-center shadow-xl">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">{activeService + 1}</div>
                <div className="text-sm">/ {services.length}</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? 'bg-white shadow-lg border-l-4 border-primary'
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
                onClick={() => setActiveService(index)}
              >
                <h3 className={`text-xl font-semibold mb-3 ${
                  activeService === index ? 'text-primary' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
                        activeService === index
                          ? 'bg-primary/10 text-primary'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}