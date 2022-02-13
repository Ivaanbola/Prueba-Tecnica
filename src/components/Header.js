import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import customStyle from '../commons/CustomStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = (props) => {

    const { title, goBack } = props;

    return (
        <View style={styles.container}>
            <View style={styles.containerInner}>
                {goBack &&
                <TouchableOpacity
                    style={styles.header_back}
                    onPress={() => {
                        props.navigation.goBack(null);
                    }}>
                    <Icon name="keyboard-arrow-left" size={40} color={customStyle.White()} />
                </TouchableOpacity>
                }
                <Text style={styles.header_title}>{title}</Text>
                <View style={styles.header_right}>
                    <TouchableOpacity style={styles.menu}
                                      onPress={() => props.navigation.openDrawer()}>
                        <MaterialCommunityIcon name="dots-vertical" size={26} color={customStyle.White()} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingTop: customStyle.getStatusBarHeight(),
        minHeight: 80,
        backgroundColor: customStyle.PrimaryColor(),
    },
    imageBackground: {
        width: 800,
        height: 80,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    containerInner: {
        minHeight: 80,
        paddingRight: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_img: {
        height: 19,
    },
    menu: {
        borderRadius: 20,
        width: 40,
        height: 40,
        backgroundColor: customStyle.GreenHeader(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu_img: {},
    header_title: {
        color: customStyle.White(),
        fontSize: customStyle.getFontSize(20),
        fontWeight: 'bold',
    },
    header_back: {
        paddingHorizontal: 0,
        marginLeft: -15,
    },
    header_right: {
        marginLeft: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wifi_off: {
        marginRight: 15,
        color: customStyle.White(),
    },
    workOrderResume_container: {
        backgroundColor: customStyle.ContentBackground(),
    },
    workOrderResume_container_sep: {
        paddingBottom: 15,
    },
});

export default Header;
