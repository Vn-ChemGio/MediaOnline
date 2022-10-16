import { NavigationContainer }       from "@react-navigation/native";
import React                         from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeManager }              from "react-native-ui-lib";
import { SafeAreaProvider }          from "react-native-safe-area-context";
import IonIcon                       from "react-native-vector-icons/Ionicons";


import { RootNavigator } from "./src/navigators";
import { theme }         from "~commons";

ThemeManager.setComponentTheme( "Card", {
    borderRadius:      8,
    borderBottomWidth: 2,
    borderBottomColor: "#d6d5db",
    borderTopWidth:    1,
    borderTopColor:    "#e5e4ec",
} );

const App = () => {
    console.log( new Date() );

    return (
        <SafeAreaProvider>
            <PaperProvider theme={ theme } settings={ {
                icon: props => <IonIcon { ...props } />
            } }>
                <NavigationContainer>
                    <RootNavigator/>
                </NavigationContainer>
            </PaperProvider>
        </SafeAreaProvider>
    );
};

export default App;
