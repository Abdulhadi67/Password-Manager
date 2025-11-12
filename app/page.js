"use client"
import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';



export default function Home() {
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordarray, setpasswordarray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")

        if (passwords) {
            setpasswordarray(JSON.parse(passwords))
        }

    }, [])
    const copyText = (text) => {
        toast('Copied To Clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
        navigator.clipboard.writeText(text)
    }


    const save = () => {
        const isFormEmpty = Object.values(form).some(value => value.trim() === '');

        if (isFormEmpty) {
            toast('Please fill all the fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            return;
        }

        setpasswordarray([...passwordarray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordarray, { ...form, id: uuidv4() }]))
        console.log([...passwordarray, form])
        setform({ site: "", username: "", password: "" })
    }
    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const Edit = (id) => {
        setform(passwordarray.filter(i => i.id === id)[0])
        setpasswordarray(passwordarray.filter(item => item.id !== id))
    }
    const Delete = (id) => {
        setpasswordarray(passwordarray.filter(item => item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordarray.filter(item => item.id !== id)))
        toast('Password deleted!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    }




    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            <div className=" w-full text-center">
                <div className="my-6">
                    <h1 className="text-amber-100 font-mono text-3xl">Store Your Passwords</h1>
                    <div className="flex flex-col justify-center items-center my-5">
                        <input onChange={handlechange}
                            value={form.site} type="text" name="site" placeholder="Enter website Name" className="bg-amber-50 py-2 w-62 md:w-1/3 px-2 rounded-3xl" />
                        <div>
                            <input onChange={handlechange}
                                value={form.username} name="username" type="text" placeholder="Enter Username" className="bg-amber-50 py-2 my-3 mr-1 md:mr-6 px-2 w-62 rounded-3xl" />
                            <input onChange={handlechange}
                                value={form.password} name="password" type="text" placeholder="Enter Password" className="bg-amber-50 py-2 my-0 md:my-3 px-2 w-62 md:w-60 rounded-3xl" />
                        </div>
                        <button type="button" onClick={save} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-4 md:my-2">Save Credentials </button>
                    </div>
                </div>

            </div>

            {passwordarray.length === 0 && <div className="text-amber-200 flex justify-center">No Passwords To Show</div>}
            {passwordarray.length != 0 && <div className="flex justify-center items-center">
                <div className="overflow-y-auto overflow-x-hidden max-h-[40vh] md:max-h-95 w-90 md:w-[90vw] flex justify-center">
                    <table className="table-fixed text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 relative">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-10">
                            <tr>
                                <th scope="col" className="px-1 md:px-6 py-3 ">
                                    Site
                                </th>
                                <th scope="col" className="px-1 md:px-30 py-3">
                                    Username
                                </th>
                                <th scope="col" className="px-1 md:px-30 py-3">
                                    Password
                                </th>
                                
                                <th scope="col" className="px-1 md:px-30 py-3">
                                    Actions
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {passwordarray.map((item, index) => {
                                return <tr key={index} className="bg-green-100 border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td className="md:min-w-xs px-1 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">

                                        {item.site}
                                    </td>
                                    <td className="flex flex-col items-center px-3 md:px-6 py-4 dark:text-white">
                                        <div className="flex break-all flex-wrap gap-2">
                                            {item.username} <svg onClick={() => { copyText(item.username) }} className="cursor-pointer dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" viewboxidth="24" height="24" color="#000000" fill="none">
                                                <path d="M16.9637 8.98209C16.9613 6.03194 16.9167 4.50384 16.0578 3.45753C15.892 3.25546 15.7067 3.07019 15.5047 2.90436C14.4008 1.99854 12.7609 1.99854 9.48087 1.99854C6.20089 1.99854 4.5609 1.99854 3.45708 2.90436C3.255 3.07018 3.06971 3.25546 2.90387 3.45753C1.99799 4.56128 1.99799 6.20116 1.99799 9.48091C1.99799 12.7607 1.99799 14.4005 2.90387 15.5043C3.0697 15.7063 3.255 15.8916 3.45708 16.0574C4.50346 16.9162 6.03167 16.9608 8.98201 16.9632" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M14.0283 9.02455L16.994 8.98193M14.0143 22.0013L16.9799 21.9586M21.9716 14.0221L21.9436 16.9818M9.01033 14.0357L8.98236 16.9953M11.4873 9.02455C10.6545 9.17371 9.31781 9.32713 9.01033 11.0488M19.4946 21.9586C20.3296 21.8223 21.6685 21.6894 22.0025 19.9726M19.4946 9.02455C20.3274 9.17371 21.6641 9.32713 21.9716 11.0488M11.5 21.9573C10.6672 21.8086 9.33039 21.6559 9.02197 19.9344" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="px-3 md:px-6 py-4 dark:text-white">
                                        <div className="flex flex-wrap break-all justify-center items-center gap-2">
                                            {item.password} <svg onClick={() => { copyText(item.password) }} className="cursor-pointer dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" viewboxidth="24" height="24" color="#000000" fill="none">
                                                <path d="M16.9637 8.98209C16.9613 6.03194 16.9167 4.50384 16.0578 3.45753C15.892 3.25546 15.7067 3.07019 15.5047 2.90436C14.4008 1.99854 12.7609 1.99854 9.48087 1.99854C6.20089 1.99854 4.5609 1.99854 3.45708 2.90436C3.255 3.07018 3.06971 3.25546 2.90387 3.45753C1.99799 4.56128 1.99799 6.20116 1.99799 9.48091C1.99799 12.7607 1.99799 14.4005 2.90387 15.5043C3.0697 15.7063 3.255 15.8916 3.45708 16.0574C4.50346 16.9162 6.03167 16.9608 8.98201 16.9632" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M14.0283 9.02455L16.994 8.98193M14.0143 22.0013L16.9799 21.9586M21.9716 14.0221L21.9436 16.9818M9.01033 14.0357L8.98236 16.9953M11.4873 9.02455C10.6545 9.17371 9.31781 9.32713 9.01033 11.0488M19.4946 21.9586C20.3296 21.8223 21.6685 21.6894 22.0025 19.9726M19.4946 9.02455C20.3274 9.17371 21.6641 9.32713 21.9716 11.0488M11.5 21.9573C10.6672 21.8086 9.33039 21.6559 9.02197 19.9344" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="px-3 md:px-6 py-4 dark:text-white">
                                        <div className="flex gap-2 items-center justify-center">
                                        <svg onClick={() => { Edit(item.id) }} className="dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                            <path d="M16.9459 3.17305C17.5332 2.58578 17.8268 2.29215 18.1521 2.15173C18.6208 1.94942 19.1521 1.94942 19.6208 2.15173C19.946 2.29215 20.2397 2.58578 20.8269 3.17305C21.4142 3.76032 21.7079 4.05395 21.8483 4.37925C22.0506 4.8479 22.0506 5.37924 21.8483 5.84789C21.7079 6.17319 21.4142 6.46682 20.8269 7.05409L15.8054 12.0757C14.5682 13.3129 13.9496 13.9315 13.1748 14.298C12.4 14.6645 11.5294 14.7504 9.78823 14.9222L9 15L9.07778 14.2118C9.24958 12.4706 9.33549 11.6 9.70201 10.8252C10.0685 10.0504 10.6871 9.43183 11.9243 8.19464L16.9459 3.17305Z" stroke="#141B34" strokeWidth="1.5" strokeLinejoin="round" />
                                            <path d="M6 15H3.75C2.7835 15 2 15.7835 2 16.75C2 17.7165 2.7835 18.5 3.75 18.5H13.25C14.2165 18.5 15 19.2835 15 20.25C15 21.2165 14.2165 22 13.25 22H11" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg onClick={() => { Delete(item.id) }} className="dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                            <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M9 11.7349H15" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M10.5 15.6543H13.5" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M3 5.5H21M16.0555 5.5L15.3729 4.09173C14.9194 3.15626 14.6926 2.68852 14.3015 2.39681C14.2148 2.3321 14.1229 2.27454 14.0268 2.2247C13.5937 2 13.0739 2 12.0343 2C10.9686 2 10.4358 2 9.99549 2.23412C9.89791 2.28601 9.80479 2.3459 9.7171 2.41317C9.32145 2.7167 9.10044 3.20155 8.65842 4.17126L8.05273 5.5" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        </div>
                                    </td>

                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            }

        </>
    );
}
