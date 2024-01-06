const Display = ({content}) => {
  return(
    <div className="flex w-full h-[8vh] p-3 rounded-md border border-slate-400 items-center justify-end">
      <h2 className="text-gray-700 font-bold text-2xl">{content}</h2>
    </div>
  )
}

export default Display