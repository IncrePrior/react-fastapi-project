interface IBackHomeProps {
  reload: () => void
}

const BackHome: React.FC<IBackHomeProps> = ({ reload }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-5 text-center dark:text-white">Delivery Completed</h1>
      <div className="w-fit h-fit flex flex-col items-center mx-auto mb-3 py-7 px-5 gap-3 rounded bg-white dark:bg-slate-100 shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Back to home</h1>
        <button
          onClick={reload}
          className="bg-emerald-500 text-white py-2 px-4 rounded shadow cursor-pointer transition duration-150 hover:brightness-90 hover:shadow-md active:brightness-75"
        >
          Go
        </button>
      </div>
    </>
  )
}

export default BackHome
