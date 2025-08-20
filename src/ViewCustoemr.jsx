import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer } from './Slice/Slice'

export const ViewCustomer = (props) => {
    // const {customer} = props
    const customer = useSelector((state) => state.customers)
    const dispatch = useDispatch()

    const removeCustomer = index => {
      dispatch(deleteCustomer(index))
    }
  return (
    <div>
        <h2>View Customer</h2>
        <ul style={{listStyle:'none'}} className='view'>
            {customer.map((customer,index) => <li>{customer} <button onClick={() => removeCustomer(index)}>Delete</button></li>)}
        </ul>
    </div>
  )
}
