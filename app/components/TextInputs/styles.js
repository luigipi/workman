import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    userinput: {
        width: 200,
        height: 48,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderColor: '$primaryOrange',
    },
    logintitle: {
        width: 250,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'red',
    },
    loginbtn: {
        backgroundColor: '$primaryOrange',
        width: 200,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        marginTop: 25,
    },
    text: {
        color: '$white',
        paddingHorizontal: 40,
        fontSize: 18,
        alignItems: 'center',
    },
    foottouchabletext: {
        fontSize: 16,
        fontWeight: '300',
        paddingVertical: 20,
        color: '$primaryOrange',
        paddingLeft: 30,

    },
    footTouchable: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
    footbutton: {
        paddingTop: 0,
        alignItems: 'center',
        flexDirection: 'row',
    },
    boldtext: {
        fontSize: 18,
        marginLeft: 2,
    },
})