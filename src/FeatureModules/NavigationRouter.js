import { createSwitchNavigator } from "react-navigation";
import Test from '../FeatureModules/Test';

const NavigationRouter = createSwitchNavigator({
    Test: Test,
},
    {
        initialRouteName:"Test",
        navigationOptions: {
            header: null,
            headerStyle: {
                backgroundColor: 'green',
            },
        },
        headerMode : 'float',
    },
);

export default NavigationRouter;