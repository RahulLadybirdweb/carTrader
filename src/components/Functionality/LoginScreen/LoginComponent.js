import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppRoutes from '../../../AppRoutes'
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import Users from '../../../../model/users';

export default class LoginPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    }};

    textInputChange = (val) => {
        if( val.trim().length >= 1 ) {
            this.setState({
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            this.setState({
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    handlePasswordChange = (val) => {
        if( val.trim().length >= 6 ) {
            this.setState({
                password: val,
                isValidPassword: true
            });
        } else {
            this.setState({
                password: val,
                isValidPassword: false
            });
        }
    }

    updateSecureTextEntry = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        });
    }

    handleValidUser = (val) => {
        if( val.trim().length >= 1 ) {
            this.setState({
                isValidUser: true
            });
        } else {
            this.setState({
                isValidUser: false
            });
        }
    }

    loginHandle = () => {
        const userName = this.state.username;
        const password = this.state.password;
        const foundUser = Users.filter( item => {
            AsyncStorage.setItem('token',item.userToken)
            return userName == item.username && password == item.password;
        } );

        if ( this.state.username.length == 0 || this.state.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        this.props.navigation.navigate(AppRoutes.CARCOLLECTION)
    }
render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor:"#fff"
            }]}
        >
            <Text style={[styles.text_footer, {
                color:"#000"
            }]}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color='#000'
                    size={20}
                />
                <TextInput 
                    mode="outlined"
                    label="Your Username"
                    error={this.state.isValidUser == false}
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color:"#000"
                    }]}
                    theme = {
                        {
                          colors: {
                            primary: "#0088CC",
                            background: 'white'
                          }
                        }
                    }
                    autoCapitalize="none"
                    onChangeText={(val) => this.textInputChange(val)}
                    onEndEditing={(e)=>this.handleValidUser(e.nativeEvent.text)}
                />
                {this.state.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <FontAwesome 
                        name="check-square-o"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { this.state.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must Enter.</Text>
            </Animatable.View>
            }
            

            <Text style={[styles.text_footer, {
                color:"#000",
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="lock"
                    color="#000"
                    size={20}
                />
                <TextInput 
                    mode="outlined"
                    theme = {
                    {
                        colors: {
                        primary: "#0088CC",
                        background: 'white'
                        }
                    }
                    }
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    error={this.state.isValidPassword == false}
                    secureTextEntry={this.state.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: "#000"
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => this.handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={this.updateSecureTextEntry}
                >
                    {this.state.secureTextEntry ? 
                    <FontAwesome 
                        name="eye-slash"
                        color="grey"
                        size={20}
                    />
                    :
                    <FontAwesome 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { this.state.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 6 characters long.</Text>
            </Animatable.View>
            }
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={this.loginHandle}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
