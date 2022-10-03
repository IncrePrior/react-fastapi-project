import { useState } from 'react'

const Delivery = () => {
  const [state, setState] = useState({
    id: '01GE7DKW4TBNQRRSS4SF93C4Y0',
    budget: 50,
    notes: 'Pick 2 burguers',
    status: 'completed',
  })

  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-white">
        Delivery {state.id}
      </h1>
      <div className="h-4 flex items-center mx-auto rounded-sm bg-slate-50">
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
    </div>
  )
}

export default Delivery
