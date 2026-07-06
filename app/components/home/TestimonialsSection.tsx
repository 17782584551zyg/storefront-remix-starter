import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: '张明',
    title: '创始人',
    company: '某知名跨境电商品牌',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20businessman%20portrait%20headshot%20neutral%20background&image_size=square',
    content: '与他们合作两年多了，从一个小店铺发展到现在年销售额过千万，离不开他们专业的服务和支持。团队非常负责任，遇到问题总能及时解决。',
    rating: 5,
  },
  {
    name: '李华',
    title: '运营总监',
    company: '某家居品牌',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20businesswoman%20portrait%20headshot%20neutral%20background&image_size=square',
    content: '物流时效提升了50%，客户好评率明显上升。他们的智能仓储系统真的很强大，帮我们省了很多成本和精力。',
    rating: 5,
  },
  {
    name: '王强',
    title: 'CEO',
    company: '某电子产品公司',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20tech%20CEO%20portrait%20headshot%20neutral%20background&image_size=square',
    content: '收款安全有保障，到账速度快。最关键的是汇率透明，没有隐藏费用，让我们的资金管理更加顺畅。',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            客户评价
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            听听他们怎么说
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            来自合作伙伴的真实反馈
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentIndex].title} · {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}