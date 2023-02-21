import React, { useContext } from 'react'
import { HouseContext } from './HouseContext'
import { FiHeart } from "react-icons/fi";
import { FaBed, FaBath, FaChartArea } from "react-icons/fa";

function Container(data) {
    const {houses} = useContext(HouseContext);
    const {query, setQuery} = useContext(HouseContext)

    return (
        <div className='w-full flex items-center justify-center gap-20 flex-wrap mt-20'>
            
            {houses.filter((items)=>items.name.toLowerCase().includes(query)).map(items => (
                
                <div
                    key={items.id}
                    className="w-[350px] bg-white rounded-lg overflow-hidden "
                >
                    <img src={items.imageLg} className=" rounded-t-lg" />
                   
                    <div className='flex items-center justify-between'>
                        <h1 className=' text-purple-600 font-bold text-2xl px-5 pt-6'>$ {items.price}  <a className=' text-gray-400 font-normal text-sm'>/month</a></h1>
                        <div className='pt-6 mr-10 cursor-pointer'><FiHeart /></div>
                    </div>
                   
                    <h1 className=' text-2xl font-bold px-5 py-2'>{items.name}</h1>
                   
                    <h3 className='px-5 text-gray-400'>{items.address}</h3>
                   
                    <div className='flex gap-6 text-sm px-5 pb-2 pt-6 '>
                        <h5 className='flex items-center gap-1'><FaBed /> {items.bedrooms} Beds</h5>
                        <h5 className='flex items-center gap-1'><FaBath /> {items.bathrooms} Bathrooms</h5>
                        <h5 className='flex items-center gap-1'><FaChartArea />{items.surface}</h5>
                    </div>

                </div>
            ))}
            
        </div>
    )
}

export default Container
 