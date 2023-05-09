import Customer from "../../../../models/Customer";
import connectDB from "../../../../utils/connectDB";

export default async function handler(req, res) {
    try {
        await connectDB()
        console.log('yes')
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: 'failed', message: "Error in connecting to db" })
    }
    if (req.method === "GET") {
        const id = req.query.customerId;
        try {
            const customer = await Customer.findOne({_id:id})
            res.status(200).json({status:"success" ,message:"data created", data:customer})
        } catch (error) {
            console.log(error)
            res.status(500).json({ status: 'failed', message: "Error in storing data in  db" })
        }
    }
}