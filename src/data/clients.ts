export type Client = {
    id: number;
    name: string;
    type: 'bronce' | 'plata' | 'oro';
    availableDiscounts: number[];
  };
  
  export const clients: Client[] = [
    { id: 1, name: "Cliente Bronce", type: "bronce", availableDiscounts: [0.10] },
    { id: 2, name: "Cliente Plata", type: "plata", availableDiscounts: [0.10, 0.20] },
    { id: 3, name: "Cliente Oro", type: "oro", availableDiscounts: [0.10, 0.20, 0.50] },
  ];
  