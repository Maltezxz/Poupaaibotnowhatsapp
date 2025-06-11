import { products } from '../stripe-config';

export async function createCheckoutSession(priceId: string, mode: 'payment' | 'subscription', accessToken: string) {
  console.log('Criando sessão de checkout...');
  console.log('Price ID:', priceId);
  console.log('Mode:', mode);
  console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
  
  const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      price_id: priceId,
      mode,
      success_url: `${window.location.origin}/success`,
      cancel_url: `${window.location.origin}/#pricing`,
    }),
  });

  console.log('Response status:', response.status);
  console.log('Response headers:', Object.fromEntries(response.headers.entries()));

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Response error text:', errorText);
    
    try {
      const errorJson = JSON.parse(errorText);
      throw new Error(errorJson.error || `HTTP ${response.status}: ${response.statusText}`);
    } catch (parseError) {
      throw new Error(`HTTP ${response.status}: ${errorText || response.statusText}`);
    }
  }

  const responseData = await response.json();
  console.log('Response data:', responseData);
  
  return responseData.url;
}

export function getProductByPriceId(priceId: string) {
  return Object.values(products).find((product) => product.priceId === priceId);
}