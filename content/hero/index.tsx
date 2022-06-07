import ButtonPrimary from '../../components/buttons/primary';
import {FaArrowDown} from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';


export default function HeroSection(): JSX.Element {
    const showcase = [
        'Xiulan Long was born to a family of dragons who resided in the clouds, high above the rest of the world. Though gentle and peaceful by nature, her family was constantly at war with another clan of dragons. One day, in the midst of battle, Xiulan was knocked from the sky and fell into a deep sleep. When she awoke, she found herself in a strange land far from home. Not knowing how to get back, she decided to explore this new world and find her way home.',
        'hello world',
    ];

    const [yAxis, setYAxis] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setYAxis((window.scrollY / 4) * -1);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='w-10/12'>
            <motion.div
                animate={{
                    y: yAxis,
                }}
                className='flex h-screen items-center relative'
            >
                <div className='flex items-center w-full'>
                    <div className='flex flex-col space-y-md w-1/2'>
                        <h1>
                            The <span className='font-bold text-primary'>AI</span> lore generator
                            for
                            {` `}
                            <span className='font-bold text-primary'>VTubers</span>
                        </h1>
                        <p className='w-3/4'>
                            Get your own lore written by our supreme AI overlord. The future is now,
                            young man.
                        </p>
                        <div>
                            <ButtonPrimary href='#playground'>
                                <span>Try it now</span>
                                <FaArrowDown className='text-base' />
                            </ButtonPrimary>
                        </div>
                    </div>
                    <div className='flex w-1/2 self-start bg-secondary bg-opacity-10 rounded-md p-sm min-h-[300px] shadow-lg relative'>
                        <div className='absolute -left-[130px] -top-[130px]'>
                            <Image src='/accents/hero-arrow.svg' height={200} width={200} />
                        </div>
                        <p className='opacity-60 text-xl'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.pauseFor(2500).start();
                                }}
                                options={{
                                    delay: 10,
                                    autoStart: true,
                                    deleteSpeed: 0.1,
                                    strings: showcase,
                                    loop: true,
                                }}
                            />
                        </p>
                    </div>
                </div>
                <div className='absolute bottom-[120px] left-[300px] -transform-x-1/2'>
                    <span className='tracking-widest text-secondary'>SCROLL</span>
                    <div className='absolute h-[300px] w-[1px] bg-secondary left-1/2 -translate-x-1/2 mt-md'></div>
                </div>
            </motion.div>
        </div>
    );
}
