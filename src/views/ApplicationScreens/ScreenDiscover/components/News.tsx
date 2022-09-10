import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import {Assets, Card, Text, View} from "react-native-ui-lib";
import axios from "axios";
import * as rssParser from "react-native-rss-parser";

import {NewsItem} from "~commons";


const Item = ({item}: { item: NewsItem }) => {
    return (<View row>
        <View flex-1 row marginV-s2 centerV height={21} spread>
            <View row left centerV>
                <Text marginH-s2>{Assets.emojis.heart}</Text>
                <Text body marginR-s2 numberOfLines={1} flexS>{item.title}</Text>
            </View>
        </View>
    </View>)
}


const News = () => {
    let [news, setNews] = useState<NewsItem[]>([])

    useEffect(() => {
        (async () => {
            const res = await axios.get('https://vietnamnet.vn/rss/tin-moi-nhat.rss', {
                responseType: 'text'
            });
            const feed = await rssParser.parse(res.data);
            // @ts-ignore
            setNews(feed.items.splice(0, 5) || [])
        })();
    })


    if (!news.length)
        return null;
    return (
        <View style={styles.container} marginB-s4>
            <View marginH-s4>
                <Text heading marginB-s2>Tin mới cập nhật</Text>
                <Card flex-1 paddingH-s2 paddingV-s2 borderRadius={12}>
                    {news.map(item => <Item item={item} key={item.id}/>)}
                </Card>
            </View>
        </View>

    );
};

export default News;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
})
