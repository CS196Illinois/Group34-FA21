import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { DisplayType } from '../../../interfaces/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

interface CardProps extends RouteComponentProps {
    data: DisplayType
}

export const Card: React.FC<CardProps> = ({data, history}) => {
    const price = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    const iconColor = data.freshnessRating === 'fresh' ? 'green' : 'yellow'
    
    return (
        <div className="relative cursor-pointer" onClick={() => history.push(`/${data.id}`)}>
            <img src={data.image} alt="" className="rounded-t-xl h-44 w-max"/>
            <div className="flex flex-row items-center justify-between px-6 py-10 bg-white rounded-b-xl">
                <div>
                    <p className="text-gray-400">{`${data.distance} miles away`}</p>
                    <h2 className="text-xl font-semibold">{data.name}</h2>
                    <h3>{`${price.format(data.price)} / lb`}</h3>
                </div>
                <FontAwesomeIcon className="text-gray-300" icon={faCartPlus} size='2x'/>
            </div>

            {/* Freshness indicator */}
            <div className={`truncate transition-width duration-500 ease-in-out group text-white absolute top-2 right-2 rounded-full h-8 w-8 hover:w-28 bg-${iconColor}-300 flex items-center justify-center`}>
                <div className="font-semibold group-hover:hidden">{data.storageDays}</div>
                <span className='hidden text-xs group-hover:block'>{`Listed ${data.storageDays} days ago.`}</span>
            </div>
        </div>
    );
}