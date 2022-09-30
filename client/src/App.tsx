import React, { useState } from 'react'
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
      {id === '' ? (
        <form
          className="flex flex-col items-center py-7 px-5 gap-3 rounded bg-white dark:bg-slate-100 shadow-lg"
          onSubmit={handleSubmit}
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
      ) : (
        <Delivery />
      )}
    </div>
  )
}

export default App
