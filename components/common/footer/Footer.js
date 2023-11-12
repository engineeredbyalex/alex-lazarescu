// 
import Center from '../../layout/content/Center'
// 
import Image from 'next/image'
// 
import { SocialIcon } from 'react-social-icons'
// 
import Wrapper from '@/components/layout/content/Wrapper'
// 
import Logo from "@/public/logo/small_Logo_alt.png"

function Footer() {
    return (
        <div className='h-[50vh] w-screen'>
            <div className='w-full flex items-center justify-evenly'>
                <div className=' flex flex-col gap-5 absolute left-[50px]'>
                    <p className='z-[2]'>Nu ezita să mă contactezi.</p>
                    <div className='lex flex-row gap-5 items-center justify-center'>
                        <SocialIcon className='scale-75' bgColor='black' url='https://github.com/engineeredbyalex' />
                        <SocialIcon className='scale-75' bgColor='black' url='https://www.linkedin.com/in/alexandru-lazarescu-784031252/' />
                        <SocialIcon className='scale-75' bgColor='black' url='https://www.instagram.com/nusuntlaza/' />
                        <SocialIcon className='scale-75' bgColor='black' url='dev.lazarescu.alexandru@gmail.com' />
                    </div>

                </div>
                <div className='absolute right-[50px]'>
                    <Image width={300} height={300} className='z-[2]' src={Logo} />
                </div>
            </div>
        </div>
    )
}

export default Footer