import React, { Component, useEffect } from "react"
import { View, Text, Image, Dimensions, Platform, NativeModules } from 'react-native'
const { StatusBarManager } = NativeModules;

import Carousel from 'react-native-snap-carousel'

// Vincenzo's class based component

let slideData = [
    {
        title: "Councils",
        description: "Area, Stake and Ward leadership communication.",
        image: require("../assets/Screens/tour1.png")
    },
    {
        title: "Agendas",
        description: "Post agendas so councils come inspired & prepared.",
        image: require("../assets/Screens/tour2.png")
    },
    {
        title: "Discussions",
        description: "Start council wide or private discussions when you're prompted.",
        image: require("../assets/Screens/tour3.png")
    },
    {
        title: "Assignments",
        description: "Create, delegate or complete assignments during the week.",
        image: require("../assets/Screens/tour4.png")
    },
]

export default class MyCarousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentIndex: 0
        }

        this.onSnapToItem = this.onSnapToItem.bind(this)
    }


    _renderItem({ item, index }) {
        return (
            <View style={itemViewStyle}>
                <Text style={itemTitleStyle}>{item.title}</Text>
                <Text style={itemDescriptionStyle}>{item.description}</Text>
                <Image source={item.image} style={{ resizeMode: "cover"}} />
            </View>
        )
    }

    onSnapToItem(slideIndex) {
        this.setState({ currentIndex: slideIndex })
    }

    render() {
        return (
            <>
                <CarouselPositionList length={slideData.length} position={this.state.currentIndex} />
                <Carousel
                    ref={(c) => { this._carousel = c }}
                    data={slideData}
                    renderItem={this._renderItem}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width}
                    onBeforeSnapToItem={this.onSnapToItem}
                    loop={true}
                    contentContainerStyle={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                />
            </>
        )
    }
}

const CarouselPositionList = props => {

    const generateArray = n => {
        const array = []

        for (let i = 0; i < n; i++)
            array.push(i)

        return array
    }

    const isActive = index => index === props.position

    const positions = generateArray(props.length)

    return (
        <View style={carouselPositionListStyle}>
            {
                positions.map(index =>
                    <CarouselPosition key={index} isActive={isActive(index)} />
                )
            }
        </View>
    )
}

const CarouselPosition = ({ isActive }) => {
    const getColor = _ => isActive ? "#288365" : "lightgray"

    const carouselStyle = {
        ...defaultCarouselPositionStyle,
        backgroundColor: getColor(),
    }

    return <View style={carouselStyle} />
}

const STATUSBAR_HEIGHT = (Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT) * 1;

const itemViewStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%"
}

const itemTitleStyle = {
    fontSize: 30,
    fontFamily: "gotham"
}

const itemDescriptionStyle = {
    marginHorizontal: "10%",
    textAlign: "center",
    marginVertical: 15,
    fontSize: 16,
    fontFamily: "bern-r",
    lineHeight: 22
}

const carouselPositionListStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: STATUSBAR_HEIGHT,
    zIndex: 1
}

const defaultCarouselPositionStyle = {
    width: 11,
    height: 11,
    borderRadius: 11 / 2,
    marginHorizontal: 5
}