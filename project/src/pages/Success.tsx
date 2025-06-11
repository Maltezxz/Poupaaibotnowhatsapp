import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Button from '../components/ui/Button';
import { getSubscription } from '../lib/supabase';
import { getProductByPriceId } from '../lib/stripe';

const Success = () => {
  const [productName, setProductName] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSubscriptionDetails() {
      const subscription = await getSubscription();
      if (subscription?.price_id) {
        const product = getProductByPriceId(subscription.price_id);
        if (product) {
          setProductName(product.name);
        }
      }
    }

    fetchSubscriptionDetails();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
          <Check className="text-white" size={32} />
        </div>

        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Pagamento confirmado!
        </h2>

        {productName && (
          <p className="mt-2 text-lg text-gray-600">
            Você agora tem acesso ao plano {productName}
          </p>
        )}

        <p className="text-gray-500">
          Obrigado por escolher o Poupai. Você já pode começar a usar todos os recursos.
        </p>

        <div className="mt-8">
          <Link to="/">
            <Button variant="primary" fullWidth>
              Ir para o início
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;