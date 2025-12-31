import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    const res = await axios.get(`${import.meta.env.VITE_API_URL || "http://localhost:2020"}/allOrders`, { withCredentials: true });
    setAllOrders(res.data);
  };

  const executeOrder = async (id) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || "http://localhost:2020"}/executeOrder/${id}`, {}, { withCredentials: true });
      fetchOrders(); 
    } catch (err) {
      console.error(err);
    }
  };

  const cancelOrder = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL || "http://localhost:2020"}/cancelOrder/${id}`, { withCredentials: true });
      fetchOrders();
    } catch (err) {
      console.error("Error cancelling order:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-4 md:p-10 w-full h-full overflow-y-auto bg-gray-50 pb-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">Orders</h3>
        <hr className="border-gray-200 mb-6" />

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
             <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-4 text-left font-medium text-gray-500 whitespace-nowrap">Mode</th>
                <th className="p-4 text-left font-medium text-gray-500 whitespace-nowrap">Product</th>
                <th className="p-4 text-center font-medium text-gray-500 whitespace-nowrap">Qty.</th>
                <th className="p-4 text-right font-medium text-gray-500 whitespace-nowrap">Price</th>
                <th className="p-4 text-right font-medium text-gray-500 whitespace-nowrap">Total Price</th>
                <th className="p-4 text-right font-medium text-gray-500 whitespace-nowrap">Status</th>
                <th className="p-4 text-right font-medium text-gray-500 whitespace-nowrap">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {allOrders.map((stock) => (
                <tr key={stock._id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        stock.mode === "BUY"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {stock.mode}
                    </span>
                  </td>

                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">{stock.name}</td>

                  <td className="p-4 text-center whitespace-nowrap">0 / {stock.qty}</td>

                  <td className="p-4 text-right whitespace-nowrap">{stock.price}</td>

                  <td className="p-4 text-right whitespace-nowrap">{stock.total}</td>

                  <td className="p-4 text-right whitespace-nowrap">
                    <span className="text-yellow-600 font-medium px-2 py-1 bg-yellow-50 rounded">OPEN</span>
                  </td>

                  <td className="p-4 text-right whitespace-nowrap">
                    <button
                      className="px-3 cursor-pointer py-1 bg-green-500 hover:bg-green-600 text-white rounded text-xs font-medium transition"
                      onClick={() => executeOrder(stock._id)}
                    >
                      Execute
                    </button>
                    <button
                      className="px-3 cursor-pointer py-1 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition ml-2"
                      onClick={() => cancelOrder(stock._id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
              {allOrders.length === 0 && (
                 <tr>
                    <td colSpan="7" className="p-8 text-center text-gray-500">No orders found.</td>
                 </tr>
              )}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
