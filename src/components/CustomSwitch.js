import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Badge } from 'react-native-elements';
import customStyle from '../commons/CustomStyle';

export default function CustomSwitch({ selectionMode, option1, option2, onSelectSwitch }) {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);
    const { shoppingCart,  } = useSelector(state => state.userReducer);

    const updateSwitchData = value => {
        setSelectionMode(value);
        onSelectSwitch(value);
    };
    let badgeInfo = 0;
    if (shoppingCart?.length > 0) {
        shoppingCart.map(ob => {
            if (ob.quantity > 0) {
                badgeInfo += parseInt(ob.quantity);
            }
        });
    }
    return (
        <View
            style={styles.container}>
            <TouchableOpacity
                activeOpacity={1} onPress={() => updateSwitchData(1)}
                style={[styles.touchable, {
                    backgroundColor: getSelectionMode == 1 ? '#007b4f' : '#e4e4e4',
                }]}>
                <Text
                    style={[styles.text, { color: getSelectionMode == 1 ? 'white' : '#007b4f' }]}>
                    {option1}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1} onPress={() => updateSwitchData(2)}
                style={[styles.touchable, {
                    backgroundColor: getSelectionMode == 2 ? '#007b4f' : '#e4e4e4',
                    flexDirection:'row'
                }]}>
                <Text
                    style={[styles.text, { color: getSelectionMode == 2 ? 'white' : '#007b4f' }]}>
                    {option2}
                </Text>
                {(badgeInfo !== 0) &&
                <Badge
                    badgeStyle={[styles.badge, { backgroundColor: customStyle.PrimaryRed() }]}
                    textStyle={styles.badgeText} value={badgeInfo} status="error"
                />
                }
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 44,
        width: '100%',
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        borderColor: '#007b4f',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    touchable: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
    },

    badge: {
        paddingHorizontal: 5,
        marginLeft: 5,
        borderWidth: 0,
    },
    badgeText: {
        fontSize: customStyle.getFontSize(12),
        paddingHorizontal: 0
    },


});
