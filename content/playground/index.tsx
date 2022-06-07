import Image from 'next/image';
import {useState} from 'react';
import {FaCog} from 'react-icons/fa';
import ButtonPrimary from '../../components/buttons/primary';
import Forms from './components/forms';
import Typewriter from 'typewriter-effect';

export default function Playground(): JSX.Element {
    const [formProps, setFormProps] = useState({name: '', description: ''});
    const [lore, setLore] = useState('');
    return (
        <div className='w-10/12'>
            <div className='min-h-screen' id='playground'>
                <div className='flex self-start relative'>
                    <span className='ghost'>Playground</span>
                    <h2 className='mb-md'>Playground</h2>
                </div>
                <div className='flex justify-center items-center space-x-xl'>
                    <Forms formProps={formProps} setFormProps={setFormProps} />
                    <div>
                        <ButtonPrimary onClick={() => setLore(formProps.description)}>
                            <span>Generate</span>
                            <FaCog />
                        </ButtonPrimary>
                    </div>
                    <div className='flex w-1/2 self-start bg-secondary bg-opacity-10 rounded-md p-sm min-h-[500px] shadow-lg relative'>
                        <Typewriter
                            key={lore}
                            onInit={(typewriter) => {
                                typewriter.callFunction(() => console.log('reee'));
                            }}
                            options={{
                                delay: 10,
                                autoStart: true,
                                strings: lore,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
