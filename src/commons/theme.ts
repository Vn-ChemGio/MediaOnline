import { DefaultTheme } from "react-native-paper";


export const theme = {
    ...DefaultTheme,
    roundness: 2,
    version:   3,
    colors:    {
        ...DefaultTheme.colors,
        primary:            "#3498db",
        secondary:          "#f1c40f",
        tertiary:           "#a1b2c3",
        primaryVOVDiscover: "rgb(255, 145, 0)",
        primaryVOVRadio:    "rgb(78,15,255)",
        primaryVOVNews:     "rgb(234,17,126)",
        primaryVOVTube:     "rgb(234,17,57)",
    },
}
