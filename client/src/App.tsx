import React, { useState } from 'react'
import CreateDelivery from './components/CreateDelivery'
import Delivery from './components/Delivery'

const App = () => {
  const [id, setId] = useState('01GE7DKW4TBNQRRSS4SF93C4Y0')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const data = Object.fromEntries(form.entries())
    const response = await fetch('http://127.0.0.1:8000/deliveries/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'CREATE_DELIVERY',
        data,
      }),
    })
    const { id } = await response.json()
    setId(id)
  }

  return (
    <div className="h-screen w-screen grid items-center justify-center bg-slate-100 dark:bg-slate-800">
      {id === '' ? <CreateDelivery submit={handleSubmit} /> : <Delivery />}
    </div>
  )
}

export default App
