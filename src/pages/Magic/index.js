import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';



export default function Magia(){
    return(
        <View style={styles.container}>
            <Image 
                source={require('../../../assets/RanniDarkMoon.png')} 
                style={styles.logo}
            />

            <Text style={styles.itemName}>
                RANNI'S DARK MOON 
            </Text>
            <Text style={styles.itemDescription}>
            Ranni's Dark Moon is a Sorcery in Elden Ring. Ranni's Dark Moon spell launches a dark moon at foes. Updated to Patch 1.07.

 

Legendary sorcery associated with the Carian queen. 

Uses the caster as a vessel to incarnate a cold, dark moon, then sends it floating toward foes. The dark moon dispels all sorcery that touches it, and temporarily reduces magic damage negation for those it strikes.

This moon was encountered by a young Ranni, led by the hand of her mother, Rennala. What she beheld was cold, dark and veiled in occult mystery.
            </Text>
            
            <View style={styles.viewLinks}>
                <Link to={{screen: 'MoonLight_GreatSword'}}>
                    <Text style={styles.LinkBtn}>MoonLight GreatSword</Text>
                </Link>
                <Link to={{screen: 'Armadura'}}>
                    <Text style={styles.LinkBtn}>Armadura</Text>
                    </Link>
            </View>
        </View>
    )
}