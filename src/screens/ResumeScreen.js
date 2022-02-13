import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { editItem } from '../redux/actions';
import ButtonCustom from '../components/ButtonCustom';
import customStyle from '../commons/CustomStyle';

export default function ResumeScreen({ navigation }) {
    const dispatch = useDispatch();
    const { shoppingCart } = useSelector(state => state.userReducer);
    let price = 0;
    for (let game of shoppingCart) {
        if (game.quantity > 0) {
            price += game.price * game.quantity;
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView style={{ padding: 20 }}>
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
                <View style={styles.shoppingView}>
                    <Text style={styles.shoppingText}>
                    Subtotal ({shoppingCart.filter(obj => obj.quantity !== 0).length} productos): {price}€
                </Text>
                </View>
                <ButtonCustom
                    buttonStyle={{ backgroundColor: customStyle.DarkGrey() }}
                    label={'Tramitar Pedido'}
                    disabled={shoppingCart.filter(obj => obj.quantity !== 0).length === 0}
                    labelStyle={{ color: customStyle.White() }}
                    onPress={() => {
                    }}
                />
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    shoppingText: {
        marginBottom: 25,
    },
    shoppingView: {
        alignItems: 'center',
    },
});

