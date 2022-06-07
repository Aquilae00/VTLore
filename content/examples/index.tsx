import {useState} from 'react';
import Profiles from './components/profiles';
import VTuber from './components/vtuber';
import Image from 'next/image';

export default function Examples(): JSX.Element {
    const [selectedIdx, setSelectedIdx] = useState<number>(0);
    return (
        <div className='flex items-center justify-center relative w-full overflow-x-hidden'>
            <div className='w-10/12'>
                <div
                    className='flex flex-col justify-center items-center min-h-screen'
                    id='examples'
                >
                    <div className='flex self-start relative'>
                        <span className='ghost'>Examples</span>
                        <h2 className='mb-md'>Examples</h2>
                    </div>
                    <div className='flex flex-col space-y-base lg:flex-row lg:space-x-2xl lg:justify-center'>
                        <Profiles selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
                        <VTuber selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
                    </div>
                </div>
            </div>
            <div className='hidden lg:block absolute -right-[100px] top-0 opacity-70'>
                <Image src='/accents/book.svg' width={500} height={500} />
            </div>
        </div>
    );
}
