interface ICreateDeliveryProps {
  submit: (e: any) => void
}

const CreateDelivery: React.FC<ICreateDeliveryProps> = ({ submit }) => {
  return (
    <form
      className="flex flex-col items-center py-7 px-5 gap-3 rounded bg-white dark:bg-slate-100 shadow-lg"
      onSubmit={submit}
    >
      <h1 className="text-2xl font-bold mb-2">Create Delivery</h1>
      <input
        type="number"
        name="budget"
        placeholder="Budget"
        className="w-56 p-2 shadow rounded border-2 dark:border-0 outline-none transition duration-150 focus:shadow-md"
      />
      <textarea
        name="notes"
        placeholder="Notes"
        className="w-56 h-24 p-2 shadow rounded border-2 dark:border-0 outline-none  transition duration-150 focus:shadow-md resize-none"
      />
      <button className="bg-emerald-500 text-white py-2 px-4 rounded shadow cursor-pointer transition duration-150 hover:brightness-90 hover:shadow-md active:brightness-75">
        Submit
      </button>
    </form>
  )
}

export default CreateDelivery
