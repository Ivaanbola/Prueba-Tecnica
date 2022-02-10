import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { windowWidth } from '../utils/Dimensions';

export default function ListProducts({ photo, title, subTitle, isFree, price, onPress }) {
    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: 20,
            flex: 1,
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <Image
                    source={photo}
                    style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }}
                />
                <View style={{ width: windowWidth - 220 }}>
                    <Text
                        style={{
                            color: '#333',
                            fontFamily: 'Roboto-Medium',
                            fontSize: 14,
                        }}>
                        {subTitle}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            color: '#333',
                            fontFamily: 'Roboto-Medium',
                            fontSize: 14,
                            textTransform: 'uppercase',
                        }}>
                        {title}
                    </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingTop: 10 }}>

                <TouchableOpacity onPress={onPress} style={{
                    backgroundColor: '#0aada8',
                    padding: 10,
                    marginRight: 20,
                    flex: 1,
                    borderRadius: 10,
                }}>
                    <Text style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontFamily: 'Roboto-Medium',
                        fontSize: 14,
                    }}>
                        {isFree == 'Yes' && 'Play'}
                        {isFree == 'No' && price}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress} style={{
                    backgroundColor: '#0aada8',
                    padding: 10,
                    flex: 1,
                    borderRadius: 10,
                }}>
                    <Text style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontFamily: 'Roboto-Medium',
                        fontSize: 14,
                    }}>
                        {isFree == 'Yes' && 'Play'}
                        {isFree == 'No' && price}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
