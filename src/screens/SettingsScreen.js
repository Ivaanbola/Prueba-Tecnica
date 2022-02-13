import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import customStyle from '../commons/CustomStyle';
import ToggleSwitch from '../components/ToggleSwitch';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

const SettingsScreen = () => {
    let notificaciones = false;
    let alertas = false;
    let silenceEnable = false;
    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.containerInner}>
                    <View style={styles.block}>
                        <Text style={styles.title}>{'Notificaciones'}</Text>
                        <TouchableOpacity onPress={() => notificaciones = !notificaciones}>
                            <View style={styles.item}>
                                <View>
                                    <Text style={styles.item_title}>{'Alertas'}</Text>
                                    {notificaciones ?
                                        <Text style={styles.item_value}>{'Activado'}</Text>
                                        :
                                        <Text style={styles.item_value}>{'Desactivado'}</Text>
                                    }
                                </View>
                                <ToggleSwitch
                                    isOn={notificaciones === true}
                                    name={'notificaciones'}
                                    onToggle={(name, isOn) => notificaciones = isOn}
                                />
                            </View>
                        </TouchableOpacity>

                        <View style={styles.item}>
                            <View>
                                <Text style={styles.item_title}>{'Sonido'}</Text>
                                <Text style={styles.item_value}>{'Tritono'}</Text>
                            </View>
                            <IconFA5 name={'pencil-alt'} style={styles.item_edit} />
                        </View>

                    </View>

                    <View style={styles.block}>
                        <Text style={styles.title}>{'Recibir ofertas'}</Text>
                        <TouchableOpacity onPress={() => alertas = !alertas}>
                            <View style={styles.item}>
                                <View>
                                    <Text style={styles.item_title}>{'Alertas'}</Text>
                                    {alertas ?
                                        <Text style={styles.item_value}>{'Activado'}</Text>
                                        :
                                        <Text style={styles.item_value}>{'Desactivado'}</Text>
                                    }
                                </View>
                                <ToggleSwitch
                                    isOn={alertas === true}
                                    name={'alertas'}
                                    onToggle={(name, isOn) => alertas = isOn}
                                />
                            </View>
                        </TouchableOpacity>

                        <View style={styles.item}>
                            <View>
                                <Text style={styles.item_title}>{'Sonido'}</Text>
                                <Text style={styles.item_value}>{'Acorde'}</Text>
                            </View>
                            <IconFA5 name={'pencil-alt'} style={styles.item_edit} />
                        </View>
                    </View>

                    <View style={styles.block}>
                        <Text style={styles.title}>{'No molestar'}</Text>
                        <TouchableOpacity onPress={() => silenceEnable = !silenceEnable}>
                            <View style={styles.item}>
                                <View>
                                    <Text style={styles.item_title}>{'No molestar'}</Text>
                                    {silenceEnable ?
                                        <Text style={styles.item_value}>{'Activado'}</Text>
                                        :
                                        <Text style={styles.item_value}>{'Desactivado'}</Text>
                                    }
                                </View>
                                <ToggleSwitch
                                    isOn={alertas === true}
                                    name={'alertas'}
                                    onToggle={(name, isOn) => alertas = isOn}
                                />
                            </View>
                        </TouchableOpacity>


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
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginRight: 8,
    },
    block: {
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 25,
        backgroundColor: customStyle.White(),
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    item_title: {
        fontWeight: '700',
    },
    item_value: {
        color: customStyle.DarkMed2Grey(),
    },
    item_edit: {
        fontSize: 20,
        color: '#3BB65A',
    },

});

export default SettingsScreen;
