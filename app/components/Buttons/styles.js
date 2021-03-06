import EStyleSheet from "react-native-extended-stylesheet";

const BUTTON_HEIGHT = 48;
const BORDER_RADIUS = 5;


export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        height: BUTTON_HEIGHT,
        marginVertical: 11,
        borderRadius: BORDER_RADIUS,
        backgroundColor: '$button',
        paddingLeft: 20,

    },
    wrapper: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        width: 25,
        marginRight: 11,
    },
    text: {
        fontSize: 16,
        fontWeight: '300',
        paddingVertical: 20,
        color: '$primaryBlack',

    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: BUTTON_HEIGHT,
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
    footTouchable: {

    },
})