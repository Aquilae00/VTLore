import {AnimatePresence, motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {Dispatch, SetStateAction} from 'react';
import {FaTwitch, FaTwitter} from 'react-icons/fa';
import {profilesMap} from '../profilesMap';

export default function VTuber({
    selectedIdx,
    setSelectedIdx,
}: {
    selectedIdx: number;
    setSelectedIdx: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    return (
        <>
            <motion.div
                key={selectedIdx}
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                className='flex flex-col items-center space-y-sm'
            >
                <div className='w-[284px] h-[284px] relative'>
                    <Image src='/accents/ripple-full.svg' layout='fill' />
                    <div className='w-[244px] h-[244px] absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <Image
                            src={profilesMap[selectedIdx].avatar}
                            layout='fill'
                            objectFit='cover'
                            className='rounded-full'
                        />
                    </div>
                </div>
                <h3>{profilesMap[selectedIdx].name}</h3>
                <div className='flex items-center justify-center space-x-base'>
                    <Link href={profilesMap[selectedIdx].socials.twitch}>
                        <a target='_blank' referrerPolicy='no-referrer' rel='noreferrer'>
                            <FaTwitch className='text-2xl text-purple-500' />
                        </a>
                    </Link>
                    <Link href={profilesMap[selectedIdx].socials.twitter}>
                        <a target='_blank' referrerPolicy='no-referrer' rel='noreferrer'>
                            <FaTwitter className='text-2xl text-blue-500' />
                        </a>
                    </Link>
                </div>
            </motion.div>

            <div className='flex flex-col w-1/2 space-y-base self-center'>
                <div className='space-y-sm'>
                    <h4>Description</h4>
                    <p>{profilesMap[selectedIdx].description}</p>
                </div>
                <div className='space-y-sm'>
                    <h4>Lore</h4>
                    <p>{profilesMap[selectedIdx].lore}</p>
                </div>
                <span className='text-red-500 opacity-50 text-sm'>
                    *This lore is 100% AI generated and is not their actual lore.
                </span>
            </div>
        </>
    );
}
