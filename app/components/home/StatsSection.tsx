import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 4000, suffix: '+', label: '合作客户', description: '遍布全球各地' },
  { value: 120, suffix: '+', label: '覆盖国家', description: '全球化布局' },
  { value: 500, suffix: 'M+', label: '年交易额', description: '稳步增长' },
  { value: 200, suffix: '+', label: '专业团队', description: '深耕行业' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            数据说话
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            我们的成就
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            用数据证明实力，用服务赢得信任
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-cream rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <div className="text-xl font-semibold text-gray-900 mt-4">{stat.label}</div>
              <div className="text-gray-500 text-sm mt-2">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}