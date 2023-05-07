const { Schema, models, model } = require("mongoose");

const customerSchema = new Schema({

    name: {
        type: String,
        require: true,
        minLength: 1,
    },
    lastName: {
        type: String,
        require: true,
        minLength: 1,
    },
    email: {
        type: String,
        require: true,
        minLength: 1,
    },
    phone: String,
    address: String,
    postalCode: Number,
    date: Date,//تاریخ عضویت مشتری یا اولین خرید
    product: {
        type: Array,
        default:[],
    },
    createAt: {
        type: Date,//تاریخ ایجاد در دیتابیس
        default: () => Date.now(),
        immutable:true
    },
    updateAT: {
        type: Date,//  تاریخ ایجاد در دیتابیس ولی اگر دیتا تغییر کن بروز میشود
        default: () => Date.now(),
    }
})

const Customer = models.Customer || model("Customer", customerSchema)

export default Customer