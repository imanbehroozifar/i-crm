import Customer from "../../../../models/Customer"
import connectDB from "../../../../utils/connectDB"
export default async function handler(req, res) {
    try {
        await connectDB()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: 'failed', message: "Error in connecting to db" })
    }
    if (req.method === 'DELETE') {
        const id = req.query.customerId
        console.log(id)
        try {
            await Customer.deleteOne({_id: id })
            res.status(200).json({ status: "success", message: "data deleted" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ status: "failed", message: "error in deleting data from database" })

        }
    }
}