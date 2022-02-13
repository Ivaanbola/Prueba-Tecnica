import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { editItem, getGames } from '../redux/actions';
import ButtonCustom from '../components/ButtonCustom';
import customStyle from '../commons/CustomStyle';

export default function HomeScreen({ navigation }) {
    const [gamesTab, setGamesTab] = useState(1);
    const { shoppingCart, games } = useSelector(state => state.userReducer);
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
                <View style={{ marginBottom: 20 }}>
                    <CustomSwitch
                        selectionMode={1}
                        option1="Productos"
                        option2="Carrito"
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>

                {gamesTab === 1 && games &&
                <FlatList
                    data={games}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <Product
                            key={item.index}
                            item={item}
                            navigation={navigation}
                            onPress={item => dispatch(editItem(item))}
                        />
                    )}
                />
                }
                {gamesTab === 2 &&
                <View>

                    {shoppingCart.filter(obj => obj.quantity !== 0).length === 0 &&
                    <View style={styles.shoppingView}>
                        <Text style={styles.shoppingText}>
                            No has añadido ningun producto al carrito
                        </Text>
                    </View>
                    }

                    <FlatList
                        data={shoppingCart.filter(obj => obj.quantity !== 0)}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) => (
                            <Product
                                key={item.index}
                                item={item}
                                navigation={navigation}
                                onPress={(item) => dispatch(editItem(item))}
                            />
                        )}
                    />
                        <ButtonCustom
                            buttonStyle={{ backgroundColor: customStyle.DarkGrey() }}
                            label={'Confirmar compra'}
                            disabled={shoppingCart.filter(obj => obj.quantity !== 0).length === 0}
                            labelStyle={{ color: customStyle.White() }}
                            onPress={() => {
                                navigation.navigate('ResumeScreen');
                            }}
                        />
                </View>
                }
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
    textHeader: {
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
    },
    imageProfile: {
        width: 35,
        height: 35,
    },
    shoppingText: {
        marginBottom: 25,
    },
    shoppingView: {
        alignItems: 'center',
    },
});
