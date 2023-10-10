import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';



export default function Espada(){
    return(
        <View style={styles.container}>
            <Image 
                source={require('../../../assets/DarkMoon.png')} 
                style={styles.logo}
            />

            <Text style={styles.itemName}>
                    DARK MOON GREATSWORD
            </Text>
            <Text style={styles.itemDescription}>
            A Moon Greatsword, bestowed by a Carian queen upon her
            spouse to honor long-standing tradition.
            One of the legendary armaments.
            Ranni's sigil is a full moon, cold and leaden, and this sword is but a beam of its light.
            </Text>
            
            <View style={styles.viewLinks}>
                <Link to={{screen: 'Armadura'}}>
                    <Text style={styles.LinkBtn}>Armadura</Text>
                </Link>
                <Link to={{screen: 'Magic'}}>
                    <Text style={styles.LinkBtn}>Magic</Text>
                    </Link>
            </View>
        </View>
    )
}