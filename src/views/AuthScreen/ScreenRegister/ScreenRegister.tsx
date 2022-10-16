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

type registerScreenProp = StackNavigationProp<AuthenticateStackNavigationParamList, "ScreenRegister">;


const SignUp = () => {
    const [ email, setEmail ]                     = useState( "" );
    const [ password, setPassword ]               = useState( "" );
    const [ confirmPassword, setConfirmPassword ] = useState( "" );
    const navigation                              = useNavigation<registerScreenProp>();
    const insets                                  = useSafeAreaInsets();

    const signUp = async () => {
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
                            style={ styles.headerImageBellow }
                            animation="fadeInDown"
                            delay={ DURATION + 300 }
                        />

                        <View style={ styles.headerIcon }>
                            <Animatable.Image
                                source={ require( "./assets/light-1.png" ) }
                                style={ styles.headerImageLight1 }
                                animation="slideInDown"
                                delay={ DURATION + 600 }
                            />
                            <Animatable.Image
                                source={ require( "./assets/light-2.png" ) }
                                style={ styles.headerImageLight2 }
                                animation="slideInDown"
                                delay={ DURATION + 600 }
                            />
                            <Animatable.Image
                                source={ require( "./assets/clock.png" ) }
                                style={ styles.headerImageClock }
                                animation="slideInDown"
                                delay={ DURATION + 600 }
                            />
                        </View>
                    </View>

                    <View style={ styles.form }>
                        <Text h1 marginT-20 animated center animateTo={ "center" }> Register</Text>

                        <MaterialTextField marginH-20 marginB-5
                                           placeholder={ "Email" }
                                           onChangeText={ ( value: string ) => setEmail( value.trim() ) }
                                           validate={ [ "required", "email" ] }
                                           validationMessage={ [ "Field is required", "Email is invalid", ] }
                                           maxLength={ 50 }
                                           showCharCounter={ false }
                            //onChangeValidity={(isValid: boolean) => console.warn('validity changed:', isValid, Date.now())}
                        />

                        <MaterialTextField marginH-20 marginB-5
                                           placeholder={ "Password" } onChangeText={ value => setPassword( value ) }
                                           validate={ [ "required", ( value: string ) => value.length > 8 ] }
                                           validationMessage={ [ "Field is required", "Password is too short" ] }
                                           maxLength={ 50 }
                                           showCharCounter={ false }
                            //onChangeValidity={(isValid: boolean) => console.warn('validity changed:', isValid, Date.now())}
                        />

                        <MaterialTextField marginH-20 marginB-5
                                           placeholder={ "Confirm Password" } onChangeText={ value => setConfirmPassword( value ) }
                                           validate={ [ "required", ( value: string ) => value == password ] }
                                           validationMessage={ [ "Field is required", "Confirm Password does not match" ] }
                                           maxLength={ 50 }
                                           showCharCounter={ false }
                            //onChangeValidity={(isValid: boolean) => console.warn('validity changed:', isValid, Date.now())}
                        />

                        <MaterialTextField marginH-20 marginB-5
                                           placeholder={ "Date of birth" } onChangeText={ value => setConfirmPassword( value ) }
                                           validate={ [ "required", ( value: string ) => value == password ] }
                                           validationMessage={ [ "Field is required", "Confirm Password does not match" ] }
                                           maxLength={ 50 }
                                           showCharCounter={ false }
                            //onChangeValidity={(isValid: boolean) => console.warn('validity changed:', isValid, Date.now())}
                        />
                        <MaterialTextField marginH-20 marginB-5
                                           placeholder={ "Mobile phone number" } onChangeText={ value => setConfirmPassword( value ) }
                                           validate={ [ "required", ( value: string ) => value == password ] }
                                           validationMessage={ [ "Field is required", "Confirm Password does not match" ] }
                                           maxLength={ 50 }
                                           showCharCounter={ false }
                            //onChangeValidity={(isValid: boolean) => console.warn('validity changed:', isValid, Date.now())}
                        />
                        <MaterialTextField marginH-20 marginB-5
                                           placeholder={ "Mobile phone number" } onChangeText={ value => setConfirmPassword( value ) }
                                           validate={ [ "required", ( value: string ) => value == password ] }
                                           validationMessage={ [ "Field is required", "Confirm Password does not match" ] }
                                           maxLength={ 50 }
                                           showCharCounter={ false }
                            //onChangeValidity={(isValid: boolean) => console.warn('validity changed:', isValid, Date.now())}
                        />
                        <MaterialTextField marginH-20 marginB-5
                                           placeholder={ "Mobile phone number" } onChangeText={ value => setConfirmPassword( value ) }
                                           validate={ [ "required", ( value: string ) => value == password ] }
                                           validationMessage={ [ "Field is required", "Confirm Password does not match" ] }
                                           maxLength={ 50 }
                                           showCharCounter={ false }
                            //onChangeValidity={(isValid: boolean) => console.warn('validity changed:', isValid, Date.now())}
                        />

                        <MaterialTextField marginH-20 marginB-5
                                           placeholder={ "Mobile phone number" } onChangeText={ value => setConfirmPassword( value ) }
                                           validate={ [ "required", ( value: string ) => value == password ] }
                                           validationMessage={ [ "Field is required", "Confirm Password does not match" ] }
                                           maxLength={ 50 }
                                           showCharCounter={ false }
                            //onChangeValidity={(isValid: boolean) => console.warn('validity changed:', isValid, Date.now())}
                        />

                        <ButtonAuthenticate label="Sign Up" onPress={ signUp }/>
                    </View>

                    <View style={ { ...styles.footer, marginBottom: insets.bottom } }>
                        <Button blue30 link
                                label=" A Ready Account " labelStyle={ Typography.text70L }
                                onPress={ () => {
                                    navigation.navigate( "ScreenLogin" )
                                } }
                        />
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        </>
    );
};


export default SignUp;

const styles = StyleSheet.create( {
    container:         {
        flex:            1,
        justifyContent:  "space-between",
        backgroundColor: "#fff",
    },
    content:           {
        height,
    },
    header:            {
        width,
        height: 250,
        top:    -50,
    },
    headerImageBellow: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: "stretch",
        height:     350,
        width,
        zIndex:     1
    },
    headerIcon:        {
        ...StyleSheet.absoluteFillObject,
        resizeMode: "contain",
        height:     400,
        width,
        zIndex:     9,
    },
    headerImageLight1: {
        ...StyleSheet.absoluteFillObject,
        left:   30,
        height: 200,
        width:  80,
    },
    headerImageLight2: {
        ...StyleSheet.absoluteFillObject,
        height: 150,
        width:  80,
        left:   140,
    },
    headerImageClock:  {
        position: "absolute",
        height:   60,
        width:    60,
        right:    40,
        top:      80,
    },
    titleWrapper:      {
        position:  "absolute",
        bottom:    0,
        alignSelf: "center",
        zIndex:    10,

    },
    form:              {
        width,
        minHeight: height - 250 - 100,
        zIndex:    9
    },
    footer:            {
        zIndex: 1,
    },
    textLink:          {
        fontSize:   14,
        fontWeight: "300",
        lineHeight: 24
    }
} )
