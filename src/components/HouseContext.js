import React, { useState, createContext } from 'react'
import { housesData } from '../data'

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [query, setQuery] = useState("");
    const [country, setCountry] = useState("Location (any)");
    const [price, setPrice] = useState("price range (any)");
    const [type, setType] = useState("type (any)");


    const handleClick = () => {
        console.log(price);

        // function which checks if string has (any) 
        const isDefault = (str) => {
            return str.split(' ').includes('(any)')
        }

        // Price spliting 
        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split(' ')[2]);

        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);

            // if all values are selected
            if( house.country === country && house.type === type && housePrice >= minPrice && housePrice <= maxPrice){
                return house;
            }

            // if all values are default
            if( isDefault(country) && isDefault(type) && isDefault(price)){
                return house;
            }

            // if country is not default
            if( !isDefault(country) && isDefault(type) && isDefault(price)){
                if(house.country === country){
                    return house; 
                };
            }
            
            // if type is not default
            if( isDefault(country) && !isDefault(type) && isDefault(price)){
                if(house.type === type){
                    return house;
                };
            }
            
            // if price is not default
            if( isDefault(country) && isDefault(type) && !isDefault(price)){
                if(housePrice >= minPrice && housePrice <= maxPrice){
                    return house;
                }
            }

            // if country and type is not deault
            if( !isDefault(country) && !isDefault(type) && isDefault(price)){
                return house.country === country && house.type === type;
            }

             // if country and price is not default
             if( !isDefault(country) && isDefault(type) && !isDefault(price)){
                if(housePrice >= minPrice && housePrice <= maxPrice){
                    return house.country === country;
                }
            }

            // if price and type is not deault
            if( isDefault(country) && !isDefault(type) && !isDefault(price)){
                if(housePrice >= minPrice && housePrice <= maxPrice){
                    return house.type === type;
                }
            }            

        })
    
        console.log(newHouses);
    

        setTimeout(() => {
            return newHouses.lenght < 1 ? setHouses([]) : setHouses(newHouses);
        })

    }

    return (
        <HouseContext.Provider value={{
            houses,
            setHouses,
            query,
            setQuery,
            country,
            setCountry,
            price,
            setPrice,
            type,
            setType,
            handleClick,
        }}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseContextProvider;

