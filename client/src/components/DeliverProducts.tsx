interface IDeliverProducts {
  submit: (e: any, type: string) => void
}

const DeliverProducts: React.FC<IDeliverProducts> = ({ submit }) => {
  return (
    <form
      onSubmit={(e) => submit(e, 'DELIVER_PRODUCTS')}
      className="h-fit flex flex-col items-center py-7 px-5 gap-3 rounded bg-white dark:bg-slate-100 shadow-lg"
    >
      <h1 className="text-2xl font-bold mb-2">Pickup Products</h1>
      <input
        type="number"
        name="sell_price"
        placeholder="Sell Price"
        className="w-56 p-2 shadow rounded border-2 dark:border-0 outline-none transition duration-150 focus:shadow-md"
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        className="w-56 p-2 shadow rounded border-2 dark:border-0 outline-none transition duration-150 focus:shadow-md"
      />
      <button className="bg-emerald-500 text-white py-2 px-4 rounded shadow cursor-pointer transition duration-150 hover:brightness-90 hover:shadow-md active:brightness-75">
        Submit
      </button>
    </form>
  )
}

export default DeliverProducts
