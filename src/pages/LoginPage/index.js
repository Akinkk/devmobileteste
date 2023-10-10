import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function LoginPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/FOX_logo.webp')} style={styles.logo}/>
            <TextInput placeholder='E-mail' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'ForgotPasswordPage'}}><Text style={styles.LinkBtn}>Esqueceu a senha? </Text></Link>
                <Link to={{screen: 'RegisterPage'}}><Text style={styles.LinkBtn}>Cadastre-se </Text> </Link>
            </View>
        </View>
    )
}