import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function ForgotPasswordPage(){
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: "https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/0a49e3c3a03ebde64f85c0bacd8a08e2.png"}} 
                style={styles.logo}
            />
            <TextInput 
                placeholder='Email' 
                style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>
                    Recuperar Senha
                </Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'RegisterPage'}}>
                    <Text style={styles.LinkBtn}>Cadastre-se</Text>
                </Link>
                <Link to={{screen: 'LoginPage'}}>
                    <Text style={styles.LinkBtn}>Voltar para o Login</Text>
                    </Link>
            </View>
        </View>
    )
}