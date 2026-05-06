export const metadata = {
  title: "Testimonials | Sonny Bernard",
  description: "Read testimonials from clients and colleagues who have worked with Sonny Bernard.",
};

import { AnimatedDiv } from "@/components/AnimatedMotion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    position: "CTO, TechCorp",
    content: "Sonny delivered exceptional work on our web application. His attention to security and code quality is outstanding.",
    rating: 5,
    avatar: "/avatar1.jpg",
  },
  {
    name: "Sarah Johnson",
    position: "Security Manager, SecureBank",
    content: "Working with Sonny on our cybersecurity assessment was a game-changer. His expertise helped us identify and fix critical vulnerabilities.",
    rating: 5,
    avatar: "/avatar2.jpg",
  },
  {
    name: "Mike Chen",
    position: "Founder, StartupXYZ",
    content: "Sonny not only built our platform but also mentored our team. His leadership and technical skills are top-notch.",
    rating: 5,
    avatar: "/avatar3.jpg",
  },
  {
    name: "Emily Davis",
    position: "Product Manager, InnovateCo",
    content: "The vulnerability scanner Sonny developed has become an essential tool in our security toolkit. Highly recommended!",
    rating: 5,
    avatar: "/avatar4.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Testimonials
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                What clients and colleagues say about working with me.
              </p>
            </AnimatedDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedDiv
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative"
                >
                  <Quote className="w-8 h-8 text-blue-600 mb-4 opacity-50" />
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>
              ))}
            </div>

            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Want to Share Your Experience?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                I'd love to hear about your project experience.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Leave a Review
              </button>
            </AnimatedDiv>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}