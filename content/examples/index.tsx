import {useState} from 'react';
import Profiles from './components/profiles';
import VTuber from './components/vtuber';

export default function Examples(): JSX.Element {
    const [selectedIdx, setSelectedIdx] = useState<number>(0);
    return (
        <div className='flex flex-col justify-center items-center h-screen' id='examples'>
            <div className='flex self-start relative'>
                <span className='ghost'>Examples</span>
                <h2 className='mb-md'>Examples</h2>
            </div>
            <div className='flex justify-between lg:w-5/6'>
                <Profiles selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
                <VTuber selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
            </div>
        </div>
    );
}
