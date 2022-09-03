import React                                       from "react";
import { SegmentedControl, SegmentedControlProps } from "react-native-ui-lib";

const IOSSegmentedControl = ( props: SegmentedControlProps ) => {
    return (
        <SegmentedControl
            activeBackgroundColor="#fff"
            activeColor={ "rgb(0,0,0)" }
            backgroundColor={ "rgba(204,204,204,0.29)" }
            outlineColor={ "rgba(204,204,204,0.29)" }
            borderRadius={ 10 }
            containerStyle={ {
                width:320
            } }
            
            { ...props }
        />
    );
};
export default IOSSegmentedControl;
