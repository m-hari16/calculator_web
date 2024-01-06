import Display from "../components/display/Display";
import { keyPad } from "../data/keyPad";

const Calculator = () => {
  return (
    <div className='w-full max-w-lg lg:max-w-xl m-auto rounded-lg border border-gray-300 shadow-sm p-2 lg:p-6'>
      <Display content={90909}/>

      <div className="grid grid-cols-4 gap-2 pt-4">
        {
          keyPad.flat().map((item, i) => (
            <button
              key={i}
              className={`bg-[#fa980b] py-5 px-4 text-xl lg:text-2xl text-white font-semibold rounded-md hover:bg-yellow-600`}
            >
              {item}
            </button>
          ))
        }
      </div>

      <div className="grid grid-cols-1 pt-4">
        <button
          className={`bg-gray-500 py-5 px-4 text-xl lg:text-2xl text-white font-semibold rounded-md hover:bg-gray-700`}
        >
          To Text
        </button>
      </div>      
    </div>
  )
}

export default Calculator;