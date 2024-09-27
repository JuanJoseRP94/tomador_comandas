import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import Desc from "./components/Desc";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import { useState } from "react";

function App() {
  const { order, addItem, removeItem, incrementItem, decrementItem, des, setDes } = useOrder();
  const [customerType, setCustomerType] = useState('');

  return (
    <>
      <header className="bg-lime-600 py-5">
        <h1 className="text-center text-4xl font-bold">Cálculo de cuenta y comandas</h1>
      </header>

      <main className="max-w-7xl mx-auto py-14 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-7">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents
            order={order}
            removeItem={removeItem}
            incrementItem={incrementItem}
            decrementItem={decrementItem}
          />
          <Desc setDes={setDes} setCustomerType={setCustomerType} />
          <OrderTotals order={order} des={des} customerType={customerType} />
        </div>
      </main>
    </>
  );
}

export default App;


