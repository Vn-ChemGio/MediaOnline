import * as React               from "react";
import { FlatList }             from "react-native";
import { Card, Surface, Title } from "react-native-paper";

const data = [
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

function Index() {
    return (
        <Surface elevation={ 0 }>
            <Title>Radio Online</Title>
            <FlatList horizontal
                      data={ data }
                      showsHorizontalScrollIndicator={ false }
                      renderItem={ ( { item } ) => (
                          <Card style={ { width: 100, height: 100, marginHorizontal: 4 } }>
                              <Card.Cover source={ item.image } resizeMethod={ "scale" } resizeMode={ "center" } style={ { height: 75 } }/>
                              <Card.Content style={ { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: -10 } }>
                                  <Title style={ { fontSize: 10, fontWeight: "700" } }>{ item.name }</Title>
                                  <Title style={ { fontSize: 10 } }>{ item.description }</Title>
                              </Card.Content>

                          </Card>
                      ) }
            />
        </Surface>


    );
}

export default Index;