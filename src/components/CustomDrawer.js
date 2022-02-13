import React from 'react';
import { Image, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = props => {
    const openAppStore = () => {
        const link =
            'market://details?id=com.papajohns.android';
        Linking.canOpenURL(link).then(
            (supported) => {
                supported && Linking.openURL(link);
            },
            (err) => console.log(err),
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#007b4f' }}>
                <ImageBackground
                    source={require('../images/menu-bg.png')}
                    style={{ padding: 15 }}>
                    <View style={{ padding: 40, flexDirection: 'row' }} />
                </ImageBackground>
                <TouchableOpacity onPress={() => props.navigation.navigate('ProfileScreen')}
                                  style={{ padding: 20, flexDirection: 'row' }}>
                    <Image
                        source={require('../images/user-profile.jpg')}
                        style={styles.imageProfile}
                    />
                    <View>
                        <Text
                            style={styles.name}>
                            Iván Bolaños
                        </Text>
                        <Text
                            style={styles.position}>
                            Analista programador
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => {
                    openAppStore();
                }} style={{ paddingVertical: 15 }}>
                    <View style={styles.viewOption}>
                        <Ionicons name="share-social-outline" size={22} />
                        <Text
                            style={styles.customOption}>
                            Comparte a tus amigos
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                }} style={{ paddingVertical: 15 }}>
                    <View style={styles.viewOption}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={styles.customOption}>
                            Cerrar sesión
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    imageProfile: {
        height: 60,
        width: 60,
        borderRadius: 40,
        marginRight: 10,
    },
    name: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        marginBottom: 5,
    },
    position: {
        color: '#fff',
        fontFamily: 'Roboto-Regular',
        marginRight: 5,
    },
    viewOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    customOption: {
        fontSize: 15,
        fontFamily: 'Roboto-Medium',
        marginLeft: 5,
    },
});
export default CustomDrawer;
