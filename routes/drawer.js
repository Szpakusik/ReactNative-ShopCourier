import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from 'react-navigation';
import HomeStack from "./homeStack";

const RootDrawNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
})

export default createAppContainer( RootDrawNavigator )