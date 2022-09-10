import React from 'react';
import {Card, Image, Text, View} from "react-native-ui-lib";
import {StyleSheet} from "react-native";

const Banner = () => {
    return (
        <View style={styles.container} center marginH-s4 marginB-s4>
            <Card absF borderRadius={16} backgroundColor='#EFE0FF' marginH-s4>
                <View absF marginV-s4 marginR-120 marginL-s4>
                    <View flex-1 left top>
                        <Text heading>COVID 19</Text>
                        <Text body>Off-line exchange of learning experiences</Text>
                    </View>
                </View>

                <View absF margin-s4>
                    <View flex-1 right centerV>
                        <View height={100} width={100} backgroundColor='#F5ECFF' style={{borderRadius: 50}}>
                            <View absF center>
                                <View height={80} width={80} backgroundColor='#F8F2FF' style={{borderRadius: 40}}/>
                            </View>

                            <View absF center>
                                <View absT centerH>
                                    <Image source={require('../../../../assets/images/banner-avatar-1.png')} width={64} height={64}/>
                                </View>

                                <View absL bottom paddingT-15>
                                    <Image source={require('../../../../assets/images/banner-avatar-2.png')} width={64} height={64}/>
                                </View>

                                <View absR bottom paddingT-15>
                                    <Image source={require('../../../../assets/images/banner-avatar-3.png')} width={64} height={64}/>
                                </View>

                            </View>

                        </View>
                    </View>
                </View>
            </Card>
        </View>
    )
};

export default Banner;
const styles = StyleSheet.create({
    container: {
        height: 120,
        width: '100%'
    }
})
