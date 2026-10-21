import bottleImg from '../assets/hero.jpeg'

export default function Hero() {
  return (
    <section id="home" className="w-full relative bg-[#F8F6F0] mt-18">
      <img 
        src={bottleImg} 
        alt="Zulfay Zahra Hair Oil" 
        className="w-full h-auto object-cover block"
      />
    </section>
  )
}