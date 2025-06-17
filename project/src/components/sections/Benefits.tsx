import { FC } from 'react';
import { CheckCircle2, Clock, Smartphone, Shield, LineChart, BrainCircuit } from 'lucide-react';

const Benefits: FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Benefícios do poupa.ai</h2>
        <p className="section-subtitle">
          Descubra como o poupa.ai pode transformar o controle das suas finanças pessoais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12">
          {/* Benefit 1 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Facilidade de uso</h3>
              <p className="text-gray-600">
                Use o aplicativo que você já tem instalado. Sem downloads, sem cadastros complicados.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Economia de tempo</h3>
              <p className="text-gray-600">
                Registre seus gastos em segundos, sem precisar abrir outro aplicativo ou planilha.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Smartphone className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Acessibilidade</h3>
              <p className="text-gray-600">
                Disponível em qualquer celular com WhatsApp, sem ocupar espaço de armazenamento.
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p className="text-gray-600">
                Seus dados são criptografados e protegidos, garantindo total privacidade das suas informações.
              </p>
            </div>
          </div>

          {/* Benefit 5 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center flex-shrink-0">
              <LineChart className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Análise detalhada</h3>
              <p className="text-gray-600">
                Visualize gráficos e relatórios detalhados sobre seus gastos para tomar melhores decisões.
              </p>
            </div>
          </div>

          {/* Benefit 6 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center flex-shrink-0">
              <BrainCircuit className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Inteligência artificial</h3>
              <p className="text-gray-600">
                O poupa.ai aprende com seus hábitos de gasto e oferece recomendações personalizadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;