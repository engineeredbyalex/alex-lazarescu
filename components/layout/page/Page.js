import Wrapper from "../content/Wrapper"
import Center from "../content/Center"

function Page({ children }) {
    return (
        <div className='bg-[#fff] w-[100vw]  h-auto flex items-center justify-center overflow-hidden scroll-smooth'>
            <Wrapper>
                <Center>
                    {children}
                </Center>
            </Wrapper>

        </div>
    )

}

export default Page