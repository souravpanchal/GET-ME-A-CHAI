/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { fetchuser, updateProfile } from "@/actions/useractions"
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'

const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        getData()
        if (!session) {
            router.push('/login')
        }
    }, [router, session])

    const getData = async () => {
        let u = await fetchuser(session.user.name)
        setform(u)
    }
    const handleChange = (e) => {
        setform({...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        let a = await updateProfile(e, session.user.name)
        toast('Profile updated', {
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

        <div className="container mx-auto py-5 px-6">
            <h1 className="text-center my-5 text-3xl font-bold">Welcome to your Dashboard</h1>

            <form className="max-w-2xl mx-auto" action={handleSubmit}>
                {/* name */}
                <div className="my-2">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Name</label>
                    <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name="name" id="name" className="block w-full
                p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                dark:focus:border-blue-500" />
                </div>
                {/* email */}
                <div className="my-2">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Email</label>
                    <input value={form.email ? form.email : ""} onChange={handleChange} type="email" name="email" id="email" className="block w-full
                p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                dark:focus:border-blue-500" />
                </div>
                {/* username */}
                <div className="my-2">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Username</label>
                    <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name="username" id="username" className="block w-full
                p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                dark:focus:border-blue-500" />
                </div>
                {/* profilepic */}
                <div className="my-2">
                    <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Profile Picture</label>
                    <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type="text" name="profilepic" id="profilepic" className="block w-full
                p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                dark:focus:border-blue-500" />
                </div>
                {/* coverpic */}
                <div className="my-2">
                    <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Cover Picture</label>
                    <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type="text" name="coverpic" id="coverpic" className="block w-full
                p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                dark:focus:border-blue-500" />
                </div>
                {/* razorpayid */}
                <div className="my-2">
                    <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Razorpay Id</label>
                    <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" name="razorpayid" id="razorpayid" className="block w-full
                p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                dark:focus:border-blue-500" />
                </div>
                {/* razorpaysecret */}
                <div className="my-2">
                    <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Razorpay Secret</label>
                    <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="text" name="razorpaysecret" id="razorpaysecret" className="block w-full
                p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                dark:focus:border-blue-500" />
                </div>

                {/* button */}
                <div className="my-6">
                    <button type="submit" className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600
            dark:focus:ring-4 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm">Save</button>
                </div>

                {/* <a href="#_" className="relative w-56 ml-64 inline-flex items-center justify-center  mt-5 px-10 py-4 overflow-hidden font-bold  tracking-tighter text-white bg-gray-800 rounded-lg group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#170b37] rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-blue-700"></span>
                <span className="relative">Save</span>
              </a> */}

            </form>

        </div>
        </>
    )
}

export default Dashboard