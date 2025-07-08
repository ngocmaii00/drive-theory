"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Nguyễn Văn An",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment: "Giao diện đẹp và dễ sử dụng.",
    role: "Học viên A1",
  },
  {
    name: "Trần Thị Bình",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment: "Hệ thống vô cùng đầy đủ và chính xác!",
    role: "Học viên A2",
  },
  {
    name: "Lê Minh Cường",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment: "Thiết kế hiện đại, học tập hiệu quả.",
    role: "Học viên B1",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 relative px-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-400 font-medium">Đánh giá của người dùng</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trải nghiệm
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {" "}
              đáng nhớ
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">Hãy cùng xem người dùng nghĩ sao về DriveTheory nhé!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-slate-600">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed italic">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
