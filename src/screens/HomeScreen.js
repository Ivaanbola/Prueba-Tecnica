import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { freeGames, paidGames } from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListProducts from '../components/ListProducts';

export default function HomeScreen({ navigation }) {
    const [gamesTab, setGamesTab] = useState(1);

    const onSelectSwitch = value => {
        setGamesTab(value);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ padding: 20 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 10,
                    }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium' }}>
                        Hola Iván
                    </Text>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <ImageBackground
                            source={require('../images/user-profile.jpg')}
                            style={{ width: 35, height: 35 }}
                            imageStyle={{ borderRadius: 25 }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 20 }}>
                    <CustomSwitch
                        selectionMode={1}
                        option1="Productos"
                        option2="Carrito"
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>

                {gamesTab == 1 &&
                freeGames.map(item => (
                    <ListProducts
                        key={item.id}
                        photo={item.poster}
                        title={item.title}
                        subTitle={item.subtitle}
                        isFree={item.isFree}
                        onPress={() =>
                            navigation.navigate('GameDetails', {
                                title: item.title,
                                id: item.id,
                            })
                        }
                    />
                ))}
                {gamesTab == 2 &&
                paidGames.map(item => (
                    <ListProducts
                        key={item.id}
                        photo={item.poster}
                        title={item.title}
                        subTitle={item.subtitle}
                        isFree={item.isFree}
                        price={item.price}
                        onPress={() =>
                            navigation.navigate('GameDetails', {
                                title: item.title,
                                id: item.id,
                            })
                        }
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
