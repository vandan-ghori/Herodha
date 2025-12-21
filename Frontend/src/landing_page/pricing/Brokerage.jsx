import React from 'react'

const Brokerage = () => {
  return (
    <div className="overflow-x-auto mt-35">
      <h1 className='text-3xl mb-10'>Charges for Account Opening</h1>
      <table className="w-full border text-left">
        <thead className="border bg-gray-100">
          <tr>
            <th className="p-3 border">Type of Account</th>
            <th className="p-3 border">Charges</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-3 border">Online Account</td>
            <td className="p-3 border">Free</td>
          </tr>

          <tr>
            <td className="p-3 border">Offline Account</td>
            <td className="p-3 border">Free</td>
          </tr>

          <tr>
            <td className="p-3 border">NRI Account</td>
            <td className="p-3 border">₹500</td>
          </tr>

          <tr>
            <td className="p-3 border">Partnership, LLP, HUF, or Corporate Account</td>
            <td className="p-3 border">₹500</td>
          </tr>
        </tbody>
      </table>
      <br /><br /><br /><br />
      <h1 className='text-3xl mb-10'>Demat AMC</h1>
      <table className="w-full border text-left">
        <thead className="border bg-gray-100">
          <tr>
            <th className="p-3 border">Value of Holdings</th>
            <th className="p-3 border">AMC</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-3 border">Up to ₹4 lakh</td>
            <td className="p-3 border">Free</td>
          </tr>

          <tr>
            <td className="p-3 border">₹4 lakh - ₹10 lakh</td>
            <td className="p-3 border">₹100 per year, charged quaterly*</td>
          </tr>

          <tr>
            <td className="p-3 border">Above 10 lakh</td>
            <td className="p-3 border">₹300 per year, charged quaterly</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Brokerage
