import React                   from "react";
import { StyleSheet }          from "react-native";
import { Card, List }                   from "react-native-paper";
import { Colors, Spacings, Text, View } from "react-native-ui-lib";


const data             = [
    {
        "title":     "Nga ban hành thiết quân luật ở 4 tỉnh Ukraine",
        "content":   "Tổng thống Nga Putin tuyên bố thiết quân luật tại 4 tỉnh sáp nhập từ Ukraine.",
        "link":      "https://vnexpress.net/nga-ban-hanh-thiet-quan-luat-o-4-tinh-ukraine-4525535.html",
        "published": 1666181384000,
        "thumbnail": "https://vcdn1-vnexpress.vnecdn.net/2022/10/19/-9856-1666181264.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=NBvgQFbps-q5QcUnVSx9sw"
    },
    {
        "title":     "Camera trên iPhone 14 Pro Max: Đơn giản tạo khác biệt",
        "content":   "iPhone 14 Pro Max nâng cấp đáng kể về camera với độ phân giải cao, chụp tối tốt, nhưng sự đơn giản trong sử dụng mới là lợi thế của sản phẩm.",
        "link":      "https://vnexpress.net/camera-tren-iphone-14-pro-max-don-gian-tao-khac-biet-4525452.html",
        "published": 1666181166000,
        "thumbnail": "https://vcdn1-sohoa.vnecdn.net/2022/10/19/-2676-1666174230.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=r3OkqSTXrl3jTz2mfMGLIw"
    },
    {
        "title":     "EU chuẩn bị trừng phạt Iran",
        "content":   "EU cảnh báo đang chuẩn bị biện pháp trừng phạt Iran sau khi \"thu thập đầy đủ bằng chứng\" rằng nước này cung cấp UAV cho Nga dùng ở Ukraine.",
        "link":      "https://vnexpress.net/eu-chuan-bi-trung-phat-iran-4525528.html",
        "published": 1666180897000,
        "thumbnail": "https://vcdn1-vnexpress.vnecdn.net/2022/10/19/-4029-1666179863.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=JpspWO5bjx5WTJepRpP8pQ"
    },
    {
        "title":     "Thiết bị phát điện từ sóng công suất lớn nhất thế giới",
        "content":   "Công ty Ocean Energy của Ireland đang phát triển một thiết bị năng lượng sóng nổi công suất lớn mang tên OE35 để khai thác sức mạnh của đại dương.",
        "link":      "https://vnexpress.net/thiet-bi-phat-dien-tu-song-cong-suat-lon-nhat-the-gioi-4525138.html",
        "published": 1666180800000,
        "thumbnail": "https://vcdn1-vnexpress.vnecdn.net/2022/10/19/-6537-1666155693.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=gzq7yXCbIeN6JzHbhMHebg"
    },
    {
        "title":     "Tử thần trên bầu trời Kiev",
        "content":   "Chiếc UAV bay lượn như con diều vô hại trước mắt người dân Kiev chưa biết nó là gì, trước khi bất ngờ lao xuống, gieo chết chóc từ không trung.",
        "link":      "https://vnexpress.net/tu-than-tren-bau-troi-kiev-4524784.html",
        "published": 1666180800000,
        "thumbnail": "https://vcdn1-vnexpress.vnecdn.net/2022/10/18/-3104-1666069324.png?w=1200&h=0&q=100&dpr=1&fit=crop&s=9FBRDQw6UNtlaTm5daK9NQ"
    },
]
const CardDiscoverNews = () => {
    return (
        <View style={ styles.container }>
            <Text title style={ styles.title }>Tin mới nhất</Text>
            <Card   style={  { marginLeft: Spacings.s4, marginRight: Spacings.s4 } }>

                {
                    data.map( ( item, index ) => (
                        <List.Item
                            title={ item.title }
                            titleStyle={ { fontWeight: "700" } }
                            description={ item.content }
                            right={ props => <List.Icon { ...props } icon="play"/> }
                            key={ index }
                        />
                    ) )
                }
            </Card>
        </View>
    );
};

export default CardDiscoverNews;

const styles = StyleSheet.create( {
    container: {
        width:     "100%",
        marginTop:       Spacings.s2,
    },
    title:     {
        fontSize:     18,
        fontWeight:   "700",
        marginBottom:      Spacings.s2,
        paddingHorizontal: Spacings.s4,
    },
} )