import { Star } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    { 
      name: "Ayesha R.", 
      text: "Mere baal bohat zyada strong ho gaye hain. Hair fall bhi kam ho gaya hai. Highly recommend!", 
      time: "2 weeks ago",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
    },
    { 
      name: "Hina K.", 
      text: "It's really amazing! Natural product hai aur results visible hain. Main dobara order zaroor karungi.", 
      time: "1 month ago",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    { 
      name: "Sara M.", 
      text: "Best hair oil! Smell bhi bohat achi hai aur hair soft ho gaye hain.", 
      time: "3 weeks ago",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  return (
    <section id="reviews" className="py-20 px-6 bg-gradient-to-r from-[#F8F6F0] to-[#E8DCC4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Headings */}
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#78876B] uppercase mb-3">
          Real Stories
        </p>
        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-[#222222]">
          What Our Customers Say
        </h3>
        
        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between">
              
              <div>
                {/* Top Section: Avatar, Name, Stars */}
                <div className="flex items-center space-x-4 mb-5">
                  <img 
                    src={review.img} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover border border-gray-200" 
                  />
                  <div>
                    <h4 className="font-semibold text-[14px] text-[#222222] leading-tight mb-1">{review.name}</h4>
                    {/* Stars */}
                    <div className="flex text-[#D4AF37] gap-0.5">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-[#555555] text-[14px] leading-relaxed mb-6 font-medium">
                  "{review.text}"
                </p>
              </div>
              
              {/* Time (Bottom) */}
              <span className="text-[11px] text-gray-400 font-medium">
                {review.time}
              </span>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}