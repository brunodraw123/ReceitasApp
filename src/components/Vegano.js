import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import style from './styleFile';
const whiteOrange = '#FFF7F1';

export default function Vegano() {
    return (
        <View style={{ backgroundColor: whiteOrange }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={style.title}>Pão de Alho com Crosta de Queijo</Text>
                <Image source={require('./imageReceitas/pao-de-alho.jpg')} />

                <Text style={style.subtitle}>{"\n"}Ingredientes</Text>
                <Text style={style.line}>- Pão italiano (ou de sua preferência)</Text>
                <Text style={style.line}>- 4 dentes de alho</Text>
                <Text style={style.line}>- 4 colheres de sopa de manteiga </Text>
                <Text style={style.line}>- Queijo mussarela</Text>
                <Text style={style.line}>- Orégano e Sal a gosto</Text>

                <Text style={style.subtitle}>{"\n"}Modo de Preparo</Text>
                <Text style={style.paragraph}> Corte o pão ao meio de forma que ambas as partes tenha bastante miolo. Em uma tigela misture a manteiga amolecida com o alho triturado, sal e orégano.{"\n"}</Text>
                <Text style={style.paragraph}>Passe a pasta de manteiga com alho nas duas partes de do pão, cubra com papel alumínio e leve para assar por 10 minutos em forno pré-aquecido a 180°C para que a manteiga penetre no pão. Cubra com bastante queijo mussarela e leve para derreter ou gratinar se preferir uma crostinha firme.</Text>


                <Text style={style.title}>Quibe vegetariano de forno</Text>
                <Image source={require('./imageReceitas/quibe-vegetariano.jpg')} />
                <Text style={style.subtitle}>{"\n"}Ingredientes</Text>
                <Text style={style.line}>- 2 xícaras de chá de trigo para quibe</Text>
                <Text style={style.line}>- 2 xícaras de chá de soja granulada/texturada</Text>
                <Text style={style.line}>- ½ xícara de chá de cebola picada</Text>
                <Text style={style.line}>- ½ xícara de chá de hortelã picada</Text>
                <Text style={style.line}>- ½ xícara de chá de cenoura ralada</Text>
                <Text style={style.line}>- 1 tomate picado</Text>
                <Text style={style.line}>- Sal e pimenta a gosto e molho shoyu</Text>

                <Text style={style.subtitle}>{"\n"}Modo de Preparo</Text>
                <Text style={style.paragraph}>Colocar o trigo e a soja (separadamente) de molho por 45 minutos em água quente. Peneire o trigo e separa. Peneire a soja e separe. Depois, misturar bem o trigo com a soja. Acrescentar os outros ingredientes e amassar com a mão. Untar a forma com azeite e colocar na forma retangular a receita. Cortar em quadrados e colocar azeite por cima. Levar ao forno médio (180°) por 40 minutos.</Text>


                <Text style={style.title}>Batata ao Murro</Text>
                <Image source={require('./imageReceitas/batata-murro.jpg')} />
                <Text style={style.subtitle}>{"\n"}Ingredientes</Text>
                <Text style={style.line}>- 4 batatas médias</Text>
                <Text style={style.line}>- 2 dentes de alho</Text>
                <Text style={style.line}>- 1 ramo de alecrim</Text>
                <Text style={style.line}>- 3 colheres de sopa de azeite</Text>
                <Text style={style.line}>- Sal e pimenta do reino</Text>
                <Text style={style.line}>- Queijo de sua preferência
                </Text>

                <Text style={style.subtitle}>{"\n"}Modo de Preparo</Text>
                <Text style={style.paragraph}>
                    Cozinhe as batatas por cerca 20 minutos ou até ficarem macias e reserve. Em uma tigela misture 2 dentes de alho, 1 ramo de alecrim, 3 colheres (sopa) de azeite e reserve. Unte a forma, acomode as batatas e amasse um pouco, tempere com sal, pimenta do reino e o azeite aromatizado, cubra com o queijo de sua preferência, leve para assar em forno pré aquecido a 200ºC por 30 minutos ou até dourar e aproveite.
                </Text>

            </ScrollView>
        </View>
    )
}