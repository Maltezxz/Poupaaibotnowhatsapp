import { FC, useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Check, ArrowRight, Loader2, User, LogOut, MessageCircle } from 'lucide-react';
import { products } from '../../stripe-config';
import { createCheckoutSession } from '../../lib/stripe';
import { supabase } from '../../lib/supabase';
import { Session, AuthChangeEvent } from '@supabase/supabase-js';

const Pricing: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const getSession = async (): Promise<void> => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session && session.access_token) {
          setAccessToken(session.access_token);
          setIsAuthenticated(true);
        } else {
          setAccessToken(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Erro ao obter sessão:', error);
        setAccessToken(null);
        setIsAuthenticated(false);
      }
    };

    getSession();

    const { data } = supabase.auth.onAuthStateChange((_, session: Session | null) => {
      if (session && session.access_token) {
        setAccessToken(session.access_token);
        setIsAuthenticated(true);
      } else {
        setAccessToken(null);
        setIsAuthenticated(false);
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (): Promise<void> => {
    if (!accessToken) {
      alert('Você precisa estar logado para assinar. Por favor, faça login primeiro.');
      return;
    }

    try {
      setIsLoading(true);
      const url = await createCheckoutSession(products.monthly.priceId, products.monthly.mode, accessToken);
      
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('URL do checkout não foi retornada');
      }
    } catch (error) {
      console.error('Erro no checkout:', error);
      alert(`Falha ao iniciar o processo de checkout: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (): Promise<void> => {
    const email = prompt('Digite seu email:');
    if (!email) return;

    if (!validateEmail(email)) {
      alert('Por favor, digite um email válido.');
      return;
    }

    const password = prompt('Digite sua senha:');
    if (!password) return;
    
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ 
        email: email.trim(), 
        password: password 
      });
      
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          alert('Credenciais inválidas. Verifique seu email e senha.');
        } else if (error.message.includes('Email not confirmed')) {
          alert('Email não confirmado. Verifique sua caixa de entrada.');
        } else if (error.message.includes('Failed to fetch')) {
          alert('Erro de conexão. Verifique sua internet e tente novamente.');
        } else {
          alert('Erro no login: ' + error.message);
        }
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      alert('Erro de rede. Verifique sua conexão com a internet e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (): Promise<void> => {
    const email = prompt('Digite seu email para criar uma conta:');
    if (!email) return;

    if (!validateEmail(email)) {
      alert('Por favor, digite um email válido.');
      return;
    }

    const password = prompt('Digite uma senha (mínimo 6 caracteres):');
    if (!password) return;
    
    if (password.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
      });
      
      if (error) {
        alert('Erro ao criar conta: ' + error.message);
      } else {
        alert('Conta criada com sucesso! Você já pode fazer login.');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      alert('Erro de rede. Verifique sua conexão com a internet e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      alert('Erro ao fazer logout. Por favor, tente novamente.');
    }
  };

  return (
    <section id="pricing" className="section bg-gradient-to-b from-white to-primary-light/10">
      <div className="container-custom">
        <h2 className="section-title">Planos simples e acessíveis</h2>
        <p className="section-subtitle">
          Escolha o plano que melhor se adapta às suas necessidades.
        </p>

        <div className="max-w-lg mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-custom overflow-hidden transform hover:scale-105 transition-transform">
            <div className="bg-primary p-6">
              <h3 className="text-xl font-bold text-white mb-1">{products.monthly.name}</h3>
              <p className="text-primary-light/90 text-sm">{products.monthly.description}</p>
            </div>
            
            <div className="p-6">
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-bold">R$ 6,50</span>
                <span className="text-gray-500 pb-1">/mês</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Acesso a todas as funcionalidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Categorização automática de gastos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Relatórios mensais detalhados</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Suporte prioritário</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Acesso ao número de WhatsApp do poupa.ai</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Chat direto com o assistente financeiro</span>
                </li>
              </ul>
              
              <div className="bg-primary-light/10 p-4 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <MessageCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-sm text-gray-700">
                    Após a compra, você receberá acesso imediato ao número de WhatsApp do poupa.ai e poderá começar a usar o chat para gerenciar suas finanças.
                  </p>
                </div>
              </div>
              
              {isAuthenticated ? (
                <div className="space-y-4">
                  <Button
                    variant="primary"
                    fullWidth
                    className="group"
                    onClick={handleSubscribe}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={18} />
                        Processando...
                      </>
                    ) : (
                      <>
                        Assinar agora
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </>
                    )}
                  </Button>
                  <Button
                    variant="secondary"
                    fullWidth
                    onClick={handleLogout}
                    className="text-sm"
                  >
                    <LogOut className="mr-2" size={16} />
                    Sair
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Button
                    variant="primary"
                    fullWidth
                    className="group"
                    onClick={handleLogin}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={18} />
                        Processando...
                      </>
                    ) : (
                      <>
                        <User className="mr-2" size={18} />
                        Fazer login para assinar
                      </>
                    )}
                  </Button>
                  <Button
                    variant="secondary"
                    fullWidth
                    onClick={handleSignUp}
                    disabled={isLoading}
                  >
                    Criar conta
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="bg-white max-w-2xl mx-auto mt-12 p-6 rounded-xl shadow-sm">
          <h3 className="text-center font-semibold mb-4">Garantia de 7 dias</h3>
          <p className="text-center text-gray-600">
            Se você não estiver satisfeito com o poupa.ai por qualquer motivo, basta nos avisar em até 7 dias após a assinatura e devolveremos 100% do seu dinheiro. Sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;