import React                   from "react";
import { ImageSourcePropType } from "react-native";
import { Card }                from "react-native-ui-lib";

import { Devices }         from "~commons";

import VOVTubeInfoFollow   from "./VOVTubeInfoFollow";
import VOVTubeButtonFollow from "./VOVTubeButtonFollow";

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

            <Card c containerStyle={ { marginBottom: 15 } } onPress={ () => {
            } }>

                <Card.Section center-H imageStyle={ { height: 200, width: Devices.width - 50, resizeMode: "cover" } }
                              imageSource={ image }
                              style={ { paddingBottom: 10 } }
                />

                <Card.Section
                    content={ [
                        { text: title, text60: true, $textDefault: true, maxLines: 2 },
                        { text: iconOnRight, text60: true, $textDefault: true },
                    ] }
                    style={ { paddingHorizontal: 10 } }
                    contentStyle={ { flexDirection: "row", justifyContent: "space-between" } }
                />


                <Card.Section
                    content={ [
                        { text: <VOVTubeInfoFollow name={ chanelName } follower={ chanelFollower }/> },
                        {
                            text: <VOVTubeButtonFollow onPress={ () => {
                            } }/>
                        }
                    ] }
                    style={ { padding: 10, paddingTop: 5 } }
                    contentStyle={ { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }
                />
            </Card>
        </>
    );
};

export default VOVTubeCardItem;
