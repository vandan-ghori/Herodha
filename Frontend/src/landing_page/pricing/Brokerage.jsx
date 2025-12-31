import React from 'react'

const Brokerage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 overflow-hidden">
      
      <section className="mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <h1 className='text-2xl md:text-3xl font-semibold mb-8 text-gray-800 border-l-4 border-[#387ed1] pl-4'>
          Charges for Account Opening
        </h1>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-gray-50 text-gray-700 uppercase text-xs font-bold tracking-wider">
                <th className="p-4 border-b">Type of Account</th>
                <th className="p-4 border-b">Charges</th>
              </tr>
            </thead>

            <tbody className="text-gray-600">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b">Online Account</td>
                <td className="p-4 border-b font-medium text-green-600">Free</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b">Offline Account</td>
                <td className="p-4 border-b font-medium text-green-600">Free</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b">NRI Account</td>
                <td className="p-4 border-b font-semibold">₹500</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b">Partnership, LLP, HUF, or Corporate Account</td>
                <td className="p-4 border-b font-semibold">₹500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
        <h1 className='text-2xl md:text-3xl font-semibold mb-8 text-gray-800 border-l-4 border-[#387ed1] pl-4'>
          Demat AMC
        </h1>
        
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-gray-50 text-gray-700 uppercase text-xs font-bold tracking-wider">
                <th className="p-4 border-b">Value of Holdings</th>
                <th className="p-4 border-b">AMC</th>
              </tr>
            </thead>

            <tbody className="text-gray-600">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b">Up to ₹4 lakh</td>
                <td className="p-4 border-b font-medium text-green-600">Free</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b">₹4 lakh - ₹10 lakh</td>
                <td className="p-4 border-b">₹100 per year, <span className="text-xs text-gray-400">charged quarterly*</span></td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b">Above 10 lakh</td>
                <td className="p-4 border-b font-medium">₹300 per year, <span className="text-xs text-gray-400">charged quarterly</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-gray-400 italic">*Taxes extra as applicable</p>
      </section>
    </div>
  )
}

export default Brokerage