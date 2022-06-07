import Link from 'next/link';
import {ButtonHTMLAttributes, ReactNode} from 'react';

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    href?: string;
}
export default function ButtonPrimary({children, href, ...props}: ButtonPrimaryProps): JSX.Element {
    if (href) {
        return (
            <button
                className='bg-primary hover:bg-opacity-90 shadow-lg rounded-full text-white'
                {...props}
            >
                <Link href={href} className='w-full h-full '>
                    <a className='flex items-center justify-center space-x-sm w-full h-full rounded-full px-base py-sm'>
                        {children}
                    </a>
                </Link>
            </button>
        );
    }
    return (
        <button
            className='flex items-center justify-center space-x-sm bg-primary hover:bg-opacity-90 shadow-lg rounded-full px-base py-sm text-white'
            {...props}
        >
            {children}
        </button>
    );
}
