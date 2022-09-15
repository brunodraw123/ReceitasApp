import React from 'react';
import { View, Text, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native';
const margin = 3;
const brown = '#853D00';
const orange = '#FF7400';
const whiteOrange = '#FFECDC';

export default function HomeScreen({ navigation }) {
    return (

        <View style={{ flex: 4, flexDirection: 'column', padding: 1, backgroundColor: whiteOrange }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: brown, height: 50 }}>
                    <Text style={{ textAlign: 'center', color: whiteOrange, fontSize: 32, }}>Receitas.com</Text>
                </View>

                <Text style={{ padding: 10, fontWeight: 'bold', textAlign: 'justify' }}>   Bem vindo ao guia de receitas mais prático da internet. Fique a vontade para escolher as receitas que mais lhe convém. </Text>

                <Text style={{ paddingLeft: 10, paddingRight: 10, fontWeight: 'bold', textAlign: 'justify', color: brown, marginBottom: 10, }}> Em "Destaques
                    da Semana" reunimos as receitas mais comentadas da semana</Text>
                
                <View style={{backgroundColor:orange, paddingTop:20}}>
                    <View style={style.container}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{
                                flex: 1, height: 110, margin: margin,
                                elevation: 5,
                                shadowOpacity: 0.1,
                                borderBottomWidth: 0.3,
                            }}>
                                <ImageBackground source={require('../image/destaque1.jpg')} style={style.image}>
                                    <Text style={style.text} onPress={() => navigation.navigate('Destaques da Semana')}> Destaques da semana</Text>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>

                    <View style={style.container}>
                        <View style={{ flex: 3, flexDirection: 'row', }}>
                            <View style={{
                                flex: 2, height: 120, margin: margin, elevation: 2, shadowOpacity: 0.1,
                                borderBottomWidth: 0.1,
                            }}>
                                <ImageBackground source={require('../image/pratico.jpg')} style={style.image}>
                                    <Text style={style.text} onPress={() => navigation.navigate('Receitas Práticas')}> Práticas </Text>
                                </ImageBackground>
                            </View>
                            <View style={{
                                flex: 1, height: 120, margin: margin, elevation: 2, shadowOpacity: 0.1,
                                borderBottomWidth: 0.1,
                            }}>
                                <ImageBackground source={require('../image/fitness.jpg')} style={style.image}>
                                    <Text style={style.text} onPress={() => navigation.navigate('Pratos Fitness')}> Fitness </Text>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>

                    <View style={style.container}>
                        <View style={{ flex: 3, flexDirection: 'row' }}>
                            <View style={{
                                flex: 1, height: 110, margin: margin, elevation: 2, shadowOpacity: 0.1,
                                borderBottomWidth: 0.1,
                            }}>
                                <ImageBackground source={require('../image/doce.jpg')} style={style.image}>
                                    <Text style={style.text} onPress={() => navigation.navigate('Doces')}> Doce </Text>
                                </ImageBackground>
                            </View>
                            <View style={{
                                flex: 2, height: 110, margin: margin, elevation: 2, shadowOpacity: 0.1,
                                borderBottomWidth: 0.1,
                            }}>
                                <ImageBackground source={require('../image/vegano.jpg')} style={style.image}>
                                    <Text style={style.text} onPress={() => navigation.navigate('Pratos Veganos')}> Vegano </Text>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>

                    <View style={style.container}>
                        <View style={{
                            flex: 1, flexDirection: 'row', elevation: 2, shadowOpacity: 0.1,
                            borderBottomWidth: 0.1,
                        }}>
                            <View style={{ flex: 1, height: 90, margin: margin, }}>
                                <ImageBackground source={require('../image/salgado.jpg')} style={style.image}>
                                    <Text style={style.text} onPress={() => navigation.navigate('Salgados')}> Salgado </Text>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>


        </View>
    )
}
const style = StyleSheet.create({
    container:
    {
        flexDirection: 'column',
        flex: 1,
    },
    image:
    {
        flex: 1,
        rezideMode: "cover",
    },
    text:
    {
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        textShadowColor: 'gray',
    }
}
)