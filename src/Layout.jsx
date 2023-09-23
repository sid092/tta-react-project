import React from 'react'

const Layout = () => {
    return (
        <div>
            <div className="w-[50rem] mt-7 justify-center items-center ml-72 border border-black">
                <nav className='h-12'>
                    <div className="text-xs font-bold border-r border-black ml-5 mr-[38rem] h-12 text-center flex justify-center items-center">
                        LOREM IPSUM
                    </div>
                    <div className="text-sm font-semibold flex text-center justify-center -mt-10 ml-[42rem]">
                        LINK1
                    </div>
                </nav>
                <main className="border-t border-black">
                    <div className="h-80 border-r border-black ml-5 mr-[25rem] flex text-center justify-center items-center text-xs font-bold " >
                        THIS IS SOME CONTENT ALIGNED IN THE CENTER<br />
                        VERTICALY AND HORIZONTALLY
                    </div>
                    <div>
                    </div>
                </main>
                <div className="border-t border-black text-left h-36 text-xs font-bold pt-10 pr-8 pl-12">
                    THIS IS THE FOOTER CONTENT WHICH IS ALIGNED <br />
                    <span className="ml-32">LEFT</span>
                </div>
            </div>
        </div>
    )
}

export default Layout
