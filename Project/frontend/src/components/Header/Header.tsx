import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks'
import { update } from '../../redux/features/zip-slice'
import logo from '../../assets/logo.png'

export const Header: React.FC = () => {
    const input = useRef<HTMLInputElement>(null);
    const zip = useAppSelector((state) => state.zip.value);
    const dispatch = useAppDispatch();

    function handleUpdate(e: React.FormEvent) {
        e.preventDefault();
        if (input.current === null || !/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(input.current.value)) return
        dispatch(update(input.current.value))
    }

    return (
        <div className='flex flex-row py-4 bg-yellow-50 px-8 justify-between items-center'>
            <form className="flex bg-green-300 rounded items-center p-1 w-16 overflow-hidden h-7" onSubmit={handleUpdate}>
                <FontAwesomeIcon className="text-yellow-50 mx-1 h-3" icon={faMapMarkerAlt} />
                <input ref={input} type="text" placeholder={zip} className="text-xs bg-green-300 rounded focus:outline-none text-white placeholder-green-50 overflow-hidden"/>
            </form>
            <div className='flex gap-3 items-center'>
                <img src={logo} alt='' className="w-12"/>
                <h1 className='text-green-600 font-bold text-xl'>green thumb.</h1>
            </div>
            <div className='flex items-center gap-4'>
                <FontAwesomeIcon className="text-green-300" icon={faShoppingCart} size='lg'/>
                <FontAwesomeIcon className="text-green-300" icon={faUserCircle} size='2x'/>
            </div>
        </div>
    );
}