import React                         from "react";
import { ImageSourcePropType, View } from "react-native";
import { Spacings }                  from "react-native-ui-lib";

import { Devices } from "~commons";

import VOVTubeInfoFollow        from "./VOVTubeInfoFollow";
import VOVTubeButtonFollow      from "./VOVTubeButtonFollow";
import { Card, Divider, Title } from "react-native-paper";

interface VOVTubeCardItemProps {
    title: string,
    iconOnRight: string,
    chanelName: string,
    chanelFollower: number,
    image: ImageSourcePropType
}

const VOVTubeCardItem = ( { chanelName, chanelFollower, iconOnRight, image, title }: VOVTubeCardItemProps ) => {
    return (
        <>
            <View style={ { width: Devices.width - Spacings.s8, marginTop: Spacings.s4 } }>


                <Card.Cover source={ image } style={ { borderTopLeftRadius: 10, borderTopRightRadius: 10 } }/>
                <View style={ { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }>
                    <Title style={ { fontSize: 16, lineHeight: 22, fontWeight: "700", textAlign: "justify", marginBottom: Spacings.s4 } } numberOfLines={ 1 }>{ title }</Title>
                    <Title style={ { fontSize: 16, lineHeight: 22, fontWeight: "700", textAlign: "justify", marginBottom: Spacings.s4 } }
                           numberOfLines={ 1 }>{ iconOnRight }</Title>
                </View>

                <View style={ { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: Spacings.s2 } }>
                    <VOVTubeInfoFollow name={ chanelName } follower={ chanelFollower }/>
                    <VOVTubeButtonFollow onPress={ () => {
                    } }/>
                </View>

                <Divider bold style={ { marginTop: 10, backgroundColor: "rgb(234,17,57)" } }/>
            </View>
        </>
    );
};

export default VOVTubeCardItem;
