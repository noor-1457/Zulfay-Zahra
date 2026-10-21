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
    <section id="about" className="py-15 px-4  bg-linear-to-r from-[#F8F6F0] to-[#E8DCC4]">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-serif text-[#222222] mb-16">
          Why Choose Zulfay Zahra?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-5">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Circle Icon Background */}
              <div className="w-20 h-20 rounded-full bg-[#EFECE3] flex items-center justify-center mb-5 text-[#352512]">
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