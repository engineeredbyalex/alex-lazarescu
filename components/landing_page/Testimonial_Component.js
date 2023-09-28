import { RevealWrapper } from 'next-reveal';
import Center from '../common/layout/Center';

function App() {
    return (
        <div>
            <Center>
                <div className='mt-[50px]'>
                    <RevealWrapper origin='bottom' delay={200} duration={1000} distance='300px' reset={false} >
                        <h4 className='sec_text_dark'>Clienți</h4>
                    </RevealWrapper>
                </div>
            </Center>
        </div>
    );
}

export default App;