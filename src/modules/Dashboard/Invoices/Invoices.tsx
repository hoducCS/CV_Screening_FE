export default function Invoices() {
  return (
    <>
      <div className="p-10 flex flex-col gap-5">
        <p className="text-primary font-semibold text-2xl ">Invoices</p>
        <table className=" w-full border-separate border-spacing-y-4">
          <thead className="border border-b-2 border-t-0 border-l-0 border-r-0 border-b-gray">
            <tr>
              <th>Month</th>
              <th>State</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody  className="">
            <tr>
              <td className="text-center text-gray_text">January</td>
              <td className="text-center"><span className="bg-bg_success rounded-2xl px-4 py-1 text-success">Paid</span></td>
              <td className="text-center text-gray_text"> 50$</td>
            </tr>
            <tr>
              <td className="text-center text-gray_text">January</td>
              <td className="text-center"><span className="bg-bg_success rounded-2xl px-4 py-1 text-success">Paid</span></td>
              <td className="text-center text-gray_text"> 50$</td>
            </tr>
            <tr>
              <td className="text-center text-gray_text">January</td>
              <td className="text-center"><span className="bg-bg_success rounded-2xl px-4 py-1 text-success">Paid</span></td>
              <td className="text-center text-gray_text"> 50$</td>
            </tr>
            <tr>
              <td className="text-center text-gray_text">January</td>
              <td className="text-center"><span className="bg-bg_success rounded-2xl px-4 py-1 text-success">Paid</span></td>
              <td className="text-center text-gray_text"> 50$</td>
            </tr>
            <tr>
              <td className="text-center text-gray_text">January</td>
              <td className="text-center"><span className="bg-bg_success rounded-2xl px-4 py-1 text-success">Paid</span></td>
              <td className="text-center text-gray_text"> 50$</td>
            </tr>
            <tr>
              <td className="text-center text-gray_text">January</td>
              <td className="text-center"><span className="bg-bg_success rounded-2xl px-4 py-1 text-success">Paid</span></td>
              <td className="text-center text-gray_text"> 50$</td>
            </tr>
            <tr>
              <td className="text-center text-gray_text">January</td>
              <td className="text-center"><span className="bg-bg_error rounded-2xl px-4 py-1 text-error">Past Due</span></td>
              <td className="text-center text-gray_text"> 50$</td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  );
}
