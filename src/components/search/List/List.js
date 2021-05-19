import React from 'react';
import {
    ListWrapper,
    Card,
    Icon,
    Name,
    ButtonStyle,
    ListMenuWrapper
} from './ListSetting'

const Cards = ({listClick, showDetail, icon, name}) => (
    <Card onClick={listClick}>
        <Icon src={icon} />
        <Name>{name}</Name>
    </Card>
)

const SortButton = ({text, fun, arg}) => <ButtonStyle onClick={()=>fun(arg)}>{text}</ButtonStyle>

const ListMenu = ({handleSortByRating, handleSortByPriceLevel, handleSortByUserRatings}) => (
    <ListMenuWrapper>
        <SortButton fun={handleSortByRating} text="By Rating" />
        <SortButton fun={handleSortByPriceLevel} text="By Price Level" />
        {/*<SortButton arg={true} fun={handleSortByPriceLevel} text="Price low to high" />*/}
        {/*<SortButton fun={handleSortByPriceLevel} text="Price high to low" />*/}
    </ListMenuWrapper>
)


const List = ({listClick, places, handleSortByRating, handleSortByPriceLevel, handleSortByUserRatings, showDetail}) => (
    <ListWrapper>
        <ListMenu
            handleSortByRating={handleSortByRating}
            //handleSortByPriceLevel={handleSortByPriceLevel}
            handleSortByPriceLevel={handleSortByPriceLevel}
        />
        {places.map((place,index)=>{
            return(
                <Cards
                    key={index}
                    icon={place.icon}
                    name={place.name}
                    // showDetail={()=>{showDetail(place.place_id)}}
                    listClick={()=>{listClick(place.place_id)}}
                />
            )})}
    </ListWrapper>
)


export default List