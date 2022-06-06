import {ReactNode} from 'react';

export default function ButtonPrimary({children}: {children: ReactNode}): JSX.Element {
    return (
        <button className='flex items-center justify-center space-x-sm bg-primary shadow-lg rounded-full px-base py-sm text-white'>
            {children}
        </button>
    );
}
