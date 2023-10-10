import { Text } from "react-native-web";

import styles from "./styles";
import { View } from "react-native";

function Teste({texto, children}){
    return (
        <View style={styles.container}>
            {children}
            <Text style = {styles.texto}>{texto}</Text>
        </View>
        
    )
}

export default Teste;