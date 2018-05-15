import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";

const itemStyle = EStyleSheet.create({
    circleContainer: {
        height: 50,
        width: 52,
        alignItems: 'center',
    },
    circleInactive: {
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: '$primaryNonSelect', 
    },
    circleActive: {
        height: 50,
        width: 50,
        backgroundColor: '$primary',
        flex: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleActiveInside: {
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: '$yellow',
    }, 
    line: {
        width: 11,
        backgroundColor: '$blueGray',
        position: 'absolute',
        height: '100%',
        left: 37,
    },
    horizontalLine: {
        width: '95%',
        height: 1, 
        position: 'absolute',
        backgroundColor: '$primaryNonSelect',
        top: 34,
        left: 30,
    },
    horizontalLineInactive: {
        top: 20,
    },
    titleContainer: {
        flexDirection: 'row',
    },
    titleContainerActive: {
        marginBottom: 16,
    },
    titleContainerInactive: {

    },
    titleActive: {
        fontSize: 22,
        color: '$primary',
        flex: 1,
    },
    titleInactive: {
        flex: 1, 
        fontSize: 18,
        color: '$primaryNonSelect',
    },
    iconContainerActive: {
        height: 30,
        width: 30,
        borderRadius: 6,
        backgroundColor: '$primary',
    },
    iconContainerInactive: {

    },
    valueActive: {

    }, 
    valueInactive: {

    },
    choiceContainer: {
        alignItems: 'center',
        marginRight: 24,
    },
    choiceIconActive: {
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: '$primary',
    },
    choiceIconInactive: {
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: '$primaryNonSelect',
    },
    choiceTextActive: {
        color: '$primary',
        fontSize: 12,
    },
    choiceTextInactive: {
        color: '$primaryNonSelect',
        fontSize: 12,
    }
});

const CustomProgramItem = ({
    active
}) => {
    const marginLeft = -30;
    const paddingLeft = 46;
    return (
        <View style={{flexDirection: 'row', paddingHorizontal: 16, marginBottom: 16 }}>
            <View style={itemStyle.line}></View>
            <View style={[itemStyle.horizontalLine, !active && itemStyle.horizontalLineInactive]}></View>
            <View style={itemStyle.circleContainer}>
                <View style={active ? itemStyle.circleActive : itemStyle.circleInactive}>
                    <View style={active && itemStyle.circleActiveInside}></View>
                </View>
            </View>
            <View style={{flex: 1, marginLeft: marginLeft}}> 
                <View style={[{paddingLeft}, itemStyle.titleContainer, active ? itemStyle.titleContainerActive : itemStyle.titleContainerInactive]}>
                    <Text style={active ? itemStyle.titleActive : itemStyle.titleInactive}>Color</Text>
                    <View style={{flexDirection: 'row'}}> 
                        <View style={itemStyle.iconContainerActive}>
                            <Image />
                        </View> 
                        <Text>Color</Text>
                        <Image />
                    </View>
                </View>
                {active && <View style={{flexDirection: 'row', paddingLeft: paddingLeft}}>
                    <View style={itemStyle.choiceContainer}>
                        <View style={itemStyle.choiceIconInactive}><Image /></View>
                        <Text style={itemStyle.choiceTextInactive}>White</Text>
                    </View>
                    <View style={itemStyle.choiceContainer}>
                        <View style={itemStyle.choiceIconActive}><Image /></View>
                        <Text style={itemStyle.choiceTextActive}>White</Text>
                    </View>
                </View>
                }
            </View>
        </View>
    )
};

export default CustomProgramItem;
