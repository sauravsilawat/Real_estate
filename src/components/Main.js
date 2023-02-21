import React from 'react'
import Container from './Container'
import Filter from './Filter';

function Main() {

    return (
        <div className='w-screen bg-slate-100'>
            <div className=' w-[80%] pt-10 pb-6 mx-auto overflow-hidden'>
                <Filter />
                <Container />
            </div>

        </div>
    )
}

export default Main
