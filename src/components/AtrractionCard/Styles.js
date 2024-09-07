import { StyleSheet,Dimensions } from "react-native";
const { width }=Dimensions.get('window')
const Styles=StyleSheet.create({
    card:{
    padding:4,
    borderWidth:1,
    borderColor:'#E2E2E2',
    borderRadius:15,
    marginBottom:12,
    },
    title:{
        fontWeight:'600',
        color:'#000000',
        fontSize:14,
        marginTop:12,
        marginLeft:6,
    },
    subTitle:{
        fontWeight:'400',
        fontSize:10,
        color:'rgba(0,0,0,0.5)',

    },
    img:{
        width:(width -96)/2,
        height:120,
        borderRadius:15,
    },
    icon:{
        width:10,
        height:10,
        marginRight:6,
    },
    subContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:12,
        marginLeft:6,
        marginTop:4,
    }
})
export default Styles;