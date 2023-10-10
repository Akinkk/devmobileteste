import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';



export default function Armadura(){
    return(
        <View style={styles.container}>
            <Image 
                source={require('../../../assets/CarianKnight.png')} 
                style={styles.logo}
            />

            <Text style={styles.itemName}>
                    CarianKnight
            </Text>
            <Text style={styles.itemDescription}>
            Armor of the enchanted knights that once served the Carian royal family.
            The enchanted knights, anointed by the Lunar Queen, were heroes of the highest honors, but fell into disarray with the decline of the royal family.
            </Text>
            
            <View style={styles.viewLinks}>
                <Link to={{screen: 'MoonLight_GreatSword'}}>
                    <Text style={styles.LinkBtn}>MoonLight GreatSword</Text>
                </Link>
                <Link to={{screen: 'Magic'}}>
                    <Text style={styles.LinkBtn}>Magic</Text>
                    </Link>
            </View>
        </View>
    )
}