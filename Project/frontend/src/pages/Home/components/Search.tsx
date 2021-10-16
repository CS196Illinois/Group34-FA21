import React, {useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';
import { Listbox } from '@headlessui/react'
import { Input } from '../../../components/Input'

interface SearchProps {
    updateFromSearch(input: string): void,
    updateFromSelection(input: string): void
}

export const Search: React.FC<SearchProps> = ({updateFromSearch, updateFromSelection}) => {
    const input = useRef<HTMLInputElement>(null);
    const [displayCategory, setDisplay] = useState('Filter Listings')

    async function handleSearch(e: React.FormEvent) {
        e.preventDefault();
        if (input.current === null) return
        const inputVal = input.current.value
        updateFromSearch(inputVal)
    }

    async function handleSelection(category: string){
        setDisplay(category)
        updateFromSelection(category)
    }

    return (
        <div className="flex justify-between content-end">
            <Input ref={input} placeholder="Search for produce..." onSubmit={handleSearch} width='w-80'>
                <FontAwesomeIcon className="text-gray-600" icon={faSearch} />
            </Input>

            <div>
                <Listbox value={displayCategory} onChange={handleSelection}>
                    <Listbox.Button className="bg-white text-gray-500 px-6 py-3 text-sm rounded w-48 flex justify-between items-center">
                        {displayCategory}
                        <FontAwesomeIcon icon={faChevronDown} />
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 text-center text-sm w-48 mt-2 rounded truncate">
                        {['Alphabetical', 'Price Ascending', 'Price Descending', 'Date Ascending', 'Date Descending'].map((item) => (
                            <Listbox.Option key={uuidv4()} value={item}>
                            {({ active }) => (
                            <li
                                className={`${
                                active ? 'bg-gray-200' : 'bg-white'
                                } text-gray-500 py-2 px-6 text-left`}
                            >
                                {item}
                            </li>
                            )}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
        </div>
    );
}