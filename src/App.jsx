import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddCustomer from './AddCustomer'
import { Provider } from 'react-redux'
import { Store } from './Store'
import { ViewCustomer } from './ViewCustoemr'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Add Customer</h2>

    <p>Hai Hello How are you</p>
      <h2>Welcome to Vite React Project</h2>
      <Provider store={Store}>
        <AddCustomer/>
        <ViewCustomer/>
      </Provider>
    </>
  )
}

export default App
