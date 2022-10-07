import { useState } from 'react'
import CreateDelivery from './components/CreateDelivery'
import Delivery from './components/Delivery'

const App = () => {
  const [id, setId] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const data = Object.fromEntries(form.entries())
    const response = await fetch(
      'https://event-driven-server.herokuapp.com/deliveries/create',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'CREATE_DELIVERY',
          data,
        }),
      }
    )
    const { id } = await response.json()
    setId(id)
  }

  return (
    <div className="h-screen w-screen grid items-center justify-center bg-slate-100 dark:bg-slate-800">
      {id === '' ? (
        <CreateDelivery submit={handleSubmit} />
      ) : (
        <Delivery id={id} status={''} />
      )}
    </div>
  )
}

export default App
