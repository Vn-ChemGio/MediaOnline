import React from 'react';
import {ImageSourcePropType, StyleSheet} from 'react-native';
import {Button, Card, Colors, Image, Spacings, Text, ThemeManager, View} from "react-native-ui-lib";
import {ScrollView} from "react-native-gesture-handler";
import {normalizedFontSize} from "~commons";

const CardNavigation = ({
                            source,
                            content,
                            alias,
                            onPress,
                            style,
                        }: { source: ImageSourcePropType, content: string, alias?: string, onPress?: () => {}, style?: StyleMedia }) => {

    return (
        <View width={260} {...style} marginR-s4>
            <Card absF enableShadow row backgroundColor='#CEECFE'>
                <View absF marginV-s4 bottom right>
                    <Image source={source} cover={false}/>
                </View>
                <View absF marginV-s4 marginR-80 marginL-s4 flex spread>
                    <Text heading>{content}</Text>

                    {alias ? (<View width={120}>
                            <Button onPress={() => console.log('Pressed')} square label={alias} style={styles.button} size={Button.sizes.small}/>
                        </View>)
                        : null}
                </View>
            </Card>
        </View>
    )

}


const NavigationMenu = () => {
    return (
        <View style={styles.container}>
            <View absF marginV-s4>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <CardNavigation content="Bạn muốn nghe đài?" alias="Radio Online"
                                    source={require('../../../../assets/images/menu-01.png')}
                                    style={{marginLeft: Spacings.s4}}/>
                    <CardNavigation content="Bạn muốn xem truyền hình?" alias="Xem Ngay"
                                    source={require('../../../../assets/images/menu-02.png')}/>
                    <CardNavigation content="Bạn muốn nghe nhạc?" alias="Âm Nhạc"
                                    source={require('../../../../assets/images/menu-03.png')}/>
                    <CardNavigation content="Bạn muốn cập nhật tin tức?" alias="Đọc báo"
                                    source={require('../../../../assets/images/menu-04.png')}/>

                </ScrollView>
            </View>
        </View>
    );
};

export default NavigationMenu;

const styles = StyleSheet.create({
    container: {
        height: 175,
        width: '100%',
    },
    card:{
        borderRadius: 12,
        borderBottomWidth: 2,
        borderBottomColor: '#d6d5db',
        borderTopWidth: 1,
        borderTopColor: '#e5e4ec',
    },
    button: {
        borderRadius: 4,
        backgroundColor: '#FF6905',
        labelStyle: {
            fontSize: normalizedFontSize(12),
            textAlign: 'justify',
            fontFamily: 'Poppins-SemiBold',
            padding: 0,
        },
        size: Button.sizes.small
    }
})
