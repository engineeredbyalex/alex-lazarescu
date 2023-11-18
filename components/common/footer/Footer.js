// 
import Center from '../../layout/content/Center'
// 
import Image from 'next/image'
// 
import { SocialIcon } from 'react-social-icons'
// 
import Wrapper from '@/components/layout/content/Wrapper'
// 
import Logo from '@/public/logo/logo.png'


function Footer() {
    return (
        <div className='h-auto w-screen justify-between flex flex-col lg:flex-row'>
            <div className='py-5 ml-[30px]'>
                <h5>Nu ezita să mă contactezi</h5>
                <div>
                    < SocialIcon className='scale-75' bgColor='black' url='https://github.com/engineeredbyalex' />
                    <SocialIcon className='scale-75' bgColor='black' url='https://www.linkedin.com/in/alexandru-lazarescu-784031252/' />
                    <SocialIcon className='scale-75' bgColor='black' url='https://www.instagram.com/nusuntlaza/' />

                    <SocialIcon className='scale-75' bgColor='black' url='https://www.behance.net/lazaresalexand1' />
                </div>
            </div>

        </div>
    )
}

export default Footer
