import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Examples from '../content/examples';
import HeroSection from '../content/hero';

const Home: NextPage = () => {
    return (
        <div className='min-h-screen min-w-screen flex justify-center relative'>
            <div className='absolute top-0 right-0 opacity-50'>
                <Image src='/accents/ripple.svg' width={500} height={500} />
            </div>
            <main className='w-10/12'>
                <HeroSection />
                <div className='mt-[200px]'>
                    <Examples />
                </div>
            </main>
        </div>
    );
};

export default Home;
