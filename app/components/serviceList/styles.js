import EStyleSheet from "react-native-extended-stylesheet";


export default EStyleSheet.create({
    itemTouchable: {
        justifyContent: 'center',
        backgroundColor: '$white',
        borderWidth: 1,
        borderRadius: '$borderradius',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '$shadowColor',
        shadowOpacity: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        marginTop: 10,
        height: 50,
        paddingLeft: 0,
    },
    itemHolder:{
        paddingHorizontal: 5,
    },
    itemText: {
        fontSize: 16,
        marginLeft: 10,
    }

})