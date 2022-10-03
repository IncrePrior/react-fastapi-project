import { useEffect, useState } from 'react'
import BackHome from './BackHome'

interface IDeliveryProps {
  status: string
  id: string
}

const Delivery: React.FC<IDeliveryProps> = (props) => {
  const [state, setState] = useState(props)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    ;(async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/deliveries/${props.id}/status`
      )
      const data = await response.json()
      setState(data)
    })()
  }, [refresh])

  const reloadPage = () => {
    document.location.reload()
  }

  const handleSubmit = async (e: any, type: string) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const data = Object.fromEntries(form.entries())
    const response = await fetch('http://127.0.0.1:8000/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type,
        data,
        delivery_id: props.id,
      }),
    })

    if (!response.ok) {
      const { detail } = await response.json()
      alert(detail)
      return
    }

    setRefresh(!refresh)
  }

  return (
    <div className="w-screen p-10">
      {state.status === 'completed' && (
        <BackHome reload={reloadPage} />
      )}
      <h1 className="text-3xl font-bold dark:text-white mb-10 text-center">
        Delivery {state.id}
      </h1>
      <div className="h-4 flex items-center justify-between mx-auto rounded-sm bg-slate-50 mb-5">
        {state.status !== 'ready' ? (
          <div
            className={
              state.status === 'active'
                ? 'h-4 bg-green-600 progress-bar-striped w-1/2'
                : 'h-4 bg-green-600 w-1/2'
            }
          ></div>
        ) : (
          ''
        )}
        {state.status === 'collected' || state.status === 'completed' ? (
          <div
            className={
              state.status === 'collected'
                ? 'h-4 bg-green-600 progress-bar-striped w-1/2'
                : 'h-4 bg-green-600 w-1/2'
            }
          ></div>
        ) : (
          ''
        )}
      </div>
      <div className="grid grid-cols-4 gap-5 mb-10">
        {/* Start Delivery Event */}
        <form
          onSubmit={(e) => handleSubmit(e, 'START_DELIVERY')}
          className="h-fit flex flex-col items-center py-7 px-5 gap-3 rounded bg-white dark:bg-slate-100 shadow-lg"
        >
          <h1 className="text-2xl font-bold mb-2">Start Delivery</h1>
          <button className="bg-emerald-500 text-white py-2 px-4 rounded shadow cursor-pointer transition duration-150 hover:brightness-90 hover:shadow-md active:brightness-75">
            Submit
          </button>
        </form>

        {/* Increase Budget Event */}
        <form
          onSubmit={(e) => handleSubmit(e, 'INCREASE_BUDGET')}
          className="h-fit flex flex-col items-center py-7 px-5 gap-3 rounded bg-white dark:bg-slate-100 shadow-lg"
        >
          <h1 className="text-2xl font-bold mb-2">Increase Budget</h1>
          <input
            type="number"
            name="budget"
            placeholder="Budget"
            className="w-56 p-2 shadow rounded border-2 dark:border-0 outline-none transition duration-150 focus:shadow-md"
          />
          <button className="bg-emerald-500 text-white py-2 px-4 rounded shadow cursor-pointer transition duration-150 hover:brightness-90 hover:shadow-md active:brightness-75">
            Submit
          </button>
        </form>

        {/* Pickup Products Event */}
        <form
          onSubmit={(e) => handleSubmit(e, 'PICKUP_PRODUCTS')}
          className="h-fit flex flex-col items-center py-7 px-5 gap-3 rounded bg-white dark:bg-slate-100 shadow-lg"
        >
          <h1 className="text-2xl font-bold mb-2">Pickup Products</h1>
          <input
            type="number"
            name="purchase_price"
            placeholder="Purchase Price"
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

        {/* Deliver Products Event */}
        <form
          onSubmit={(e) => handleSubmit(e, 'DELIVER_PRODUCTS')}
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
      </div>
      <code className="text-red-600">{JSON.stringify(state)}</code>
    </div>
  )
}

export default Delivery
