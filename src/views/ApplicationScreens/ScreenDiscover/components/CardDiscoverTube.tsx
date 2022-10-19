import React                      from "react";
import { StyleSheet, Text, View } from "react-native";
import { List, Surface, Title }   from "react-native-paper";
const data             = [
    {
        name:        "VOV 1",
        description: "Thời sự",
        image:       require( "~assets/images/logo-vov1.png" )
    },
    {
        name:        "VOV 2",
        description: "VH - XH",
        image:       require( "~assets/images/logo-vov2.png" )
    },
    {
        name:        "VOV 3",
        description: "Âm Nhạc",
        image:       require( "~assets/images/logo-vov3.png" )
    },
    {
        name:        "VOV 4",
        description: "Tây Nguyên",
        image:       require( "~assets/images/logo-vov4.png" )
    },
    {
        name:        "VOV 4",
        description: "Tây Bắc",
        image:       require( "~assets/images/logo-vov4.png" )
    },
    {
        name:        "VOV 4",
        description: "Tây Bắc",
        image:       require( "~assets/images/logo-vov4.png" )
    },
    {
        name:        "VOV 4",
        description: "Tây Bắc",
        image:       require( "~assets/images/logo-vov4.png" )
    }, {
        name:        "VOV 4",
        description: "Tây Bắc",
        image:       require( "~assets/images/logo-vov4.png" )
    }


]
const CardDiscoverTube = () => {
    return (
        <Surface elevation={ 0 } style={ { backgroundColor: "red" } }>
            <Title style={ { fontSize: 18, fontWeight: "700" } }>Tin mới nhất</Title>
            {
                data.map( ( item, index ) => (
                    <List.Item
                        title={ item.name }
                        description={ item.description }
                        right={ props => <List.Icon { ...props } icon="folder"/> }
                        key={ index }
                    />
                ) )
            }
        </Surface>
    );
};

export default CardDiscoverTube;

const styles = StyleSheet.create( {
    container: {
        flex:           1,
        justifyContent: "center",
        alignItems:     "center"
    }
} )