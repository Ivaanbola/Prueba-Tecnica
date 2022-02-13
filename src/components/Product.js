import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Product({ item, onPress, navigation }) {
    const onPressTouchable = (action) => {
        if (item.quantity == null) {
            item.quantity = 1;
        } else if (action === 'ADD') {
            item.quantity++;
        } else if (action === 'SUBSTRACT') {
            item.quantity--;
        }
        onPress(item);
    };
    let disable = true;
    if (item.quantity > 0) {
        disable = false;
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerData}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('GameDetail', { item })
                } style={styles.containerData}>
                    <Image
                        source={{ uri: item.image }}
                        resizeMode={'contain'}
                        style={styles.image}
                    />
                    <View>
                        <Text
                            numberOfLines={1}
                            style={styles.title}>
                            {item.name}
                        </Text>
                        <Text
                            style={styles.subtitle}>
                            {item.amiiboSeries}
                        </Text>
                        <Text
                            style={styles.subtitle}>
                            {item.price}€
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <Text
                        style={styles.subtitle}>
                        {item.quantity} unidades
                    </Text>
                    <View style={styles.containerBotton}>
                        <TouchableOpacity disabled={disable} onPress={() => onPressTouchable('SUBSTRACT')}
                                          style={[styles.touchable, { backgroundColor: disable ? '#bbe0cf' : '#007b4f' }]}>
                            <Text style={styles.textTouchable}>
                                {'-'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onPressTouchable('ADD')} style={styles.touchable}>
                            <Text style={styles.textTouchable}>
                                {'+'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#e4e4e4',
    },
    containerData: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    containerBotton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 10,
        marginRight: 8,
    },
    touchable: {
        backgroundColor: '#007b4f',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        marginRight: 5,
    },
    textTouchable: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
    },
    title: {
        color: '#333',
        fontFamily: 'Roboto-Medium',
        width: 125,
        fontSize: 14,
        textTransform: 'uppercase',
    },
    subtitle: {
        color: '#333',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
    },
});

