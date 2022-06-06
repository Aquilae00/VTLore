import {useState} from 'react';
import Profiles from './components/profiles';
import VTuber from './components/vtuber';

export default function Examples(): JSX.Element {
    const [selectedIdx, setSelectedIdx] = useState<number>(0);
    return (
        <div className='h-screen' id='examples'>
            <h2 className='mb-md'>Examples</h2>
            <div className='flex justify-between'>
                <Profiles selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
                <VTuber selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
            </div>
        </div>
    );
}
