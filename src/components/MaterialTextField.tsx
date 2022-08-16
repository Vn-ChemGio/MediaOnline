import React                                 from "react";
import { Colors, Incubator, TextFieldProps } from "react-native-ui-lib";

const { TextField } = Incubator;

const MaterialTextField = ( props: TextFieldProps ) => {
    return (
        <TextField placeholder={ "Email" }
                   floatingPlaceholder={ true }
                   floatOnFocus={ true }
                   enableErrors
                   validationMessagePosition={ TextField.validationMessagePositions.BOTTOM }
                   validateOnChange
                   showCharCounter
                   fieldStyle={ {
                       borderBottomColor: Colors.$outlineDisabledHeavy,
                       borderBottomWidth: 0.5,
                       paddingBottom:     4
                   } }
                   labelColor={ {
                       default:  Colors.$textDefault,
                       focus:    Colors.$textGeneral,
                       error:    Colors.$textDangerLight,
                       disabled: Colors.$textDisabled
                   } }
                   { ...props }
        />
    );
};

export default MaterialTextField;
