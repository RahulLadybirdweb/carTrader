import { StyleSheet } from "react-native";
const ExStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      padding: 10,
    },
    TicketTheardcontent : {
      paddingLeft: 2,
      paddingRight:2
    },
    card: {
      margin: 2,
      padding:5,
    //   borderBottomWidth:1
    },
    cardTitle: {
      paddingLeft:75,
    },
    CardFooter : {
      flexDirection: "row",
      height:22,
      justifyContent:"space-around"
    },
    ProfileContainer:{
      paddingLeft:5,
      marginBottom:40
    },
    TotalCarColletionContainer : {
       backgroundColor: "#08d4c4",
       padding:10,
       justifyContent: "center"
    },
    TotalCarColletion : {
      flexDirection: "row",
      justifyContent:"space-around"
    }
  });
  export default ExStyles;