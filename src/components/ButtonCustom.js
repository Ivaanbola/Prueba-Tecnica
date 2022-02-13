import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import customStyle from '../commons/CustomStyle';
import util from '../utils/Util';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

const ButtonCustom = (props) => {

    let { buttonStyle, label, labelStyle, prefix, postfix, disabled, containerStyle } = props;
    if (disabled) {
        buttonStyle = { ...buttonStyle, opacity: 0.35 };
    }

    return (
        <TouchableOpacity onPress={() => props.onPress()} disabled={disabled} style={[{ flex: 1 }, containerStyle]}>
            <View style={[styles.buttonStyle, buttonStyle]}>
                {util.hasValue(prefix) &&
                <IconFA5 name={prefix} style={[styles.postfixStyle, postfixStyle]} />
                }
                <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
                {util.hasValue(postfix) &&
                <IconFA5 name={prefix} style={[styles.postfixStyle, postfixStyle]} />
                }
            </View>
        </TouchableOpacity>
    );


};

const styles = StyleSheet.create({
    buttonStyle: {
        minHeight: 50,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    labelStyle: {
        fontWeight: 'bold',
        fontSize: customStyle.getFontSize(16),
        color: customStyle.DarkMed2Grey(),
        textAlign: 'center',
    },
    prefixStyle: {
        fontSize: 20,
        marginRight: 5,
    },
    postfixStyle: {
        fontSize: 20,
        color: customStyle.Red(),
        marginLeft: 10,
    },
});
export default ButtonCustom;
