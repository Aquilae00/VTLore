import clsx from 'clsx';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {Dispatch, SetStateAction} from 'react';
import {profilesMap} from '../profilesMap';

export default function Profiles({
    selectedIdx,
    setSelectedIdx,
}: {
    selectedIdx: number;
    setSelectedIdx: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    return (
        <div className='flex flex-col space-y-md'>
            {profilesMap.map((e, i) => (
                <motion.button
                    initial={{y: -100 * (i + 1)}}
                    whileInView={{y: 0, transition: {duration: 0.5}}}
                    viewport={{once: true}}
                    type='button'
                    onClick={() => {
                        setSelectedIdx(i);
                    }}
                    key={e.name}
                    className={clsx(
                        'rounded-full w-[84px] h-[84px] relative border-4 border-secondary',
                        {'opacity-50': i !== selectedIdx}
                    )}
                >
                    <Image
                        alt='Avatar'
                        src={e.avatar}
                        layout='fill'
                        quality={100}
                        objectFit='cover'
                        className='rounded-full'
                    />
                </motion.button>
            ))}
        </div>
    );
}
