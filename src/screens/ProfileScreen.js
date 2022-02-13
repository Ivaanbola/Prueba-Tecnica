import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import customStyle from '../commons/CustomStyle';
import ButtonCustom from '../components/ButtonCustom';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerImage}>
                    <Image
                        style={styles.imageCircle}
                        source={require('../images/user-profile.jpg')}
                    />
                    <Text style={styles.infoTitle}>{'Ivan Bolaños'}</Text>
                    <Text style={styles.infoText}>{'Analista programador'}</Text>
                </View>
                <View style={styles.containerInner}>
                    <Text style={styles.title}>{'Mis datos'}</Text>
                    <View style={styles.containerData}>
                        <View style={styles.dataField}>
                            <View style={styles.iconInfo}>
                                <IconFA5 name={'phone'} style={styles.iconInfo_icon} />
                            </View>
                            <Text style={styles.textInfo}>
                                {'Teléfono'}
                                {': '}
                                {'656192064'}
                            </Text>
                        </View>
                        <View style={styles.dataField}>
                            <View style={styles.iconInfo}>
                                <MaterialCommunityIcon name={'email'} style={styles.iconInfo_icon} />
                            </View>
                            <Text style={styles.textInfo}>
                                {'Email'}
                                {': '}
                                {'ivanbolanos0@gmail.com'}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.viewButton}>
                        <ButtonCustom
                            buttonStyle={{ backgroundColor: customStyle.DarkGrey() }}
                            label={'Cerrar sesión'}
                            labelStyle={{ color: customStyle.White() }}
                            onPress={() => {
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: customStyle.ContentBackground(),
        flex: 1,
    },
    containerImage: {
        backgroundColor: customStyle.White(),
        alignItems: 'center',
        padding: 25,
        position: 'relative',
    },
    infoTitle: {
        fontSize: customStyle.getFontSize(18),
        fontWeight: 'bold',
        color: customStyle.Black(),
        marginTop: 15,
        marginBottom: 5,
    },
    infoText: {
        fontSize: customStyle.getFontSize(16),
        color: customStyle.DarkGrey(),
    },
    imageCircle: {
        width: 72,
        height: 72,
        borderRadius: 72 / 2,
    },
    editImage: {
        backgroundColor: customStyle.PrimaryRed(),
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
    editImage_icon: {
        color: customStyle.White(),
        fontSize: 16,
    },
    containerInner: {
        paddingTop: 25,
        paddingHorizontal: 25,
        flex: 1,
    },
    title: {
        fontSize: customStyle.getFontSize(18),
        fontWeight: 'bold',
        color: customStyle.DarkGrey(),
        marginBottom: 20,
    },
    containerData: {
        backgroundColor: customStyle.White(),
        borderRadius: 5,
        marginBottom: 25,
    },
    dataField: {
        flexDirection: 'row',
        padding: 15,
        borderBottomColor: customStyle.ContentBackground(),
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    textInfo: {
        color: customStyle.getTitleTextColor(),
        fontWeight: 'bold',
        fontSize: customStyle.getFontSize(16),
        lineHeight: 30,
    },
    input: {
        lineHeight: 30,
    },
    inputFocused: {
        color: customStyle.getTitleTextColor(),
        backgroundColor: customStyle.White(),
        shadowColor: customStyle.Blue(),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: 5,
        minWidth: 120,
    },
    iconInfo: {
        marginRight: 15,
        minWidth: 22,
        alignItems: 'center',
    },
    iconInfo_icon: {
        fontSize: 20,
        color: customStyle.PrimaryColor(),
    },
    viewButton: {
        marginTop: 25,
        marginBottom: 25,
    },
    right: {
        marginLeft: 'auto',
    },
    edit: {},
    edit_icon: {
        fontSize: 18,
        color: '#202124',
    },

});

export default ProfileScreen;
