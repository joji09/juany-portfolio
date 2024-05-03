import React, { useState, useEffect } from 'react';
// import Rellax from "../node_modules/rellax/rellax.min.js";
import Rellax from "rellax";

const RandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Bar = props => (
    <div
    key={props.h}
    className={`rellax flex flex-auto w-full z-0 bg-red-${props.c + "00"} ${(props.i === 0 || props.i === 1) ? 'mx-0' : '-mx-px'} rounded${props.loc ? "-" + props.loc : ""}-full`}
    style={{ 'height': `${props.h}%` }}
    data-rellax-speed={`${props.s}`}
    data-rellax-xs-speed={`${props.s * 1}`}
    data-rellax-desktop-speed={`${props.s}`}
    />
)

const Bars = ({ minSpeed, maxSpeed, color, extraHeight = 0, zIndex = 20 }) => {
    let barsTop = [];
    let barsBot = []

    let n = Math.floor(window.innerWidth / 25);

    for (let i = 0; i <= n; i++){
        let rs = RandomInt(minSpeed, maxSpeed) + Math.random()*1;
        let rh = 100 * (i / (n)) + extraHeight;
        barsTop.push(<Bar key={i} h={rh} loc="b" s={rs} c={color} i={i / n} />)
        barsBot.push(<Bar key={i} h={rh} loc="t" s={-rs} c={color} i={i / n} />)
    }

    barsBot.reverse();

    return (
        <>
        <div className={"flex flex-none absolute w-full h-full top-0 item-start z-" + zIndex}>
            {barsTop}
        </div>,
        <div className={"flex flex-none absolute w-full h-full bot-0 items-end overflow-y-hidden z-" + zIndex}>
            {barsBot}
        </div>
        </>
    );
}

const Landing = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        console.log('Rellax initialized');
        new Rellax('.rellax', {
            breakpoints: [640, 768, 1024]
        })

        if (window.scrollY > 0) {
            setScroll(true);
        }

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='h-screen w-full'>

            <div className='h-full3 bg-black z-0'>
                <div className='flex sticky top-0 justify-center items-center h-screen w-auto text-center'>
                    {scroll ? null :
                    <svg className='animate-pulse relative h-24 w-full fill-current text-red-500 z-30' viewBox='0 0 16 16'>
                        <path fillRule='overnodd' d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg>
                    }
                    <header className='absolute w-auto z-10'>
                        <div className="relative text-center object center content-center items-center p-4">
                            <span className="text-2x1 font-normal text-red-200">Hello, I'm<p className='text-4xl font-bold text-red-500'>Juany Santana</p></span>
                            <h1 className='text-red-400 text-4xl font-sans font-extrabold'>Weclome to my portfolio</h1>
                            <div className="relative mt-3"><span className='text-sm font-bold text-red-200 animate-pulse'>(keep scrolling)</span></div>
                            <svg className='animate-pulse relative h-5 w-full fill-current text-red-500' viewBox="0 0 16 16">
                            <path fillRule='evenodd' d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </header>

                    <Bars minSpeed={2} maxSpeed={3} color={7} zIndex={0} />
                    <Bars minSpeed={4} maxSpeed={6} color={6} />
                    <Bars minSpeed={7} maxSpeed={9} color={5} />
                    <Bars minSpeed={10} maxSpeed={12} color={4} extraHeight={2} />
                </div>
            </div>
        </section>
    )
}

export default Landing;