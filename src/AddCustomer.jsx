import React, { useEffect, useRef, useState } from 'react'
import { ViewCustomer } from './ViewCustoemr'
import { useDispatch } from 'react-redux'
import { addCustomer as addCustomerAction } from './Slice/Slice'

const AddCustomer = () => {
    const [input,setInput] = useState('')
    const [customer,setCustomer] = useState([])
    const focusInput = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        focusInput.current.focus()
    })
    const addCustomer = () => {
        if(input){
            dispatch(addCustomerAction(input))
            // setCustomer(pre => [...pre,input])
            console.log(customer);
            setInput('')
        }
    }

  return (
    <div>
        <input type="text" value={input} ref={focusInput} onChange={e=>setInput(e.target.value)} />
        <button onClick={addCustomer}>Add</button>
        {/* <ViewCustomer customer={customer}/> */}
    </div>
  )
}

export default AddCustomer