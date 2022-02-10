import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#007b4f' }}>
                <ImageBackground
                    source={require('../images/menu-bg.png')}
                    style={{ padding: 15 }}>
                    <View style={{ padding: 40, flexDirection:'row' }}>
                    </View>
                </ImageBackground>
                <View style={{ padding: 20, flexDirection:'row' }}>
                    <Image
                        source={require('../images/user-profile.jpg')}
                        style={{ height: 60, width: 60, borderRadius: 40, marginRight: 10 }}
                    />
                    <View>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                fontFamily: 'Roboto-Medium',
                                marginBottom: 5,
                            }}>
                            Iván Bolaños
                        </Text>
                        <Text
                            style={{
                                color: '#fff',
                                fontFamily: 'Roboto-Regular',
                                marginRight: 5,
                            }}>
                            Analista programador
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => {
                }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="share-social-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Comparte a tus amigos
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Cerrar sesión
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;
