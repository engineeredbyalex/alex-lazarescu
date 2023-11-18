
import Logo from '@/public/logo/logo.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation_Bar() {


    return (
        <div className='w-[screen] h-[15vh] flex items-center justify-start '>

            <div className='ml-[50px] hover:scale-110 transition-all ease-in-out'>
                <Link className='border rounded-full' href={'/'}>
                    <Image width={100} height={100} src={Logo} />
                </Link>
            </div>
        </div>
    );
}
