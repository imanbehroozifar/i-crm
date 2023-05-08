import React from 'react'
import Card from '../module/Card'

const HomePage = ({ customer }) => {
    console.log(customer)
  return (
      <div>
          {
              customer.map(customer => (
                  <Card key={customer._id} customer={customer} />
              ))
          }
      </div>
  )
}

export default HomePage