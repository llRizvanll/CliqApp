import React, { useState, useEffect } from 'react'
import { TrendingDummyData } from '../data'
import { API_CLOTHES, API_AVAILABLE_CLOTHES, API_SETTING } from '../../constants'
import { TrendingType } from '../types/DataTypes'

const ClothesContext = React.createContext({})

const ClothesProvider: React.FC = (props) => {

    // Dummy Data
    const [trending, setTrending] = useState<TrendingType[]>(TrendingDummyData);

    const [trendingClothes, setTrendingClothes] = useState<TrendingType[]>([]);
    const [recentlyViewed, setRecentlyViewed] = useState<TrendingType[]>([]);

    const fetchClothesList = async () => {
        const response = await fetch(API_CLOTHES, API_SETTING)
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
        setTrendingClothes(response);
    }

    const fetchAvailClothesList = async () => {
        const response = await fetch(API_AVAILABLE_CLOTHES, API_SETTING)
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
        setRecentlyViewed(response);
    }

    useEffect(() => {
        fetchClothesList()
        fetchAvailClothesList()
    }, [])

    return (
        <ClothesContext.Provider value={{
            recentlyViewed,
            trending,
            trendingClothes
        }}>
            {props.children}
        </ClothesContext.Provider>
    )
}

const ClothesConsumer = ClothesContext.Consumer
export { ClothesProvider, ClothesConsumer, ClothesContext }
