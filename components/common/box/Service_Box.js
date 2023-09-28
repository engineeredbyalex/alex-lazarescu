function Service_Box(props) {
    return (

        <div className='service_box'>
            <div className='flex items-center justify-evenly'>
                <h5 className='uppercase sec_text_dark'>{props.title} </h5>
            </div>
            <p className='sec_text_dark'>{props.content}</p>
        </div>

    )
}

export default Service_Box