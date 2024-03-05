import { RevealWrapper } from "next-reveal";
import Page from "../layout/Page";
import StickerTwo from "@/public/images/sticker_two.png"
import StickerThree from "@/public/images/sticker_three.png"
import Image from "next/image";

function AboutMeSection() {
    return (
        <Page>
            <div className="page_container">
            <div style={{height:'auto',display:'flex',flexDirection:'column',}}>
                         <RevealWrapper origin="bottom">
                    <h3 style={{ textTransform: "uppercase", margin: '60px 0px 60px 0px' }}>ABOUT ME</h3>
                </RevealWrapper>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: 'center', gap: '5rem', fontWeight: '300', fontStyle: 'italic', fontFamily: "Playfair Display",  }}>
                 <h4 className="text_area">
                    As a seasoned Web Developer Designer with 3 years of experience in building amazing digital experiances, I bring expertise in both branding and art direction to the table. I have a strong passion for UI design, where I aim to create emotionally impactful experiences for users.
              </h4>
                        <h4 className="text_area">
                            My skills cover a wide range of digital platforms, including mobile apps, SaaS platforms, landing pages, e-commerce sites, web-apps, and much more.
              </h4>
                    </div>
                    <div>
                    
                        <Image  src={StickerThree} />
                    </div>
            </div>
            </div>
        </Page>
    )
}

export default AboutMeSection
