import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem['id']) => void;
  incrementItem: (id: MenuItem['id']) => void;
  decrementItem: (id: MenuItem['id']) => void;
};

export default function OrderContents({
  order,
  removeItem,
  incrementItem,
  decrementItem
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Cuenta</h2>
      <div className="space-y-3 mt-7">
        {order.length === 0 ? (
          <p className="text-center">La cuenta está vacía</p>
        ) : (
          order.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-t border-gray-500 py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-lg font-bold">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded"
                  onClick={() => incrementItem(item.id)}
                >
                  +
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => decrementItem(item.id)}
                >
                  -
                </button>
                <button
                  className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                  onClick={() => removeItem(item.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}



