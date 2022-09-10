import React from 'react';
import {Card, Colors, Spacings, Text, View} from "react-native-ui-lib";
import {NewsItem} from "../../../commons";
import {StyleSheet} from "react-native";

let News: NewsItem[] = [
    {title: "Packaging Design", time: "11:30", progress: 10, id: 1},
    {title: "Product Design", time: "14:30", progress: 60, id: 2},
    {title: "Packaging Design", time: "21:30", progress: 30, id: 3},
    {title: "Product Design", time: "22:30", progress: 100, id: 4},
]

const Item = ({item}: { item: NewsItem }) => {
    return (<View row>
        <View flex-1 row margin-s2 centerV height={21} spread>
            <View row left centerV>
                {/*<Progress.Circle size={18} indeterminate={true} animated={false} progress={item.progress / 100}*/}
                {/*                 color={Colors.warnColor} unfilledColor='#F4F3FD'/>*/}

                <Text body marginL-s2>{item.title}</Text>
            </View>
            <Text body centerV>{item.time}</Text>
        </View>
    </View>)
}

const Events = () => {
    if (!News.length)
        return null;
    return (
        <View style={styles.container}>
            <View marginH-s4 marginB-s4>
                <Text heading marginB-s2>Sự kiện hôm nay</Text>
                <Card flex-1 paddingH-s2 paddingV-s2 borderRadius={12}>
                    {News.map(item => <Item item={item} key={item.id}/>)}
                </Card>
            </View>
        </View>

    );
};

export default Events;


const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})
