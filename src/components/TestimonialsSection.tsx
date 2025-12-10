import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Accounts Executive at TCS",
    content: "Angel Multimedia's Tally course changed my career. The practical GST training was excellent, and I got placed within a month of completion!",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Rahul Patel",
    role: "Business Owner",
    content: "As a business owner, this course helped me manage my accounts independently. The trainers are very supportive and knowledgeable.",
    rating: 5,
    initials: "RP",
  },
  {
    name: "Anjali Desai",
    role: "Fresh Graduate",
    content: "Best decision I made after graduation! The certificate is government-approved and helped me get my first job as an accountant.",
    rating: 5,
    initials: "AD",
  },
  {
    name: "Mehul Shah",
    role: "Senior Accountant",
    content: "I upgraded my Tally skills here. The live classes and doubt-solving sessions were very helpful. Highly recommend for working professionals!",
    rating: 5,
    initials: "MS",
  },
  {
    name: "Sneha Joshi",
    role: "Freelance Accountant",
    content: "Excellent course content and practical approach. Now I'm confidently handling multiple clients' accounts and GST filing independently.",
    rating: 5,
    initials: "SJ",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Success Stories
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            Join thousands of successful students who transformed their careers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-5 sm:p-6 bg-white/95 backdrop-blur-sm border-0 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-3 sm:space-y-4">
                {/* Rating */}
                <div className="flex gap-0.5 sm:gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-sm sm:text-base text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t">
                  <Avatar className="bg-gradient-cta w-9 h-9 sm:w-10 sm:h-10">
                    <AvatarFallback className="text-white font-semibold text-sm sm:text-base">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
