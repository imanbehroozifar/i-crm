import Customer from "../../../../models/Customer"
import connectDB from "../../../../utils/connectDB"

export default async function handler(req, res) {
    try {
        await connectDB()
        console.log('yes')
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: 'failed', message: "Error in connecting to db" })
    }
    if (req.method === 'PATCH') {
        const id = req.query.customerId
        console.log(id)
        const data = req.body.data
        console.log(data)
        try {
            const customer = await Customer.findById({ _id: id })
            customer.name = data.name
            customer.lastName = data.lastName
            customer.email = data.email
            customer.phone = data.phone
            customer.address = data.address
            customer.postalCode = data.postalCode
            customer.date = data.date
            customer.products = data.products
            customer.updatedAT = () => Date().now();
            customer.save()
            res.status(200).json({ status: "success", message: "data updated", data: customer })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ status: "failed", message: "error in deleting data from database" })

        }
    }
}