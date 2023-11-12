import Wrapper from "../content/Wrapper"
import Center from "../content/Center"

function Page({ children }) {
    return (
        <div className='bg-[#fff] w-[100vw]  min-h-[100vh] flex items-center justify-center overflow-hidden '>
            <Wrapper>
                <Center>
                    {children}
                </Center>
            </Wrapper>

        </div>
    )

}

export default Page