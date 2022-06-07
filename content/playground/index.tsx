import Image from 'next/image';
import {useCallback, useState} from 'react';
import {FaCog, FaTwitter} from 'react-icons/fa';
import ButtonPrimary from '../../components/buttons/primary';
import Forms from './components/forms';
import Typewriter from 'typewriter-effect';
import axios from 'axios';
import unwrapOrThrowError, {ResponseEnvelope} from '../../lib/unwrapOrThrowError';
import {motion} from 'framer-motion';
import {toast} from 'react-toastify';
import Link from 'next/link';

export default function Playground(): JSX.Element {
    const [formProps, setFormProps] = useState({name: '', description: ''});
    const [lore, setLore] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const handleGenerate = useCallback(async () => {
        if (isTyping) return;
        if (!formProps.name) {
            toast.warning('Please enter your character name!', {
                position: 'bottom-center',
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }
        if (!formProps.description) {
            toast.warning('Please enter your character description!', {
                position: 'bottom-center',
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }
        try {
            setIsLoading(true);
            const response = await axios.post<ResponseEnvelope<string>>('/generator', formProps);
            const data = unwrapOrThrowError(response);
            setLore(data);
            setIsLoading(false);
            setIsTyping(true);
        } catch (err) {
            toast.error('Oops.. encountered unknown error..', {
                position: 'bottom-center',
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setIsLoading(false);
        }
    }, [formProps, isTyping]);

    const variants = {
        loading: {rotate: 180},
        passive: {rotate: 0},
    };
    return (
        <div className='w-10/12'>
            <div className='min-h-screen' id='playground'>
                <div className='flex self-start relative'>
                    <span className='ghost'>Playground</span>
                    <h2 className='mb-md'>Playground</h2>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:space-x-xl space-y-lg'>
                    <Forms formProps={formProps} setFormProps={setFormProps} />
                    <div>
                        <ButtonPrimary onClick={handleGenerate} disabled={isTyping || isLoading}>
                            <span>Generate</span>
                            <motion.div
                                animate={isLoading ? {rotate: 180} : {rotate: 0}}
                                transition={isLoading ? {repeat: Infinity, duration: 1} : undefined}
                            >
                                <FaCog />
                            </motion.div>
                        </ButtonPrimary>
                    </div>
                    <div className='flex flex-col w-full lg:w-1/2 self-start'>
                        <div className='flex w-full  self-start bg-secondary bg-opacity-10 rounded-md p-sm min-h-[500px] shadow-lg relative'>
                            <p className='opacity-80 '>
                                <Typewriter
                                    key={lore}
                                    onInit={(typewriter) => {
                                        typewriter.callFunction(() => setIsTyping(false));
                                    }}
                                    options={{
                                        delay: 10,
                                        autoStart: true,
                                        strings: lore,
                                    }}
                                />
                            </p>
                        </div>

                        <div className='flex items-center'>
                            <span className='text-secondary mt-base'>
                                Playground will be disabled soon. To immortalize your lore, share it
                                on Twitter!
                            </span>
                            <Link href={`https://twitter.com/intent/tweet?text=${lore}&hashtags=vtlore`}>
                                <a
                                    target='_blank'
                                    className='rounded-full bg-blue-500 flex space-x-sm items-center justify-center px-base py-xs text-white'
                                >
                                    <span>Share</span>
                                    <FaTwitter className='text-xl' />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
