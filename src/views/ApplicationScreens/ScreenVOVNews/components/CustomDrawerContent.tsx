import React                 from "react";
import { ScrollView, View }  from "react-native";
import { Divider, Text }     from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors, Spacings }  from "react-native-ui-lib";
import Icon                  from "react-native-vector-icons/Ionicons";

import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";

import { VOVNewsChannelItem } from "~commons";


interface CustomDrawerContentProps extends DrawerContentComponentProps {
    listChannels: VOVNewsChannelItem[],
}

const CustomDrawerContent = ( props: CustomDrawerContentProps ) => {
    const insert                              = useSafeAreaInsets();
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;
