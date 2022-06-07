import {motion} from 'framer-motion';
import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {FaTwitter} from 'react-icons/fa';
import Examples from '../content/examples';
import HeroSection from '../content/hero';
import Playground from '../content/playground';

const Home: NextPage = () => {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center relative'>
            <div className=' flex flex-col items-center relative max-w-widest'>
                <div className='absolute top-0 right-0 opacity-50'>
                    <Image src='/accents/ripple.svg' width={500} height={500} />
                </div>
                <header className='fixed w-10/12 top-md z-50'>
                    <div className='flex'>
                        <Link href='/' scroll>
                            <a>
                                <motion.div whileTap={{rotateX: 360, transition: {duration: 0.1}}}>
                                    <Image src='/logo.svg' width={64} height={64} />
                                </motion.div>
                            </a>
                        </Link>
                    </div>
                </header>
                <main className='flex flex-col items-center w-full space-y-[50px]'>
                    <HeroSection />
                    <Examples />
                    <Playground />
                </main>
                <footer className='w-10/12 py-base mt-lg'>
                    <div className='flex justify-between items-center'>
                        <span className='text-secondary'>Developed by ©Aquilae 2022</span>
                        <Link href='https://twitter.com/Aquilae00'>
                            <a target='_blank' referrerPolicy='no-referrer' rel='noreferrer'>
                                <FaTwitter className='text-3xl text-blue-500' />
                            </a>
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;
