import { useState } from 'react'

const Delivery = () => {
  const [state, setState] = useState({
    id: '01GE7DKW4TBNQRRSS4SF93C4Y0',
    budget: 50,
    notes: 'Pick 2 burguers',
    status: 'readay',
  })

  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-white">
        Delivery {state.id}
      </h1>
      {state.status != 'ready' ? <div className='h-4 bg-green-600 progress rounded-sm'></div> : ''}
    </div>
  )
}

export default Delivery
