import { useState } from "react";
import Display from "../components/display/Display";
import { keyPad } from "../data/keyPad";
import { numberToWords } from "../utils/numberToWords";

const Calculator = () => {
  const [display, setDisplay] = useState("")
  const [isConvertDisable, setDisableConverter] = useState(true)
  const [isKeyPadDisable, setDisableKeyPad] = useState(false) 

  function updateDisplay (val) {
    const newVal = val === "x" ? "*" : val

    if (display === "") {
      /^[+x\/-]$/.test(val) ? ' ' : setDisplay(val)
      
    } else if (display === "0") {
      /^[+x\/-]$/.test(val) ? setDisplay(display + newVal) : setDisplay(val)

    } else {
      setDisplay(display + newVal)

    }
  }

  function calculate () {
    if (display !== "" && ! /[+x\/-]$/.test(display)) {
      setDisableConverter(false)
      const result = eval(display)
      setDisplay(result)
    }
  }

  function convert () {
    if (! /^[+x\/-]$/.test(display)) {
      setDisableConverter(true)
      setDisableKeyPad(true)
      setDisplay(numberToWords(display))
    }
  }

  function handleKeyPad (item) {
    if (item === "C") {
      setDisplay("")
      setDisableKeyPad(false)
      setDisableConverter(true)
    } else if (item === "=") {
      calculate()
    } else {
      updateDisplay(item)
    }
  }


  return (
    <div className='w-full max-w-lg lg:max-w-xl m-auto rounded-lg border border-gray-300 shadow-sm p-2 lg:p-6'>
      <Display content={display}/>

      <div className="grid grid-cols-4 gap-2 pt-4">
        {
          keyPad.flat().map((item, i) => (
            <button
              key={i}
              disabled={item !== "C" ? isKeyPadDisable : false}
              onClick={() => handleKeyPad(item)}
              className={`bg-[#fa980b] py-5 px-4 text-xl lg:text-2xl text-white font-semibold rounded-md hover:bg-yellow-600`}
            >
              {item}
            </button>
          ))
        }
      </div>

      <div className="grid grid-cols-1 pt-4">
        <button
          disabled={isConvertDisable}
          onClick={() => convert()}
          className={`bg-gray-600 py-5 px-4 text-xl lg:text-2xl text-white font-semibold rounded-md hover:bg-gray-700`}
        >
          To Text
        </button>
      </div>      
    </div>
  )
}

export default Calculator;