import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#36454F',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '259px',
        height: '360px',
        marginBottom: '40px'
    },
    input:{
        width: '75%',
        height: '50px',
        backgroundColor: 'white',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        border: '2px solid green',
        borderRadius: '5px',
        marginBottom: '5px'
    },
    btn: {
        backgroundColor: '#282828',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    btnTxt: {
        fontSize: '22px',
        color: '#BEBEBE'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px',
        
    },
    LinkBtn: {
        fontSize: '15px',
        color: 'white',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px',
        border: '2px solid #BEBEBE',
        fontWeight: 'bold',
    }
});

export default styles;