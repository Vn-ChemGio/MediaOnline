import React                                                        from "react";
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { ThemeManager, }                                            from "react-native-ui-lib";
import { SafeAreaProvider }                                         from "react-native-safe-area-context";
import { NavigationContainer }                                      from "@react-navigation/native";

import { RootNavigator } from "./src/navigators";

ThemeManager.setComponentTheme( "Card", {
    borderRadius:      8,
    borderBottomWidth: 2,
    borderBottomColor: "#d6d5db",
    borderTopWidth:    1,
    borderTopColor:    "#e5e4ec",
} );

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary:   "tomato",
        secondary: "yellow",
    },
};

const App = () => {
    console.log( new Date() );

    return (
        <SafeAreaProvider>
            <PaperProvider theme={ theme }>
                <NavigationContainer>
                    <RootNavigator/>
                </NavigationContainer>
            </PaperProvider>
        </SafeAreaProvider>
    );
};

export default App;
