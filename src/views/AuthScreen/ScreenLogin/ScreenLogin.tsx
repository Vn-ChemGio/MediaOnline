import React, { useState }                                from "react";
import { Dimensions, ScrollView, StatusBar, StyleSheet, } from "react-native";
import { Button, Text, Typography, View }                 from "react-native-ui-lib";

import * as Animatable             from "react-native-animatable";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets }       from "react-native-safe-area-context";

import { useNavigation }       from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage            from "@react-native-async-storage/async-storage";

import { ButtonAuthenticate, MaterialTextField } from "../../../components";
import { AuthenticateStackNavigationParamList }  from "~commons";


const DURATION          = 400;
const { width, height } = Dimensions.get( "window" )

Typography.loadTypographies( {
    h1: { fontSize: 30, fontWeight: "700", lineHeight: 50 },
    h3: { fontSize: 14, fontWeight: "300", lineHeight: 24 },
} );

type loginScreenProp = StackNavigationProp<AuthenticateStackNavigationParamList, "ScreenLogin">;

const SignIn = () => {
    const [ email, setEmail ]       = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const navigation                = useNavigation<loginScreenProp>();
    const insets                    = useSafeAreaInsets();

    const signIn = async () => {
        await AsyncStorage.setItem( "@userLoggedIn", JSON.stringify( { username: email, email, password } ) );
    }

    return (
        <>
            <StatusBar translucent={ true } barStyle={ "light-content" } backgroundColor="transparent"/>
            <KeyboardAwareScrollView extraScrollHeight={ 50 }
                                     scrollEnabled={ true }
                                     enableAutomaticScroll={ true }
                                     contentContainerStyle={ styles.container }
            >
                <ScrollView style={ styles.content }>
                    <View center style={ styles.header }>
                        <Animatable.Image
                            source={ require( "./assets/background.png" ) }
                            style={ { ...styles.headerImage, zIndex: 1, top: -40 } }
                            animation="fadeInDown"
                            delay={ DURATION + 300 }
                        />

                        <Animatable.Image
                            source={ require( "./assets/background-2.png" ) }
                            style={ { ...styles.headerImage, zIndex: 9 } }
                            animation="fadeInDown"
                            delay={ DURATION + 900 }
                        />
                    </View>

                    <View style={ styles.form }>
                        <Text h1 marginT-20 animated center animateTo={ "center" }>Login</Text>

                        <MaterialTextField marginH-20 marginV-10
                                           placeholder={ "Email" }
                                           onChangeText={ ( value: string ) => setEmail( value.trim() ) }
                                           validate={ [ "required", "email" ] }
                                           validationMessage={ [ "Field is required", "Email is invalid", ] }
                                           maxLength={ 50 }
                            //onChangeValidity={(isValid: boolean) => console.warn('validity changed:', isValid, Date.now())}
                        />

                        <MaterialTextField marginH-20 marginV-10
                                           placeholder={ "Password" } onChangeText={ value => setPassword( value ) }
                                           validate={ [ "required", ( value: string ) => value.length > 8 ] }
                                           validationMessage={ [ "Field is required", "Password is too short" ] }
                                           maxLength={ 50 }
                            //onChangeValidity={(isValid: boolean) => console.warn('validity changed:', isValid, Date.now())}
                        />

                        <ButtonAuthenticate label="Sign In" onPress={ signIn }/>
                    </View>

                    <View style={ { ...styles.footer, marginBottom: insets.bottom } }>
                        <Button blue30 link
                                label="Create New Account" labelStyle={ Typography.text70L }
                                onPress={ () => {
                                    navigation.navigate( "ScreenRegister" )
                                } }
                        />
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        </>
    );
};


export default SignIn;


const styles = StyleSheet.create( {
    container:   {
        flex:            1,
        justifyContent:  "space-between",
        backgroundColor: "#fff",
    },
    content:     {
        height,
    },
    header:      {
        width,
        height: 250,
        top:    -120,
    },
    headerImage: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: "cover",
        width,
        height:     400
    },
    form:        {
        width,
        minHeight: height - 250 - 50,
        zIndex:    9
    },
    footer:      {
        zIndex: 1,
    },
    textLink:    {
        fontSize:   14,
        fontWeight: "300",
        lineHeight: 24
    }
} )
