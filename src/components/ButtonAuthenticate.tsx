import React, { useState }                   from "react";
import { Button, ButtonProps, Colors, View } from "react-native-ui-lib";
import { SkypeIndicator }                    from "react-native-indicators";

// @ts-ignore
const loadingButton: ButtonProps = { label: <SkypeIndicator color={ Colors.primary } size={ 30 }/>, round: true, link: true, disabled: true, onPress: undefined };
const successButton: ButtonProps = { label: "Success", backgroundColor: Colors.$textSuccess, onPress: undefined };

const ButtonAuthenticate = ( props: ButtonProps ) => {

    const asyncProcess                    = async () => {
        setButtonProps( loadingButton );
        try {
            if ( props.onPress ) await props.onPress();
        } catch ( e ) {
            setButtonProps( labelButton );
        } finally {
            setTimeout( () => {
                setButtonProps( successButton );

                setTimeout( () => {
                    setButtonProps( labelButton );
                },2000)
            }, 2000 )
        }
    }
    const labelButton: ButtonProps        = { backgroundColor: "#8022d9", label: props.label, onPress: asyncProcess };
    const [ buttonProps, setButtonProps ] = useState<ButtonProps>( labelButton );

    return (
        <View center marginV-20>
            <Button labelStyle={ { fontWeight: "800" } }
                    style={ { width: buttonProps == loadingButton ? "auto" : 200 } }
                    animateLayout
                    animateTo={ "center" }

                    { ...buttonProps }
            />

        </View>
    );
};

export default ButtonAuthenticate;
