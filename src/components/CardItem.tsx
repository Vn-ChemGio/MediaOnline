import React                   from "react";
import { Card }                from "react-native-ui-lib";
import { ImageSourcePropType } from "react-native";

import { Devices }         from "~commons";
import ButtonVOVTubeFollow from "./ButtonVOVTubeFollow";
import InfoVovTubeFollow   from "./InfoVOVTubeFollow";

interface CardItemProps {
    title: string,
    iconOnRight: string,
    chanelName: string,
    chanelFollower: number,
    image: ImageSourcePropType
}

const CardItem = ( { chanelName, chanelFollower, iconOnRight, image, title }: CardItemProps ) => {
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
                        { text: title, text60: true, $textDefault: true, maxLines:2 },
                        { text: iconOnRight, text60: true, $textDefault: true },
                    ] }
                    style={ { paddingHorizontal: 10 } }
                    contentStyle={ { flexDirection: "row", justifyContent: "space-between" } }
                />


                <Card.Section
                    content={ [
                        { text: <InfoVovTubeFollow name={ chanelName } follower={ chanelFollower }/> },
                        {
                            text: <ButtonVOVTubeFollow onPress={ () => {
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

export default CardItem;
