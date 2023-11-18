
import Logo from '@/public/logo/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { OutlineButton } from '../buttons/Button';

export default function Navigation_Bar() {


    return (
        <div className='w-screen h-[15vh] flex items-center justify-between '>
            <div className='hover:scale-110 transition-all ease-in-out'>
                <Image width={100} height={100} src={Logo} />
            </div>
            <div className='flex gap-0 lg:gap-5 mr-[30px]'>
                <Link className='button_outline button_outline_slide_right px-3 py-1 rounded-xl scale-75 lg:px-2 lg:scale-100' href={'/'}><h5>Acasă</h5></Link>
                <Link className='button_outline button_outline_slide_right px-3 py-1 rounded-xl scale-75 lg:px-2 lg:scale-100' href={'/contact'}><h5>Contact</h5></Link>
                <Link className='button_outline button_outline_slide_right px-3 py-1 rounded-xl scale-75 lg:px-2 lg:scale-100' href={'/projects'}><h5>Proiecte</h5></Link>
            </div>
        </div>
    );
}
