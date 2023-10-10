import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundImage: 'url("https://eldenring.wiki.fextralife.com/file/Elden-Ring/elden-ring-wiki-guide-walkthrough-background-min.jpg")',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        width: '230px',
        height: '384px',
        marginBottom: '40px'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px',
        
    },
    itemName: {
        fontSize: '20px',
        color: '#FFFFFF',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    itemDescription: {
        fontSize: '14px',
        color: '#FFFFFF',
        padding: 20,
        justifyContent: 'center'
    },
    LinkBtn: {
        fontSize: '15px',
        color: 'white',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px',
        border: '2px solid #FFFFFF',
        fontWeight: 'bold',
    }
});

export default styles;