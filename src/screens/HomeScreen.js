import React, { useEffect, useState } from 'react';
import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { paidGames } from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListProducts from '../components/ListProducts';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../redux/actions';

export default function HomeScreen({ navigation }) {
    const [gamesTab, setGamesTab] = useState(1);
    const { name, age, games } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGames());
    }, []);

    const onSelectSwitch = value => {
        setGamesTab(value);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: 20 }}>
                <View
                    style={styles.viewHeader}>
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

                {gamesTab == 1 && games &&
                <FlatList
                    data={games}
                    renderItem={({ item }) => (
                        <ListProducts
                            key={item.index}
                            photo={item.image}
                            title={item.gameSeries}
                            subTitle={item.character}
                            navigation={navigation}

                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                }
                {gamesTab == 2 &&
                <FlatList
                    data={paidGames}
                    renderItem={({ item }) => (
                        <ListProducts
                            key={item.id}
                            photo={item.image}
                            title={item.title}
                            subTitle={item.subtitle}
                            price={item.price}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />}
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    viewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

});
