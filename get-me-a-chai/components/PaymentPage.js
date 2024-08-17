/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/inline-script-id */
"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import autoprefixer from 'autoprefixer'
import { useSearchParams } from 'next/navigation'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation";


const PaymentPage = ({ username }) => {
    // const {data:session} = useSession()
    const [paymentform, setPaymentform] = useState({name:"",message:"",amount:""})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router=useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true"){
            toast('🦄Thanks for your donation', {
                position: "top-right",
                autoClose: 5000,
                hideProcessBar: false,
                clockOnClick: true,
                pauseOnHover: true,
                draggable: true,
                process: undefined,
                theme: "light",
                transition: Bounce,
            });
    }
    router.push(`/${username}`)
      
},[])

const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
}
const getData = async () => {
    let u = await fetchuser(username)
    setcurrentUser(u)
    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
    
}

const pay = async (amount) => {
    //Get the order Id
    let a = await initiate(amount, username, paymentform)
    let orderId = a.id
    var options = {
        "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
        "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Get Me A Chai", //your business name
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": "Gaurav Kumar", //your customer's name
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    }
    var rzp1 = new Razorpay(options);
    rzp1.open();
}


return (
    <>
        <ToastContainer
            position="top-right"
            autolose={5000}
            hideProcessBar={false}
            newestOnTop={false}
            clockOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />
        <ToastContainer />


        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

        {/* https://w0.peakpx.com/wallpaper/305/529/HD-wallpaper-cup-coffee-books-pen-laptop.jpg 
            https://media.glamour.com/photos/580e1fc08bd9950546d001f6/master/pass/giphy%20(11).gif */}

        <div className='cover w-full relative'>
            <img className='object-cover w-full h-48 md:h-[440px]  ' src={currentUser.coverpic} alt="" />
            <div className='absolute -bottom-20 right-[38%] md:right-[46%] border-black border-2 overflow-hidden rounded-full size-36 border-opacity-1 '>
                <img className='rounded-full object-cover size-36' width={150} height={150} src={currentUser.profilepic} alt="" />
            </div>
        </div>
        <div className="info flex flex-col   justify-center items-center my-24 mb-32  gap-2">
            <div className='font-bold text-lg'>
                @{username}
            </div>
            <div className='text-slate-400'>Let's help {username} get a chai! </div>
            <div className='text-slate-400'> {payments.length} Payments . {currentUser.name} ₹{payments.reduce((a,b)=> a+b.amount,0)} raised</div>

            <div className="payment  gap-3 w-[80%] mt-11 flex flex-col md:flex-row ">
                <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                    {/* Show list of all the supporters as a leaderboard */}
                    <h2 className='text-2xl font-bold my-5'>Supporters</h2>
                    <ul className='mx-5 text-lg'>

                        {payments.length == 0 && <li>No payments yet</li>}
                        {payments.map((p, i) => {
                            return <li key={i} className='my-4 flex gap-2 items-center'>
                                <img width={40} src="avatar.gif" alt="user avatar" />
                                <span>
                                    {p.name} donated <span className='font-bold'>₹{p.amount}</span>  with a message "{p.message}"
                                </span>
                            </li>
                        })}

                    </ul>
                </div>
                <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                    <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                    <div className='flex gap-2 flex-col'>
                        {/* Input for name and message */}
                        <div>

                            <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                        </div>
                        <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />

                        <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />

                        <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className=" text-white justify-center items-center bg-gradient-to-br from-[black] flex  to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-400 dark:focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 text-center me-1 mb-2 disabled:bg-slate-600 disabled:from-white" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length<1}> <svg aria-hidden="true" className="items-center justify-center w-10 h-3 me-2 -ms-1" viewBox="0 0 660 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996" fill="#0E4595" /><path d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718" fill="#F2AE14  " /></svg>
                            Pay with Visa</button>
                    </div>
                    {/* onClick={()=>pay(paymentform.amount)} */}
                    <div className='flex gap-2 mt-5 flex-col md:flex-row'>
                        <button className='bg-slate-800 p-3 rounded-lg' onClick={() => { pay(1000) }}>Pay ₹10</button>
                        <button className='bg-slate-800 p-3 rounded-lg' onClick={() => { pay(2000) }}>Pay ₹20</button>
                        <button className='bg-slate-800 p-3 rounded-lg' onClick={() => { pay(3000) }}>Pay ₹30</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default PaymentPage