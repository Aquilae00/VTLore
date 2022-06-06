import {useState} from 'react';
import Profiles from './components/profiles';

export default function Examples(): JSX.Element {
    const [selectedIdx, setSelectedIdx] = useState<number>(0);
    return (
        <div className='h-screen'>
            <h2 className='mb-md'>Examples</h2>
            <div className='flex'>
                <Profiles selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
            </div>
        </div>
    );
}
