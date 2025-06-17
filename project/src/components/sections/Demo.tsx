import { FC, useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

const Demo: FC = () => {
  const [activeMessageIndex, setActiveMessageIndex] = useState<number>(0);
  const [isMockupVisible, setIsMockupVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsMockupVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const demoSection = document.getElementById('demo');
    if (demoSection) {
      observer.observe(demoSection);
    }

    return () => {
      if (demoSection) {
        observer.unobserve(demoSection);
      }
    };
  }, []);

  useEffect(() => {
    if (isMockupVisible && activeMessageIndex < 4) {
      const timer = setTimeout(() => {
        setActiveMessageIndex(activeMessageIndex + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [activeMessageIndex, isMockupVisible]);

  return (
    <section 
      id="demo" 
      className="section bg-gray-50 py-16 md:py-24"
    >
      <div className="container-custom">
        <h2 className="section-title">Veja como é fácil usar o poupa.ai</h2>
        <p className="section-subtitle">
          Envie seus gastos pelo WhatsApp e deixe o poupa.ai cuidar do resto.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-12">
          {/* iPhone Mockup */}
          <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[650px] bg-gray-900 rounded-[3rem] shadow-custom-lg p-3 border-[10px] border-gray-800">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-lg z-10"></div>
            
            {/* Screen */}
            <div className="h-full w-full bg-gray-100 rounded-[2.5rem] overflow-hidden">
              {/* WhatsApp Header */}
              <div className="bg-primary-dark text-white p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">poupa.ai - Assistente</h3>
                    <p className="text-xs opacity-80">online</p>
                  </div>
                </div>
              </div>
              
              {/* Chat Area */}
              <div className="h-[calc(100%-80px)] bg-[url('https://i.pinimg.com/originals/97/c0/07/97c00759d90d786d9b6a65cb195d346d.jpg')] bg-repeat p-4 overflow-y-auto flex flex-col gap-4">
                {/* Message 1 */}
                <div className={`chat-message ${activeMessageIndex >= 1 ? 'visible' : 'invisible'}`}>
                  <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] ml-auto shadow-sm">
                    <p className="text-sm">Café na padaria - R$ 12,50</p>
                    <p className="text-[10px] text-gray-500 text-right mt-1">09:42</p>
                  </div>
                </div>
                
                {/* Message 2 */}
                <div className={`chat-message ${activeMessageIndex >= 2 ? 'visible' : 'invisible'}`}>
                  <div className="bg-green-100 rounded-lg rounded-tr-none p-3 max-w-[80%] shadow-sm">
                    <p className="text-sm">
                      Registrado com sucesso! ✅
                      <br />
                      <br />
                      Categoria: Alimentação
                      <br />
                      Valor: R$ 12,50
                    </p>
                    <p className="text-[10px] text-gray-500 text-right mt-1">09:42</p>
                  </div>
                </div>
                
                {/* Message 3 */}
                <div className={`chat-message ${activeMessageIndex >= 3 ? 'visible' : 'invisible'}`}>
                  <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] ml-auto shadow-sm">
                    <p className="text-sm">Quanto já gastei em alimentação neste mês?</p>
                    <p className="text-[10px] text-gray-500 text-right mt-1">09:43</p>
                  </div>
                </div>
                
                {/* Message 4 */}
                <div className={`chat-message ${activeMessageIndex >= 4 ? 'visible' : 'invisible'}`}>
                  <div className="bg-green-100 rounded-lg rounded-tr-none p-3 max-w-[80%] shadow-sm">
                    <p className="text-sm">
                      No mês de junho, você já gastou R$ 487,20 em Alimentação.
                      <br />
                      <br />
                      Isso representa 32% do seu orçamento para esta categoria.
                      <br />
                      <br />
                      Deseja ver mais detalhes ou o resumo de outras categorias?
                    </p>
                    <p className="text-[10px] text-gray-500 text-right mt-1">09:43</p>
                  </div>
                </div>
              </div>
              
              {/* Input Area */}
              <div className="h-[80px] bg-gray-200 p-2 flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-400">
                  Digite uma mensagem...
                </div>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 3 3 9-3 9 19-9Z"></path>
                    <path d="M6 12h16"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features List */}
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-6">Controle financeiro direto no WhatsApp</h3>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Envie seus gastos</h4>
                  <p className="text-gray-600">
                    Basta enviar uma mensagem com a descrição e o valor do gasto. O poupa.ai reconhece automaticamente a categoria.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Consulte a qualquer momento</h4>
                  <p className="text-gray-600">
                    Pergunte sobre seus gastos por categoria, período ou estabelecimento. O poupa.ai responde instantaneamente.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Receba análises e insights</h4>
                  <p className="text-gray-600">
                    O poupa.ai analisa seus gastos e envia dicas personalizadas para ajudar você a economizar mais.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;