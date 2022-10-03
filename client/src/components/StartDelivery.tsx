interface IStartDelivery {
  submit: (e: any, type: string) => void
}

const StartDelivery: React.FC<IStartDelivery> = ({ submit }) => {
  return (
    <form
      onSubmit={(e) => submit(e, 'START_DELIVERY')}
      className="h-fit flex flex-col items-center py-7 px-5 gap-3 rounded bg-white dark:bg-slate-100 shadow-lg"
    >
      <h1 className="text-2xl font-bold mb-2">Start Delivery</h1>
      <button className="bg-emerald-500 text-white py-2 px-4 rounded shadow cursor-pointer transition duration-150 hover:brightness-90 hover:shadow-md active:brightness-75">
        Submit
      </button>
    </form>
  )
}

export default StartDelivery
