import EStyleSheet from "react-native-extended-stylesheet";


export default EStyleSheet.create({
    headerImageStyle: {
        height: 300,
        width: 300,
    },
    dashboardHeaderView: {
        flex: 4,
        justifyContent: 'center',
        height: 400,
        width: 300,
        position: 'relative',
        top: 5,

    },
    text: {
        color: '$white',
        fontSize: 24,
        fontWeight: '900',
        paddingHorizontal: 20,
    }
})