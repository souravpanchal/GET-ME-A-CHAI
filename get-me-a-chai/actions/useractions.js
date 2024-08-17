"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"
import Username from "@/app/[username]/page"
import { connect } from "mongoose"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    let user = await User.findOne({username:to_username})
    const secret = user.razorpaysecret
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })


    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x = await instance.orders.create(options)
    //pending object pending payment
    await Payment.create({ oid: x.id, amount:(amount/100), to_user: to_username, name: paymentform.name, message: paymentform.message })
    return x
}

export const fetchuser = async (username) => {
    await connectDB()
   
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await connectDB()
    //find all payments sorted by decreasing order of amount
    
    let p = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).limit(5).lean()
    return p
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)

    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }
        await User.updateOne({ email: ndata.email }, ndata)
        //Now updated the all username in the payments table
        await Payment.updateMany({to_user:oldusername},{to_user:ndata.username})
    }
    else{
        
        await User.updateOne({ email: ndata.email }, ndata)
    }
}