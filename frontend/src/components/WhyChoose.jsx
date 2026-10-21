import { Leaf, Droplet, Sprout, FlaskConical } from 'lucide-react'

export default function WhyChoose() {
  const features = [
    {
      icon: <Leaf size={28} strokeWidth={1.5} />,
      title: "100% Natural",
      subtitle: "Ingredients"
    },
    {
      icon: <Droplet size={28} strokeWidth={1.5} />,
      title: "Stops",
      subtitle: "Hair Fall"
    },
    {
      icon: <Sprout size={28} strokeWidth={1.5} />,
      title: "Boosts",
      subtitle: "Hair Growth"
    },
    {
      icon: <FlaskConical size={28} strokeWidth={1.5} />,
      title: "Chemical Free",
      subtitle: "& Safe"
    }
  ]

  return (
    <section id="about" className="py-20 px-6 bg-[#F8F6F0]">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-[#222222] mb-16">
          Why Choose Zulfay Zahra?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Circle Icon Background */}
              <div className="w-20 h-20 rounded-full bg-[#EFECE3] flex items-center justify-center mb-5 text-[#5A6B4E]">
                {feature.icon}
              </div>
              
              {/* Text */}
              <h3 className="text-[15px] font-medium text-[#333333] leading-tight">
                {feature.title} <br /> {feature.subtitle}
              </h3>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}