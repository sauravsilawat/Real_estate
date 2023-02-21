import React, { useContext } from 'react'
import { HouseContext } from './HouseContext'

function Filter() {
    const { type, setType } = useContext(HouseContext)
    const { price, setPrice } = useContext(HouseContext)
    const { query, setQuery } = useContext(HouseContext)
    const { country, setCountry } = useContext(HouseContext)

    const { handleClick } = useContext(HouseContext)

    return (
        <div>

            {/* wide screen */}
            < div className=' hidden md:flex md:flex-col' >

                {/* searchbar */}
                <div className='hidden md:flex  justify-between'>
                    <h1 className=' font-semibold text-4xl'>Search properties to rent</h1>

                    <input
                        type={Text}
                        className='text-lg bg-white outline-none border-none placeholder:text-gray-400 text-black px-2 rounded-sm'
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='Search with Name' />
                </div>

                <div className='hidden md:flex flex-wrap gap-4 justify-between px-16 py-4 bg-white mt-10'>

                    {/* Location filter */}

                    <div>
                        <h2 className='font-semibold text-gray-500 px-2'>Location</h2>
                        <select
                            className='text-lg  bg-slate-50 placeholder:text-gray-400 outline-none border-none text-black px-2 py-1 mt-2'
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option className=' text-gray-500' value="select location (any)">select location</option>
                            <option value="United States">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Saudi">Saudi</option>
                            <option value="India">India</option>
                        </select>
                    </div>

                    <div className=' bg-slate-200 rounded-full w-[2px] h-16'></div>

                    {/* Date filter */}

                    <div>
                        <h2 className=' font-semibold text-gray-500 px-2'>When</h2>
                        <input
                            type='date'
                            className='text-lg bg-slate-50 placeholder:text-gray-400 outline-none border-none text-black px-2 py-1 mt-2'
                        />
                    </div>

                    <div className=' bg-slate-200 rounded-full w-[2px] h-16'></div>

                    {/* Price filter */}

                    <div>
                        <h2 className=' font-semibold text-gray-500 px-2'>Price</h2>
                        <select
                            className='text-lg  bg-slate-50 placeholder:text-gray-400 outline-none border-none text-black px-2 py-1 mt-2'
                            onChange={(e) => setPrice(e.target.value)}
                        >
                            <option className=' text-gray-500' value="price range (any)">select price range</option>
                            <option value="1000 - 10000">$1000 - $10000</option>
                            <option value="10000 - 50000">$10000 - $50000</option>
                            <option value="50000 - 100000">$50000 - $100000</option>
                            <option value="100000 - 500000">$100000 - $500000</option>
                        </select>
                    </div>

                    <div className=' bg-slate-200 rounded-full w-[2px] h-16'></div>

                    {/* Type filter */}

                    <div>
                        <h2 className=' font-semibold text-gray-500 px-2'>Property Type</h2>
                        <select
                            className='text-lg  bg-slate-50 placeholder:text-gray-400 outline-none border-none text-black px-2 py-1 mt-2'
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="Select (any)">Select</option>
                            <option value="House">House</option>
                            <option value="Apartament">Apartament</option>
                        </select>
                    </div>

                    <button
                        onClick={() => handleClick()}
                        className='text-xl border-[1.5px] border-purple-500 hover:bg-purple-500 hover:text-white outline-none ml-6 px-6  h-16 rounded-md'>
                        Submit
                    </button>
                </div>
            </div >

            {/* small screen */}
            < div className='md:hidden '>

                {/* searchbar */}
                <div className='flex flex-col gap-4 md:hidden justify-between'>
                    <h1 className=' font-semibold text-4xl'>Search properties to rent</h1>

                    <input
                        type={Text}
                        className='text-lg bg-white outline-none border-none placeholder:text-gray-400 text-black p-2 rounded-sm'
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='Search with Name' />
                </div>

                <div className='flex flex-col gap-6 md:hidden justify-center items-center px-16 py-4 bg-white mt-10'>

                    {/* Location filter */}

                    <div className='flex flex-col items-center'>
                        <h2 className='font-semibold text-gray-500 px-2'>Location</h2>
                        <select
                            className='text-lg  bg-slate-50 placeholder:text-gray-400 outline-none border-none text-black px-2 py-1 mt-2'
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option className=' text-gray-500' value="select location (any)">select location</option>
                            <option value="United States">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Saudi">Saudi</option>
                            <option value="India">India</option>
                        </select>
                    </div>

                    {/* Date filter */}

                    <div className='flex flex-col items-center'>
                        <h2 className=' font-semibold text-gray-500 px-2'>When</h2>
                        <input
                            type='date'
                            className='text-lg bg-slate-50 placeholder:text-gray-400 outline-none border-none text-black px-2 py-1 mt-2'
                        />
                    </div>

                    {/* Price filter */}

                    <div className='flex flex-col items-center'>
                        <h2 className=' font-semibold text-gray-500 px-2'>Price</h2>
                        <select
                            className='text-lg  bg-slate-50 placeholder:text-gray-400 outline-none border-none text-black px-2 py-1 mt-2'
                            onChange={(e) => setPrice(e.target.value)}
                        >
                            <option className=' text-gray-500' value="price range (any)">select price range</option>
                            <option value="1000 - 10000">$1000 - $10000</option>
                            <option value="10000 - 50000">$10000 - $50000</option>
                            <option value="50000 - 100000">$50000 - $100000</option>
                            <option value="100000 - 500000">$100000 - $500000</option>
                        </select>
                    </div>

                    {/* Type filter */}

                    <div className='flex flex-col items-center'>
                        <h2 className=' font-semibold text-gray-500 px-2'>Property Type</h2>
                        <select
                            className='text-lg  bg-slate-50 placeholder:text-gray-400 outline-none border-none text-black px-2 py-1 mt-2'
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="Select (any)">Select</option>
                            <option value="House">House</option>
                            <option value="Apartament">Apartament</option>
                        </select>
                    </div>

                    <button
                        onClick={() => handleClick()}
                        className='text-xl border-[1.5px] border-purple-500 hover:bg-purple-500 hover:text-white outline-none ml-6 px-16  h-10 rounded-md'>
                        Submit
                    </button>
                </div>
            </div >
        </div>
    )
}

export default Filter