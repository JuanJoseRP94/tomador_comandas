import React, { useState } from 'react';

type DescProps = {
  setDes: (discount: number) => void;
  setCustomerType: (type: string) => void;
};

export default function Desc({ setDes, setCustomerType }: DescProps) {
  const [code, setCode] = useState<string>('');
  const [client, setClient] = useState<{ rank: string; availableDiscounts: number[] } | null>(null);

  const clientData = [
    { id: "1234", rank: "oro", offer: true },
    { id: "5678", rank: "plata", offer: true },
    { id: "9101", rank: "bronce", offer: true }
  ];

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    
    const foundClient = clientData.find(client => client.id === e.target.value);
    
    if (foundClient) {
      const discounts = {
        oro: [0.10, 0.20, 0.50] as const,
        plata: [0.10, 0.20] as const,
        bronce: [0.10] as const
      };
      
      if (foundClient.rank in discounts) {
        setClient({
          rank: foundClient.rank,
          availableDiscounts: [...discounts[foundClient.rank as keyof typeof discounts]]
        });
        setCustomerType(foundClient.rank);
      }
    } else {
      setClient(null);
      setCustomerType('');
    }
  };
  
  

  const handleDiscountChange = (discount: number) => {
    setDes(discount);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xl pb-3 font-bold">Ingresar código de cliente:</label>
        <input
          type="text"
          value={code}
          onChange={handleCodeChange}
          className="border p-2 w-full"
        />
      </div>
      
      {client && (
        <div>
          <h3 className="text-lg font-bold">Cliente {client.rank.charAt(0).toUpperCase() + client.rank.slice(1)}</h3>
          <div className=" flex space-x-5">
            {client.availableDiscounts.map((discount, index) => (
              <button
                key={index}
                onClick={() => handleDiscountChange(discount)}
                className="bg-blue-500 text-white px-2 py-2 rounded"
              >
                {discount * 100}% Descuento
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => handleDiscountChange(0)}
        className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
      >
        Eliminar descuento
      </button>
    </div>
  );
}


