import React from 'react'
// importing Animated Button
import AnimatedBackground from "@/public/video/comp2.mp4"
// importing page
import Page from '@/components/layout/page/Page'
import Navigation_Bar from '@/components/common/header/Navigation_Bar'


function WorkPage() {

    return (
        <Page>
            <Navigation_Bar />
            <div className="video-background">
                <video autoPlay muted loop id="bg_video">
                    <source src={AnimatedBackground} type="video/mp4" />
                </video>
            </div>
        </Page>
    )
}

export default WorkPage