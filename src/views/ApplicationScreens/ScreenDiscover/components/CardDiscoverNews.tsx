import React                                from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Card, List, Surface, Title }       from "react-native-paper";
import { Devices }                          from "~commons";
import { Spacings }                         from "react-native-ui-lib";

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
    {
        "title":     "Bạn trai cục tính",
        "content":   "Tôi và anh quen nhau sáu tháng; anh nóng tính nhưng mỗi lần cãi nhau luôn là người làm hòa trước, chủ động xin lỗi tôi.",
        "link":      "https://vnexpress.net/ban-trai-cuc-tinh-4524426.html",
        "published": 1666180800000,
        "thumbnail": "https://vcdn1-vnexpress.vnecdn.net/2022/10/19/-1704-1666169199.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Vs9HjvAteR0-ISnmFVaH5w"
    },
    {
        "title":     "Dat Bike khai trương cửa hàng tại Đà Nẵng",
        "content":   "Ngày 16/10, start up xe máy điện Dat Bike chính thức khai trương cửa hàng mới tại TP Đà Nẵng.",
        "link":      "https://vnexpress.net/dat-bike-khai-truong-cua-hang-tai-da-nang-4525509.html",
        "published": 1666180800000,
        "thumbnail": "https://vcdn1-vnexpress.vnecdn.net/2022/10/19/-2574-1666175349.png?w=1200&h=0&q=100&dpr=1&fit=crop&s=s6vyzfoVV8qeU_m3WNhltQ"
    },
    {
        "title":     "Thừa Thiên Huế sẽ là trung tâm văn hóa của châu Á",
        "content":   "Thừa Thiên Huế sẽ là thành phố Festival, trung tâm văn hóa, giáo dục, du lịch, y tế của châu Á vào năm 2045, theo nhiệm vụ quy hoạch được Thủ tướng phê duyệt.",
        "link":      "https://vnexpress.net/thua-thien-hue-se-la-trung-tam-van-hoa-cua-chau-a-4525519.html",
        "published": 1666180315000,
        "thumbnail": "https://vcdn1-vnexpress.vnecdn.net/2022/10/19/-2849-1666176929.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=lvmbBKHSuMXI77dWaXWJqQ"
    },
    {
        "title":     "Vướng mắc về kinh phí di dời công trình quốc phòng để làm cao tốc",
        "content":   "Tỉnh muốn di dời trường bắn ở huyện Cẩm Xuyên và kho đạn tại huyện Thạch Hà vì không đảm bảo phạm vi an toàn, song gặp khó trong bố trí kinh phí.",
        "link":      "https://vnexpress.net/vuong-mac-ve-kinh-phi-di-doi-cong-trinh-quoc-phong-de-lam-cao-toc-4525474.html",
        "published": 1666180031000,
        "thumbnail": "https://vcdn1-vnexpress.vnecdn.net/2022/10/19/-2109-1666172606.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eAnvG238NUO2BImXjQsOTw"
    },
    {
        "title":     "Pogba hồi sinh hy vọng World Cup",
        "content":   "Tiền vệ Paul Pogba trở lại sau phẫu thuật, và còn một tháng để giành suất dự World Cup 2022 với tuyển Pháp.",
        "link":      "https://vnexpress.net/pogba-hoi-sinh-hy-vong-world-cup-4525485.html",
        "published": 1666178642000,
        "thumbnail": "https://vcdn1-thethao.vnecdn.net/2022/10/19/-7486-1666173942.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=U4G9197MIAD3ykg3abVsmg"
    }
]
const CardDiscoverNews = () => {
    return (
        <Surface elevation={ 0 } style={ styles.container }>
            <Title style={ { fontSize: 18, fontWeight: "700" } }>Tin mới nhất</Title>
            <Card>

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
        </Surface>
    );
};

export default CardDiscoverNews;

const styles = StyleSheet.create( {
    container: {
        width:     Devices.width - Spacings.s8,
        marginTop: 10
    }
} )