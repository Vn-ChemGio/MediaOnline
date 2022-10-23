import { NavigationContainer }       from "@react-navigation/native";
import React                         from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Colors, Typography }        from "react-native-ui-lib";
import { SafeAreaProvider }          from "react-native-safe-area-context";
import IonIcon                       from "react-native-vector-icons/Ionicons";

import { configTheme, theme } from "~commons";
import { RootNavigator }      from "./src/navigators";


Colors.loadSchemes( configTheme.configColor )
Typography.loadTypographies( configTheme.configTypography )
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
