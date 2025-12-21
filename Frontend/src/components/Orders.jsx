import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.get(`http://localhost:2020/allOrders/${user._id}`);
    setAllOrders(res.data);
  };

  const executeOrder = async (id) => {
    try {
      await axios.post(`http://localhost:2020/executeOrder/${id}`);
      fetchOrders(); 
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div style={{ scrollbarWidth: "none" }} className="overflow-y-scroll fixed h-full">
      <div className="w-[60vw] m-20">
        <h3 className="text-5xl p-4 font-semibold mb-3">Orders</h3>
        <hr />

        <div className="border border-gray-300 m-10 rounded-md overflow-hidden bg-white">
          <table className="w-full p-3 text-[13px]">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-3 text-left">Mode</th>
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-center">Qty.</th>
                <th className="p-3 text-right">Price</th>
                <th className="p-3 text-right">Total Price</th>
                <th className="p-3 text-right">Status</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map((stock) => (
                <tr key={stock._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-[11px] font-medium ${
                        stock.mode === "BUY"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {stock.mode}
                    </span>
                  </td>

                  <td className="p-3 font-medium">{stock.name}</td>

                  <td className="p-3 text-center">0 / {stock.qty}</td>

                  <td className="p-3 text-right">{stock.price}</td>

                  <td className="p-3 text-right">{stock.total}</td>

                  <td className="p-3 text-right">
                    <span className="text-yellow-600 font-medium">OPEN</span>
                  </td>

                  <td className="p-3 text-right">
                    <button
                      className="btn bg-green-500 rounded-xl btn-green cursor-pointer"
                      onClick={() => executeOrder(stock._id)}
                    >
                      Execute
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
