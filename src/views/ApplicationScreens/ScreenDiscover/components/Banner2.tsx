import React from 'react';
import {Card, Image, Text, View} from "react-native-ui-lib";
import {StyleSheet} from "react-native";

const Banner2 = () => {
    return (
        <View style={styles.container} center marginH-s4 marginB-s4>
            <Card absF borderRadius={16} backgroundColor='#EAEAFF'  marginH-s4>
                <View absF margin-s4>
                    <View flex-1 left centerV>
                        <View height={120} width={120}>
                            <View absF center>
                                <Image source={require('../../../../assets/images/banner-happy-new-year.png')} height={120} width={120} resizeMethod="resize" />
                            </View>
                        </View>
                    </View>
                </View>
                <View absF marginV-s4 marginL-150 marginR-s4>
                    <View flex-1 right top>
                        <Text heading style={{textAlign:"right"}}>NewYear 2022</Text>
                        <Text body style={{textAlign:"right"}}>Merry Christmas and Happy New Year </Text>
                    </View>
                </View>


            </Card>
        </View>
    )
};

export default Banner2;
const styles = StyleSheet.create({
    container: {
        height: 120,
        width: '100%'
    }
})
