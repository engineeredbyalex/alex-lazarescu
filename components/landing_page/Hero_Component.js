import React, { useEffect } from 'react';
import Page from '../common/layout/Page';
import Center from '../common/layout/Center';
import Image from 'next/image';
import Main_Button from '../common/buttons/Main_Button';
import Hero_Image from '@/assets/c46abb1d7651cc2d244cdc67cd48db33.jpg';
import { gsap } from 'gsap';
import { Expo } from 'gsap';
import Outline_Button from '../common/buttons/Outline_Button';


function Hero_Component() {

    useEffect(() => {
        gsap.to(".animate_right", { right: '30px', duration: 2, delay: 2, ease: Expo.easeInOut })
        gsap.to(".image_container", { bottom: '200px', duration: 2, delay: 2.5, ease: Expo.easeInOut })
        gsap.to(".animate_left", { left: '30px', duration: 2, delay: 3, ease: Expo.easeInOut })
        gsap.to(".button_animate_right", { right: '30px', duration: 2, delay: 3.5, ease: Expo.easeInOut })


    })

    return (
        <Page background="#1A1A1A">
            <div className='text-left'>
                <h5 className='sec_text  animate_left'>
                    Dezvoltator Web <br /> Artist 3D <br /> Student
                </h5>
            </div>
            <div className='image_container'>

            </div>
            <div className='text-right'>
                <h1 className='main_text animate_right' >
                    Lăzărescu <br /> Alexandru
                </h1>
            </div>
            <div className='button_animate_right'>
                <Outline_Button content="proiecte" />
            </div>
        </Page>
    );
}

export default Hero_Component;