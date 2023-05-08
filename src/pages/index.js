import HomePage from "@/Components/template/HomePage";
import Customer from "../../models/Customer";
import connectDB from "../../utils/connectDB"

export default function Home({ customer }) {
  return (
    <>
      <HomePage customer={customer } />
    </>
  )
}
export  async function getServerSideProps() {
  try {
    await connectDB();
    const customer = await Customer.find()
    return {
      props: {
        customer:JSON.parse(JSON.stringify(customer))
      }
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }  
}
