import { FC, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mariana Silva',
    role: 'Professora',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    content:
      'O poupa.ai mudou completamente minha relação com as finanças. Agora consigo acompanhar meus gastos diariamente sem perder tempo. Recomendo a todos!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Oliveira',
    role: 'Engenheiro',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    content:
      'Eu tentei vários aplicativos de finanças antes, mas o poupa.ai é o único que realmente uso todos os dias. É simples, rápido e eficiente.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Fernanda Costa',
    role: 'Advogada',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    content:
      'Desde que comecei a usar o poupa.ai, consegui economizar mais de 20% do meu salário todos os meses. A visualização clara dos gastos faz toda a diferença.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Ricardo Mendes',
    role: 'Empresário',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    content:
      'A praticidade de poder registrar gastos pelo WhatsApp é incrível! O poupa.ai me ajudou a ter mais disciplina financeira.',
    rating: 5,
  },
];

const Testimonials: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const showPreviousTestimonial = (): void => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const showNextTestimonial = (): void => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="section-title">O que nossos usuários dizem</h2>
        <p className="section-subtitle">
          Veja como o poupa.ai está transformando a vida financeira de pessoas reais.
        </p>

        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Desktop Testimonials */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow-custom hover:shadow-custom-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={16}
                          className={index < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>

          {/* Mobile Testimonials */}
          <div className="md:hidden">
            <div className="bg-white p-6 rounded-xl shadow-custom">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-500 text-sm">{testimonials[activeIndex].role}</p>
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className={
                          index < testimonials[activeIndex].rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonials[activeIndex].content}</p>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors"
                onClick={showPreviousTestimonial}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors"
                onClick={showNextTestimonial}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;