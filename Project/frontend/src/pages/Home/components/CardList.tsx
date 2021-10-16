import React from 'react'
import { withRouter } from 'react-router-dom';
import { Card } from './Card'
import { v4 as uuidv4 } from 'uuid';
import { DisplayType } from '../../../interfaces/types'

interface CardListProps {
    data: DisplayType[];
}

export const CardList: React.FC<CardListProps> = ({data}) => {
    const CardRouter = withRouter(Card)

    return (
        <div className="mx-4 my-8 grid grid-cols-fill-40 justify-center gap-8">
            {data.map(entry => {
                return <CardRouter key={uuidv4()} data={entry}/>
            })}
        </div>
    );
}