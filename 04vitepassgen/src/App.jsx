import { useState, useCallback, useEffect, useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllowed] = useState(false)
  const [charAllow, setCharAllowed] = useState(true)
  const [password, setAllowPassword] = useState()

  const genPassword = useCallback(() => {
    let pass = ""
    let str = "ASDFGHJKLZXCVBNMQWERTYUIOPasdfghjklxcvbnmqwertyuiop"

    if(numberAllow) str += "013456789"
    if(charAllow) str += "!@#$%^&*("

    for (let i = 1; i<length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setAllowPassword(pass)
  }, [length, numberAllow, charAllow, password])


  useEffect(() => {
    genPassword()
  }, [length, numberAllow, charAllow])

  const copyPassToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
  }

  const passRef = useRef(null)

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-grey-800 text-orange-500'>
        <h1 className='bold text-center my-3 py-4 text-black'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type='text' value={password} className='outline-none w-full py-1 px-3 border-2 border-black text-gray-500'placeholder='Password' readOnly 
          ref={passRef} />


          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={() => copyPassToClipboard()}>Copy</button>

        </div>

        <div className='flex text-center gap-x-2'>
          <div className='flex item-center gap-x-1'>
              <input type='range' min={6} max={12} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} name='' id='' />
              <label htmlFor='length'>Length : {length}</label>
          </div>
        


        
          <div className='flex item-center gap-x-1'>
              <input type='checkbox' defaultChecked={numberAllow} onChange={() => setNumberAllowed((prev) => !prev)} name='' id='' />
              <label htmlFor='number'>Number</label>
          </div>
        

        
          <div className='flex item-center gap-x-1'>
              <input type='checkbox' defaultChecked={charAllow} onChange={() => setCharAllowed((prev) => !prev)} name='' id='' />
              <label htmlFor='character'>Character</label>
          </div>
        </div>
        
    </div>
  )
}

export default App
