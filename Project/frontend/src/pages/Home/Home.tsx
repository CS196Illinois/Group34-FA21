import React, { useEffect } from 'react'
import {CardList} from './components/CardList'
import {Search} from './components/Search'
import { DisplayType } from '../../interfaces/types'
// import { useAppSelector, useAppDispatch } from '../redux/app/hooks'
// import { update } from '../redux/features/listings-slice'

export const Home: React.FC = () => {
    // const listings = useAppSelector((state) => state.listings)
    // const dispatch = useAppDispatch()

    // useEffect(() => {
    //     updateFromRender()
    // }, [])

    // async function updateFromRender() {
    //     // const data = await fetchAll()
    //     // dispatch(update(data))
    // }

    async function updateFromSearch(input: string) {
        // const data = await fetchBySearch(input)
        // dispatch(update(data))
    }

    async function updateFromSelection(category: string){
        // const data = await fetchBySelection(category)
        // dispatch(update(data))
    }
    
    // TODO: use function from api folder to call API and get the response stored in variable 'data' 
    const data: DisplayType[] = [
        {
            "id": "1",
            "name" : "Granny Apples",
            "price" : 0.5,
            "distance" : 0.8,
            "storageDays" : 2,
            "freshnessRating" : "fresh",
            "image" : "https://cdn.pixabay.com/photo/2018/12/27/22/24/green-apple-3898527_1280.jpg"
        },
        {
            "id": "2",
            "name" : "Mangos",
            "price" : 1,
            "distance" : 3,
            "storageDays" : 5,
            "freshnessRating" : "fresh",
            "image" : "https://m.media-amazon.com/images/I/91PD3DRbUaL._SL1500_.jpg"
        },
        {
            "id": "3",
            "name" : "Celery",
            "price" : 2,
            "distance" : 10,
            "storageDays" : 12,
            "freshnessRating" : "expiring",
            "image" : "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/3/13/0/CI_Baker-Creek-Heirloom-Seeds_Chinese-White-Celery.jpg.rend.hgtvcom.1280.960.suffix/1584130760180.jpeg"
        }
    ]

    return (
        <div className="px-12 pb-5">
            <Search updateFromSearch={updateFromSearch} updateFromSelection={updateFromSelection}/>
            <CardList data={data}/>
        </div>
    );
}