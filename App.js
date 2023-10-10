import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image } from 'react-native';
import MoonLight_GreatSword from './src/pages/MoonLight_GreatSword';
import Armadura from './src/pages/Armadura';
import Magic from './src/pages/Magic';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        
        <NavigationContainer>
            
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name='MoonLight_GreatSword'
                    component={MoonLight_GreatSword}
                    />
                <Stack.Screen
                    name='Armadura'
                    component={Armadura}
                    />
                <Stack.Screen
                    name='Magic'
                    component={Magic}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#282828",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        width: 200,
        height: 200,
        marginBottom: '20px'
    },
});
