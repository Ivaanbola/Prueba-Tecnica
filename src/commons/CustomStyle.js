import { Dimensions, Platform, StatusBar } from 'react-native';

const windowDimensions = Dimensions.get('window');
let APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
let STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 0;

class CustomStyle {

    getFontSize(size) {
        let ancho = windowDimensions.width;
        let resultTeorico = size;
        if (ancho < 375) {
            resultTeorico = parseInt(size * ancho / 375);
        }
        let result = resultTeorico;
        if (result < 9) {
            result = 9;
        }
        //console.log("getFontSize("+size+"):" + result + " resultTeorico:" + resultTeorico);
        return result;
    }

    getFullWidth() {
        return windowDimensions.width;
    }

    getFullHeight() {
        return windowDimensions.height;
    }

    getFullHeightWithoutNavBar() {
        let height = windowDimensions.height - 60;
        //Si es Android debo quitar también la barra de estado
        if (Platform.OS === 'android') {
            //console.log(Platform);
            height -= StatusBar.currentHeight - 4;
            //console.log("StatusBar.currentHeight:"+StatusBar.currentHeight);
        }
        return height;
    }

    getAppNavigationOptions() {
        return {
            headerStyle: {
                backgroundColor: '#eceeef',
                height: APPBAR_HEIGHT + STATUSBAR_HEIGHT,
            }
            ,
            headerTitleStyle: {
                color: '#a5a7a8',
            }
            ,
            headerBackTitleStyle: {
                color: 'white',
            }
            ,
            headerTintColor: 'white',
        }
    }

    getRobotoFontFamily() {
        let result = 'roboto';
        if (Platform.OS === 'ios') {
            result = "System"
        }
        return result;
    }

    getShadow() {
        return ({
            shadowColor: "#444",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
        })
    }

    /* COLORES GENERICOS */

    White() {
        return '#ffffff';
    }

    Black() {
        return '#000000';
    }

    LightGrey() {
        return '#F5F5F5'
    }

    LightMedGrey() {
        return '#DCDCDC';
    }

    DarkMedGrey() {
        return '#979797'
    }

    DarkMed2Grey() {
        return '#5F6368'
    }

    DarkGrey() {
        return '#2D3B41'
    }

    /* COLORES PERSONALIZABLES */

    PrimaryColor() {
        return '#007b4f';
    }

    PrimaryColorLight() {
        return '#C3E9CD';
    }

    /* EastWebMonitor */

    UpColor() {
        return '#28a745';
    }

    DownColor(){
        return '#dc3545';
    }

    getGreyText(){
        return '#57636C'
    }

    /* PTE Revisar */

    getStatusBarHeight() {
        return STATUSBAR_HEIGHT;
    }

    //conama colors
    PrimaryColorButton() {
        return '#29AD4B';
    }

    //conama colors

    getRedColor() {
        return '#e2001a';
    }

    getMainColor() {
        return '#e2001a';
    }

    getWhiteColorOpacity() {
        return 'rgba(256, 256, 256, 0.6 )';
    }

    getLightGrey() {
        return '#DCDCDC';
    }

    getLightGreyFinish() {
        return '#f2f2f2';
    }

    getGreyWeekend() {
        return '#AAAAAA';
    }

    getBackgroundGrey() {
        return '#F4F6F7';
    }

    /*COLORES*/

    P_Yellow() {
        return '#E1A23F'
    }

    P_Light_Yellow() {
        return '#FFE9B5'
    }

    P_Dark_Yellow() {
        return '#986C00'
    }

    getWhiteColor() {
        return '#ffffff';
    }

    Red() {
        return '#E70C21';
    }

    BorderColor() {
        return '#DADCE0';
    }

    Orange() {
        return '#FFA900';
    }

    PrimaryRed() {
        return '#BB1023';
    }

    Blue() {
        return '#2B92E4'
    }

    DarkBlue() {
        return '#0058F5'
    }

    LightBlue() {
        return '#DCEDF6'
    }

    Success() {
        return '#67AD5C';
    }

    GreenHeader() {
        return '#54be6f';
    }

    Green() {
        return '#42B51E';
    }

    getGreenColor() {
        return '#42B51E';
    }

    DarkGreen() {
        return '#347f06';
    }

    getTitleTextColor() {
        return '#202124'
    }

    getSubTitleTextColor() {
        return '#707070'
    }


    getDarkBlue() {
        return '#2D3B41'
    }

    getDarkBlueHeader() {
        return '#535E69'
    }

    getBlueComment() {
        return '#004f88';
    }

    getBlueHeaderWorking() {
        return '#3D708D';
    }

    getYellowColorTransparent() {
        return 'rgba(242,204,98,0.5)'
    }

    getColorStatusBar() {
        return '#1C2326'
    }

    getBlack() {
        return '#000000'
    }

    LightRed() {
        return '#f8a094'
    }

    ContentBackground() {
        return '#EFEFEF'
    }

    getGrey() {
        return '#B3B3B3';
    }

    getDarkGrey() {
        return '#333';
    }

    getBorderColor() {
        return '#c4c4c4';
    }

    getBackgroundColor() {
        return '#f6f6f6';
    }

    getGreyColor() {
        return '#c4c4c4';
    }

    getLabelColor() {
        return '#333';
    }

    getLightYellowColor() {
        return '#FAEED7'
    }

    getYellowColor() {
        return '#f2cc62'
    }

    getYellowOrangeColor() {
        return '#F0A630'
    }

    getYellowOrangeLightColor() {
        return '#FFD869'
    }

    getBackgroundDateColor() {
        return '#F4F6F7'
    }

    getLightBlueColor() {
        return '#DBE5EB'
    }

    getLightRedColor() {
        return '#f8a094'
    }

}

export default new CustomStyle();
