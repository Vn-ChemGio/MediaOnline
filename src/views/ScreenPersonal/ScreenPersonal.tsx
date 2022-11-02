import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { Divider, List } from "react-native-paper";
import { Button, Colors, Spacings, Text, View } from "react-native-ui-lib";
import Feather from "react-native-vector-icons/Feather";

import { Devices, DiscoveryScreenNavigationProp } from "~commons";


const ScreenPersonal = () => {
    const navigation = useNavigation<DiscoveryScreenNavigationProp>();

    return (
            <View style={{ flex: 1, justifyContent: "flex-start" }}>
                <ScrollView style={{ flex: 1, backgroundColor: Colors.color, paddingTop: -200 }} bounces={false}>
                    <View style={styles.header}>
                        <View absF>
                            <LinearGradient
                                    colors={[Colors.primaryVOVDiscover, "rgba(255, 145, 0, 0.8)", "rgba(250,187,221,0.1)"]}
                                    style={styles.linearGradient}/>
                        </View>

                        <View absH style={{ bottom: 0 }}>
                            <View style={styles.userInformation}>
                                <View absF>
                                    <LinearGradient
                                            colors={["rgba(0,0,0,0.8)", "rgba(180,176,176,0.2)", "rgba(54,51,51,0.6)"]}
                                            style={styles.userInformationBackground}/>
                                </View>

                                <View absF style={styles.userInformationContentUnLoggedIn}>
                                    <Text cardSubTitleOverlay>Chào bạn </Text>
                                    <Text cardContentOverlay>Mời bạn đăng ký tài khoản để có thể sử dụng hết tất cả các
                                        tính năng trên ứng dụng </Text>

                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <Button label={"Đăng ký"} size={Button.sizes.medium}
                                                backgroundColor={Colors.primary} style={styles.button} onPress={
                                            () => {
                                                navigation.navigate("Authenticate", {
                                                    screen: "ScreenLogin"
                                                })
                                            }
                                        }/>
                                        <Button label={"Đăng nhập"} size={Button.sizes.medium} outline
                                                backgroundColor={Colors.red30} style={styles.button}
                                                onPress={
                                                    () => {
                                                        navigation.navigate("Authenticate", {
                                                            screen: "ScreenRegister"
                                                        })
                                                    }
                                                }
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.actions}>
                        <Divider/>
                        <List.Item
                                title={"Cài đặt"}
                                left={props => <List.Icon {...props}
                                                          icon={() => <Feather name={"settings"} size={24}/>}/>}
                                right={props => <List.Icon {...props}
                                                           icon={() => <Feather name={"chevron-right"} size={24}/>}/>}

                                onPress={() => {
                                    navigation.navigate("ScreenWebView", {
                                        title: "Cài đặt",
                                        uri: ""
                                    })
                                }}
                        />
                        <Divider/>
                        <List.Subheader>Thông tin</List.Subheader>
                        <List.Item
                                title={"Đặc quyền của thành viên"}
                                left={props => <List.Icon {...props} icon={() => <Feather name={"user"} size={24}/>}/>}
                                right={props => <List.Icon {...props}
                                                           icon={() => <Feather name={"chevron-right"} size={24}/>}/>}

                                onPress={() => {
                                    navigation.navigate("ScreenWebView", {
                                        title: "Đặc quyền của thành viên",
                                        uri: ""
                                    })
                                }}
                        />
                        <List.Item
                                title={"Điều khoản sử dụng"}
                                left={props => <List.Icon {...props}
                                                          icon={() => <Feather name={"clipboard"} size={24}/>}/>}
                                right={props => <List.Icon {...props}
                                                           icon={() => <Feather name={"chevron-right"} size={24}/>}/>}

                                onPress={() => {
                                    navigation.navigate("ScreenWebView", {
                                        title: "Điều khoản sử dụng",
                                        uri: ""
                                    })
                                }}
                        />
                        <List.Item
                                title={"Chính sách bảo mật"}
                                left={props => <List.Icon {...props}
                                                          icon={() => <Feather name={"shield"} size={24}/>}/>}
                                right={props => <List.Icon {...props}
                                                           icon={() => <Feather name={"chevron-right"} size={24}/>}/>}

                                onPress={() => {
                                    navigation.navigate("ScreenWebView", {
                                        title: "Chính sách bảo mật",
                                        uri: ""
                                    })
                                }}
                        />
                        <List.Item
                                title={"Quảng cáo"}
                                left={props => <List.Icon {...props} icon={() => <Feather name={"book"} size={24}/>}/>}
                                right={props => <List.Icon {...props}
                                                           icon={() => <Feather name={"chevron-right"} size={24}/>}/>}

                                onPress={() => {
                                    navigation.navigate("ScreenWebView", {
                                        title: "Quảng cáo",
                                        uri: ""
                                    })
                                }}
                        />
                        <List.Item
                                title={"Hỗ trợ"}
                                left={props => <List.Icon {...props}
                                                          icon={() => <Feather name={"help-circle"} size={24}/>}/>}
                                right={props => <List.Icon {...props}
                                                           icon={() => <Feather name={"chevron-right"} size={24}/>}/>}

                                onPress={() => {
                                    navigation.navigate("ScreenWebView", {
                                        title: "Hỗ trợ",
                                        uri: ""
                                    })
                                }}
                        />
                        <List.Item
                                title={"Góp ý - Báo Lỗi"}
                                left={props => <List.Icon {...props} icon={() => <Feather name={"flag"} size={24}/>}/>}
                                right={props => <List.Icon {...props}
                                                           icon={() => <Feather name={"chevron-right"} size={24}/>}/>}

                                onPress={() => {
                                    navigation.navigate("ScreenWebView", {
                                        title: "Góp ý - Báo Lỗi",
                                        uri: ""
                                    })
                                }}
                        />

                        <Divider/>
                    </View>

                    <View style={styles.footer}>
                        <View style={{ alignItems: "center" }}>
                            <Image style={{ height: 30, width: Devices.width - Spacings.s4 * 2 }}
                                   source={require("~assets/images/vov_full_text.png")} resizeMode={"contain"}
                                   resizeMethod={"scale"}/>
                        </View>
                        <Text cardContentOverlay>© 2022 Bản quyền thuộc về Wind Blade</Text>
                        <Text cardContentOverlay>Nghiêm cấm sao chép dưới mọi hình thức khi chưa được sự đồng ý của tác
                            giả</Text>

                        <View style={styles.iconsGroup}>
                            <Feather name={"facebook"} size={24} style={styles.icon}/>
                            <Feather name={"youtube"} size={24} style={styles.icon}/>
                            <Feather name={"twitter"} size={24} style={styles.icon}/>
                        </View>


                    </View>
                    <View style={{ height: 100 }}/>
                </ScrollView>

            </View>
    );
};

export default ScreenPersonal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        height: 250,
        paddingBottom: Spacings.s4,
        //backgroundColor: "green"
    },
    linearGradient: {
        ...StyleSheet.absoluteFillObject,
        height: 150,
        borderBottomLeftRadius: Spacings.s4 * 2,
        borderBottomRightRadius: Spacings.s4 * 2
    },
    userInformation: {
        backgroundColor: Colors.grey70,
        height: 200,
        borderWidth: 0.4,
        borderRadius: Spacings.s4,
        marginHorizontal: Spacings.s8
    },
    userInformationBackground: {
        height: 200,
        borderRadius: Spacings.s4
    },
    userInformationContentUnLoggedIn: {
        flex: 1,
        padding: Spacings.s4,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    button: {
        marginHorizontal: Spacings.s1,
        width: 120
    },
    actions: {
        marginTop: Spacings.s4
    },
    footer: {
        marginTop: Spacings.s4,
        justifyContent: "flex-start",
    },
    iconsGroup: {
        flexDirection: "row",
        marginVertical: Spacings.s4,
        marginHorizontal: Spacings.s2,
    },
    icon: {
        flexDirection: "row",
        marginHorizontal: Spacings.s2,
    }
})
