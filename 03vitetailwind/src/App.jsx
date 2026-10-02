import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('olive')

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-300' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl border-t-white'>
            <button className='bg-white outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'red'}} onClick={() => setColor('red')}>Red</button>

            <button className='bg-white outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'purple'}} onClick={() => setColor('purple')}>Purple</button>
          </div>
        </div>
    </div>
  )
}




export default App
