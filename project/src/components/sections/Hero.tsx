import { FC } from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero: FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light/10 to-white -z-10"></div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Controle seus gastos pelo{' '}
            <span className="text-whatsapp">WhatsApp</span> com o{' '}
            <span className="text-primary">Poupai</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 md:mb-12">
            Gerencie suas finanças de forma simples e segura, enviando mensagens de texto, imagens ou áudios pelo WhatsApp, a qualquer hora e lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              className="group"
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Experimentar o Poupai
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const demoSection = document.getElementById('demo');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Ver demonstração
            </Button>
          </div>
          
          <div className="mt-10 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-custom inline-block">
            <p className="text-sm text-gray-600">
              Mais de <span className="font-bold text-primary">10,000</span> usuários já controlam suas finanças com o Poupai!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;