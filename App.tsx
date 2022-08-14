import React                   from "react";
import { ThemeManager, }       from "react-native-ui-lib";
import { SafeAreaProvider }    from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { RootNavigator } from "./src/navigators";

ThemeManager.setComponentTheme( "Card", {
    borderRadius:      8,
    borderBottomWidth: 2,
    borderBottomColor: "#d6d5db",
    borderTopWidth:    1,
    borderTopColor:    "#e5e4ec",
} );
// with a dynamic function
// @ts-ignore
ThemeManager.setComponentTheme( "Button", ( props, context ) => {
    // 'square' is not an original Button prop, but a custom prop that can
    // be used to create different variations of buttons in your app
    if ( props.square ) {
        return {
            borderRadius: 4,
        };
    }
} );
const App = () => {
    console.log( new Date() );

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RootNavigator/>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
