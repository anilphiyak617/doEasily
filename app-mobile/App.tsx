import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Books, Boxes, Home, More } from './src/screens';
import { SvgProps, SvgXml } from 'react-native-svg';
import Icons from './src/constants/icons'

export type TabParamList = {
  Home: undefined,
  Boxes: undefined,
  Books: undefined,
  More: undefined,
}

const tabIcons = {
  Home: {
    default: <Icons.HomeIcon />,
    // focused: <Icons.HomeIconFocused />,
  },
  Boxes: {
    default: <Icons.BoxesIcon />,
    // focused: <Icons.BoxesIconFocused />,
  },
  Books: {
    default: <Icons.CurrencyIcon />,
    // focused: <Icons.CurrencyIconFocused />,
  },
  More: {
    default: <Icons.MoreIcon />,
    // focused: <Icons.MoreIconFocused />,
  },
};


const Tab = createBottomTabNavigator<TabParamList>();


const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: () => {
    let CurIcon: any = tabIcons[route.name]?.default || null;
    console.log(route)
    return CurIcon;
  }
})

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
      >
        <Tab.Screen name="Home" component={Home}
        />
        <Tab.Screen name="Boxes" component={Boxes} />
        <Tab.Screen name="Books" component={Books} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
