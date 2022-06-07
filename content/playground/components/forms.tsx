import {Dispatch, ReactNode, SetStateAction} from 'react';

export default function Forms({
    formProps,
    setFormProps,
}: {
    formProps: {
        name: string;
        description: string;
    };
    setFormProps: Dispatch<
        SetStateAction<{
            name: string;
            description: string;
        }>
    >;
}): JSX.Element {
    const Label = ({children}: {children: ReactNode}) => {
        return <label className='text-secondary font-semibold text-lg'>{children}</label>;
    };
    const formInputStyle =
        'border-2 font-medium rounded focus:border-blue-500 outline-none bg-gray-50 w-full p-xs text-gray-600 placeholder:text-gray-lighter';

    return (
        <form className='flex flex-col w-1/2 space-y-base'>
            <fieldset className='flex flex-col space-y-sm'>
                <Label>Character name</Label>
                <input
                    className={formInputStyle}
                    value={formProps.name}
                    onChange={(e) => setFormProps((prev) => ({...prev, name: e.target.value}))}
                ></input>
            </fieldset>
            <fieldset className='flex flex-col space-y-sm'>
                <Label>Description</Label>
                <textarea
                    className={`${formInputStyle} h-[200px]`}
                    value={formProps.description}
                    onChange={(e) =>
                        setFormProps((prev) => ({...prev, description: e.target.value}))
                    }
                />
            </fieldset>
        </form>
    );
}
