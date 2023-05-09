import React, { useReducer, useState } from 'react'
import Form from '../module/Form'
import { useRouter } from 'next/router'

const CustomerEditPage = ({ data, id }) => {
  console.log(data)
  const [form, setForm] = useState({
    lastName: data.lastName,
    email: data.email,
    name: data.name,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || "",
    date: data.date || "",


  })
  const router = useRouter()
  const cancelHndler = () => {
    router.push("/");

  }
  const saveHndler = async () => {
    const res = await fetch(`/api/edit/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ data:form }),
        headers: { "Content-Type": "application/json" }

      })
    const data = await res.json()
    

    if (data.status === "success") {
      router.push("/")
    }
  }
  console.log(form)
  return (
    <div className="customer-page">
      <h4>Edit Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className='customer-page__buttons'>
        <button className='first' onClick={cancelHndler}>Cancel</button>
        <button className='second' onClick={() => saveHndler(id)}>Edit</button>
      </div>
    </div>
  )
}

export default CustomerEditPage