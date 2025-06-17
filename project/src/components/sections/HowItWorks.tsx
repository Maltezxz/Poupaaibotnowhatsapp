import { FC } from 'react';
import { Send, ListChecks, BarChart3, AlertCircle } from 'lucide-react';

const HowItWorks: FC = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="container-custom">
        <h2 className="section-title">Como o poupa.ai funciona</h2>
        <p className="section-subtitle">
          Controlar suas finanças nunca foi tão simples. Veja como o poupa.ai transforma sua gestão financeira.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow-custom flex flex-col items-center text-center hover:shadow-custom-lg transition-shadow">
            <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mb-6">
              <Send className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Envie suas despesas</h3>
            <p className="text-gray-600">
              Mande um texto, foto do recibo ou áudio descrevendo seu gasto pelo WhatsApp.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow-custom flex flex-col items-center text-center hover:shadow-custom-lg transition-shadow">
            <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mb-6">
              <ListChecks className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Categorização automática</h3>
            <p className="text-gray-600">
              O poupa.ai categoriza automaticamente seus gastos com inteligência artificial.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow-custom flex flex-col items-center text-center hover:shadow-custom-lg transition-shadow">
            <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mb-6">
              <BarChart3 className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Relatórios detalhados</h3>
            <p className="text-gray-600">
              Acesse relatórios e gráficos detalhados sobre seus gastos a qualquer momento.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-8 rounded-xl shadow-custom flex flex-col items-center text-center hover:shadow-custom-lg transition-shadow">
            <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Alertas inteligentes</h3>
            <p className="text-gray-600">
              Receba alertas quando estiver próximo de atingir limites de gastos por categoria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;