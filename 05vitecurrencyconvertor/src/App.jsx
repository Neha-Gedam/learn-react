import { useState } from 'react'


import bgImg from './assets/newback.jpg'

import useCurrencyInfo from './hooks/UseCurrencyInfo'
import { InputBox } from './componants/index.js'


import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

const options = Object.keys(currencyInfo || {})


 
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage : `url(${bgImg})`}}>

      <div className='w-full mb-1'>
        <div className='w-full max-w-md mx-auto border border-grey-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>

            <div className='w-full mb-1'>
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
                className='w-full mb-1'
              />
            </div>

            <div className='w-full mb-1'>
              <button className='absolute left-1/2 -translate-x-1/2 -tansalate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
            </div>

            <div className='w-full mb-1'>
              <InputBox
                className='w-full mb-1'
                label="to"
                amount={convertedAmount}
                amountDisabled
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}                
                selectedCurrency={to}
              />
            </div>

            <button type='submit' className='w-full rounded-lg bg-blue-600 text-white px-2 py-0.5'>Convert {from} to {to}</button>
        
          </form>
        </div>
      </div>

    </div>
  )
}

export default App

