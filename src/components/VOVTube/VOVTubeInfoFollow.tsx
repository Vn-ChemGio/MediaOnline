import React                      from "react";
import { Text, Typography, View } from "react-native-ui-lib";

interface InfoVOVTubeFollowProps {
    name?: string,
    follower?: number
}

Typography.loadTypographies(
    {
        titleFollow:    { fontSize: 14, fontWeight: "500", lineHeight: 20 },
        subTitleFollow: { fontSize: 12, fontWeight: "400", lineHeight: 18 },
    } );

interface VovTubeInfoFollowProps {
    name?: string,
    follower?: number
}

const VOVTubeInfoFollow = ( props: InfoVOVTubeFollowProps ) => {
    return (
        <View flex>
            <Text titleFollow color={ "rgb(3, 3, 3)" }>{ props.name }</Text>
            <Text subTitleFollow color={ "rgb(96, 96, 96)" }>{ props.follower }N người đăng ký</Text>
        </View>
    )
}


export default VOVTubeInfoFollow;
