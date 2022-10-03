import { useEffect, useState } from 'react'
import BackHome from './BackHome'
import DeliverProducts from './DeliverProducts'
import IncreaseBudget from './IncreaseBudget'
import PickupProducts from './PickupProducts'
import StartDelivery from './StartDelivery'

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
      {state.status === 'completed' && <BackHome reload={reloadPage} />}
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
        <StartDelivery submit={handleSubmit} />

        {/* Increase Budget Event */}
        <IncreaseBudget submit={handleSubmit} />

        {/* Pickup Products Event */}
        <PickupProducts submit={handleSubmit} />

        {/* Deliver Products Event */}
        <DeliverProducts submit={handleSubmit} />
      </div>
      <code className="text-red-600">{JSON.stringify(state)}</code>
    </div>
  )
}

export default Delivery
