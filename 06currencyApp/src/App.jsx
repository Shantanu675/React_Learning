import { useState } from 'react'
import {Inputbox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';
// import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  
  const options = Object.keys(currencyInfo)
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  //I,m Stuck here so I take help from chatGpt
  const convert = () => {
    // If the conversion rate is found for the 'from' currency, use it.
    let conversionRate = currencyInfo[to];

    // If no direct conversion rate exists (for reverse conversion), invert the rate.
    if (!conversionRate) {
      conversionRate = 1 / currencyInfo[from];  // Reverse the conversion
    }

    // Apply the conversion rate to calculate the converted amount
    setConvertedAmount(amount * conversionRate)
  }

  // Old mothot of convert
//   const convert = () => {
//     setConvertedAmount(amount * parseInt(currencyInfo[to]))
//   }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.mos.cms.futurecdn.net/HtPHtdAzAfNAUcrmaJ2yqW-815-80.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <Inputbox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) =>
                              setFrom(currency)
                            }
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                        swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Inputbox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) =>
                              setTo(currency)
                            }
                            selectCurrency={to}
                            amountDisabled   
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="font-bold w-full bg-green-700 text-white px-4 py-3 rounded-lg"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
