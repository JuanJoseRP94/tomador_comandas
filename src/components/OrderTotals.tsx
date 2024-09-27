import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  des: number;
  customerType: string; // Añadimos el tipo de cliente
};

export default function OrderTotals({ order, des }: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const desAmount = useMemo(() => subtotalAmount * des, [subtotalAmount, des]);
  const totalAmount = useMemo(() => subtotalAmount - desAmount, [subtotalAmount, desAmount]);

  return (
    <>
      <div className="space-y-3">
        

        <h2 className="font-black text-2xl">Precio:</h2>
        <p>
          Total:
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>

        <p>
          Descuento:
          <span className="font-bold">{formatCurrency(desAmount)}</span>
        </p>

        <p>
          Total a pagar:
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
    </>
  );
}

