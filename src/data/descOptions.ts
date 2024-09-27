export type DiscountOption = {
    id: string;
    value: number;
    label: string;
  };
  
  export const descOptions: DiscountOption[] = [
    { id: "des-10", value: 0.10, label: "Bronce - 10%" },
    { id: "des-20", value: 0.20, label: "Plata - 20%" },
    { id: "des-50", value: 0.50, label: "Oro - 50%" }
  ];
  