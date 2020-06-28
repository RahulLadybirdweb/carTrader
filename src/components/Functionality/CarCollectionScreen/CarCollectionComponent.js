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
  Provider,
  Modal,
  Appbar
} from 'react-native-paper';
import {Content,Right,Header,Body,Title,Left} from 'native-base'
import { Images, Metrics } from "../../../../Themes";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../../../AllCss/CarCollectionStyle/styles";
import ExStyles from "../../../AllCss/CarCollectionStyle/CarCollectionstyles2"
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import AppRoutes from '../../../AppRoutes'
import { connect } from 'react-redux'

const data = [
    {
      id: 1,
      name: "Chevrolet",
      profileImage: { uri: 'https://newevolutiondesigns.com/images/freebies/car-wallpaper-1.jpg'},
      postImage: { uri: 'https://newevolutiondesigns.com/images/freebies/car-wallpaper-1.jpg' },
      time: "9 AM",
      date: "Jan 20,2019",
      price : 2000000,
      postDescription:
        "16 Photos That Prove Dubai is the Most Beautiful City to Admire From Above",
      description:
        "Sed iaculis elit velit, at faucibus metus imperdiet sed. Sed dictum, nunc et tempor accumsan, libero turpis ullamcorper quam, ut efficitur dolor augue sed sapien."
    },
    {
      id: 2,
      name: "BMW",
      profileImage:{ uri: 'https://newevolutiondesigns.com/images/freebies/car-wallpaper-2.jpg' },
      postImage: { uri: 'https://newevolutiondesigns.com/images/freebies/car-wallpaper-2.jpg' },
      time: "8 PM",
      date: "Oct 24,2015",
      price : 10000000,
      postDescription:
        "16 Photos That Prove Dubai is the Most Beautiful City to Admire From Above",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      name: "Ferrari",
      profileImage: { uri: 'https://newevolutiondesigns.com/images/freebies/car-wallpaper-3.jpg' },
      postImage: { uri: 'https://newevolutiondesigns.com/images/freebies/car-wallpaper-3.jpg' },
      time: "1 PM",
      price : 5000000,
      date: "May 28,2020",
      postDescription:
        "1 Photos That Prove Bangaolre is the Most Beautiful City to Admire From Above",
      description:
        "Sed iaculis elit velit, at faucibus metus imperdiet sed. Sed dictum, nunc et tempor accumsan, libero turpis ullamcorper quam, ut efficitur dolor augue sed sapien."
    }
  ];
class CarCollectionPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            SelectItem : [],
            TotalItem : 0
        }
    }
    LogOut = () => {
        Alert.alert(
            'Log out',
            'Do you want to logout?',
            [
              {text: 'Cancel', onPress: () => {return null}},
              {text: 'Confirm', onPress: () => {
                AsyncStorage.clear();
               this.props.navigation.navigate(AppRoutes.SPLASH)
              }},
            ],
            { cancelable: false }
          )
    }
    SeeCart = () => {
        this.props.navigation.navigate(AppRoutes.CART)
    }
    goLoginPage = (id,item) => {
        const ItemAdded = this.state.SelectItem
        const total = ItemAdded.push(item)
        this.setState({TotalItem : total})
        this.props.dispatch({type: 'ADD_TO_CART', payload: ItemAdded})
    }
    render () { 
        const check = data
    return (
      <View style={[ExStyles.container,{ backgroundColor: "#d9d9d9" }]}
      contentContainerStyle={ExStyles.content}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <Header style={{backgroundColor: "#08d4c4"}}>
          <Left>
            <Button transparent>
            <Icon size={25} color="#fff" name='sign-out' onPress={this.LogOut}
            />
            </Button>
          </Left>
          <Body>
            <Title>Car Collection</Title>
          </Body>
          <Right>
              <Icon size={25} color="#fff" name='shopping-cart' onPress={this.SeeCart}/>
          <Badge style={{bottom:2}}>{this.state.TotalItem}</Badge>
          </Right>
        </Header>
      <ScrollView
      style={{ backgroundColor: "#d9d9d9" }}
      contentContainerStyle={ExStyles.TicketTheardcontent}
    >
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
                  <Card>
                    <View style={styles.rowHeaderView} >
                    <View>
                    <Image
                      style={styles.profileImg}
                      source={item.profileImage}
                    />
                    </View>
                    <View style={styles.rowHeaderNameView}>
                      <Text style={[styles.rowNameTxt,{color:"#000"}]}>{item.name}</Text>
                      <Text style={[styles.rowTimeTxt,{color:"#000"}]}>{item.time}  {item.date}</Text>
                    </View>
                    </View>
                  </Card>
                  {item.postImage == "" ? null : (
                    <Card.Cover
                      style={styles.postDescImage}
                      source={item.postImage}
                    />
                  )}
                  <Text style={styles.rowPostDescription}>
                    {item.postDescription}
                  </Text>
                  <View style={styles.postDateView}>
                    <Text style={[styles.postAuthorDate, { color: "#adadad" }]}>
                      by
                    </Text>
                    <Text
                      style={[
                        styles.postAuthorDate,
                        { color: "#0691ce", marginLeft: Metrics.WIDTH * 0.01 }
                      ]}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={[
                        styles.postAuthorDate,
                        {
                          color: "#6f6f6f",
                          marginLeft: Metrics.WIDTH * 0.025,
                          marginTop: -Metrics.HEIGHT * 0.007
                        }
                      ]}
                    >
                      .
                    </Text>
                    <Text
                      style={[
                        styles.postAuthorDate,
                        { color: "#adadad", marginLeft: Metrics.WIDTH * 0.025 }
                      ]}
                    >
                      {item.date}
                    </Text>
                  </View>
                  <View style={styles.rowDescView}>
                    <Text style={styles.rowDescTxt}>{item.description}</Text>
                  </View>
                  <View style={styles.dividerHorizontal} />
                  <Animatable.View 
            style={[styles.footer, {
                backgroundColor:'#fff'
            }]}
            animation="fadeInUpBig"
             >
            <View style={styles.button}>
            <TouchableOpacity onPress={() => this.goLoginPage(item.id,item)}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    
                    <Text style={styles.textSign}>Add To Cart  </Text>
                    <Icon 
                    name="cart-plus"
                    color="#fff"
                    size={18}
                    />
                </LinearGradient>
            </TouchableOpacity>
            <View style={styles.PriceContainer}>
            <Icon 
                name="rupee"
                color="#000"
                size={20}
                style={styles.IconStyle}
            />
            <Text style={styles.Price}> {item.price}</Text>
            </View>
            </View>
        </Animatable.View>
             </View>
              );
            })}
          </View>
          </Animatable.View>
          
        </Content>
     
    </ScrollView>
    <View style={ExStyles.TotalCarColletionContainer}>
        <View style={ExStyles.TotalCarColletion}>
            <Text style={{fontSize:25}}>{check.length}<Text style={{fontSize:20}}> Cars</Text></Text>
            
        </View>
    </View>
    </View> 
    );
};
}
const mapStateToProps = (state) => {
    return state;
  }
export default connect(mapStateToProps)(CarCollectionPage)