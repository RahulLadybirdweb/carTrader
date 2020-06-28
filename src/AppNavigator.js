import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import LoadingPage from './components/Functionality/LoadingScreen/LoadingComponent';
import SplashPage from './components/Functionality/SplashScreen/SplashComponent';
import LoginPage from './components/Functionality/LoginScreen/LoginComponent';
import CarCollectionPage from './components/Functionality/CarCollectionScreen/CarCollectionComponent';
import CartPage from './components/Functionality/CartScrren/CartComponent'

const getInitialRouteName = () => {
    return 'Loading'
}

const AppNavigator = createSwitchNavigator({
    Loading: {screen : LoadingPage},
    Splash : { screen : SplashPage},
    LoginUser : {screen : LoginPage},
    CarCollection : {screen : CarCollectionPage},
    Cart : {screen : CartPage}
    },{
        initialRouteName : getInitialRouteName()
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;