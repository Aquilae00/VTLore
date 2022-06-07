import ButtonPrimary from '../../components/buttons/primary';
import {FaArrowDown} from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {profilesMap} from '../examples/profilesMap';

export default function HeroSection(): JSX.Element {
    const showcase = profilesMap.map((e) => e.lore);

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
        <div className='w-10/12 '>
            <motion.div
                animate={{
                    y: yAxis,
                }}
                className='flex min-h-screen items-center relative'
            >
                <div className='flex flex-col gap-2xl lg:flex-row justify-center items-center w-full mt-[200px] lg:mt-0 lg:space-y-0'>
                    <div className='flex flex-col items-center lg:items-start space-y-md lg:w-1/2'>
                        <h1>
                            The <span className='font-bold text-primary'>AI</span> lore generator
                            for
                            {` `}
                            <span className='font-bold text-primary'>VTubers</span>
                        </h1>
                        <p className='w-3/4 text-center lg:text-left'>
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
                    <div className='flex lg:w-1/2 w-full lg:self-start bg-secondary bg-opacity-10 rounded-md p-sm min-h-[440px] md:min-h-[340px] lg:min-h-[300px] shadow-lg relative mt-lg'>
                        <div className='absolute right-2xl lg:-left-[130px] -top-[130px]'>
                            <Image src='/accents/hero-arrow.svg' height={200} width={200} />
                        </div>
                        <p className='opacity-60 md:text-lg lg:text-xl'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.pauseFor(4000).start();
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
                <div className='hidden lg:block absolute bottom-[120px] left-[300px] -transform-x-1/2'>
                    <span className='tracking-widest text-secondary'>SCROLL</span>
                    <div className='absolute h-[300px] w-[1px] bg-secondary left-1/2 -translate-x-1/2 mt-md'></div>
                </div>
            </motion.div>
        </div>
    );
}
