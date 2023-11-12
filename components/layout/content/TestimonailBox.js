import React from 'react'

function TestimonailBox(props) {
    return (
        <div className='w-full max-h-[20rem] lg:min-h-[10rem] bg-[#000] flex items-center justify-center flex-col rounded-2xl text-[#fff] shadow-xl'>
            <div className='flex flex-col items-start justify-start mb-5 px-3 py-3'>
                <p className=' font-bold uppercase text-[20px] lg:text-[26px] '>{props.title}</p>
                <p className='text-[16px] font-normal uppercase text-left'>{props.testimonial} - <span className='font-bold'>{props.client}</span> </p>
            </div>
        </div>
    );
}


export default TestimonailBox