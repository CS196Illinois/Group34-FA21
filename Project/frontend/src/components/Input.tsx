import React from 'react'

interface InputProps {
    onSubmit(e: React.FormEvent): void,
    ref: React.RefObject<HTMLInputElement>,
    placeholder: string,
    width: string
}

export const Input: React.FC<InputProps> = ({ref, placeholder, onSubmit, width, children}) => {
        return (
                <form className="bg-white px-4 py-3 text-sm rounded flex justify-between items-center" onSubmit={onSubmit}>
                        {children}
                        <input ref={ref} type="text" placeholder={placeholder} className={`pl-4 bg-white rounded focus:outline-none text-gray-500 placeholder-gray-300 ${width} overflow-hidden`}/>
                </form>
        );
}