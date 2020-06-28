import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert, ScrollView, StyleSheet,StatusBar,View,Text,Image,TouchableOpacity} from 'react-native';
import {
  Avatar,
  Paragraph,
  Card,
  Badge,
  IconButton,
  Portal, 
   Button,
   List,
  Modal,
  Appbar
} from 'react-native-paper';
import {Content,Right,Header,Body,Title,Left} from 'native-base'
import { Images, Metrics } from "../../../../Themes";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../../../AllCss/CartStyle/styles";
import ExStyles from "../../../AllCss/CarCollectionStyle/CarCollectionstyles2"
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import AppRoutes from '../../../AppRoutes'
import { connect } from 'react-redux'
// import { Dropdown } from 'react-native-material-dropdown'


  let Item = [{
    value:1,
  }, {
    value: 2,
  }, {
    value: 3,
  }];
class CartPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Data : []
    }
  }
  componentDidMount = () =>{
    const getData = this.props.cartItem
    this.setState({Data : getData})
  }
    GoBack = () => {
        this.props.navigation.navigate(AppRoutes.CARCOLLECTION)
    }
    render () { 
      console.log(this.props)
      const data = this.state.Data
    return (
      <View style={[ExStyles.container,{ backgroundColor: "#d9d9d9" }]}
      contentContainerStyle={ExStyles.content}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <Header style={{backgroundColor: "#08d4c4"}}>
          <Left>
          <Button transparent>
            <Icon size={25} color="#fff" name='chevron-left' onPress={this.GoBack}/>
            </Button>
          </Left>
          <Body>
            <Title>My Cart</Title>
          </Body>
          <Right />
        </Header>
    <Content>
    <Animatable.View 
            animation="bounceIn"
            duration={50}
            >
          <View style={styles.rowMainView}>
            {data.map((item, index) => {
              return (
                <View
                  style={
                    index === data.length - 1 ? styles.lastRowBg : styles.rowBg
                  }
                  key={index}
                >
                  <Card style={{padding:10}}>
                    <View style={styles.rowHeaderView} >
                    
                    <View style={styles.rowHeaderNameView}>
                      <Text style={[styles.rowNameTxt,{color:"#000"}]}>{item.name}</Text>
                      <Text style={[styles.rowTimeTxt,{color:"#000"}]}>{item.time}  {item.date}</Text>
                      <View style={styles.PriceContainer}>
                    <Icon 
                        name="rupee"
                        color="#000"
                        size={20}
                        style={styles.IconStyle}
                    />
                    <Text style={styles.Price}> {item.price}</Text>
                    </View>
                    <View style={{top:20}}>
                    <Text style={[styles.rowNameTxt,{color:"#000"}]}>Delivery by 11 AM, Tomorrow </Text>
                    <Text style={[styles.rowNameTxt,{color:"#000"}]}>Delivery in 2 days, tue </Text>
                    </View>
                    </View>
                    <View>
                    <Image
                      style={styles.profileImg}
                      source={item.profileImage}
                    />
                    {/* <Dropdown
                    baseColor='#000'
                    itemColor='#000'
                    label='Qty'
                    data={Item}
                    // onChangeText={}
                    /> */}
                    </View>
                    </View>
                    
                  </Card>
            <View style={styles.button}>
            <TouchableOpacity onPress={this.goLoginPage}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    
                    <Text style={styles.textSign}>Save for later </Text>
                    <Icon 
                    name="cart-plus"
                    color="#fff"
                    size={18}
                    />
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goLoginPage}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    
                    <Text style={styles.textSign}>Remove  </Text>
                    <Icon 
                    name="cart-plus"
                    color="#fff"
                    size={18}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
             </View>
              );
            })}
          </View>
          </Animatable.View>
          <View style={{justifyContent:"center",padding:20}}>
        <Text style={{fontSize:20}}>PRICE DETAILS</Text>
        <View style={{justifyContent:'space-between',flexDirection:"row",paddingTop:10}}>
        <Text>Price</Text>
        <Text>2000000</Text>
        </View>
        <View style={{justifyContent:"space-between",flexDirection:"row",paddingTop:10}}>
        <Text>Delivery Fee</Text>
        <Text>Free</Text>
        </View>
        <View style={{justifyContent:"space-between",flexDirection:"row",paddingTop:10}}>
        <Text>Total Amount</Text>
        <Text>2000000</Text>
        </View>
        </View>
        </Content>
        <View style={{justifyContent:"flex-end",bottom:20}}>
        <View style={styles.button}>
            <TouchableOpacity onPress={this.goLoginPage}>
            <LinearGradient
                    colors={['green', 'green']}
                    style={styles.signIn}
                > 
                <Icon 
                name="rupee"
                color="#fff"
                size={20}
                  />
                <Text style={styles.textSign}> 2cr </Text>
            </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goLoginPage}>
                <LinearGradient
                    colors={['green', 'green']}
                    style={styles.signIn}
                >
                    
                    <Text style={styles.textSign}>Place Order  </Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </View>
    </View> 
    );
};
}
const mapStateToProps = (state) => {
    return state;
  }
export default connect(mapStateToProps)(CartPage)