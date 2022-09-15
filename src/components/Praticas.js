import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import style from './styleFile';
const whiteOrange = '#FFF7F1';

export default function Praticas() {
    return (
        <View style={{ backgroundColor: whiteOrange }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={style.title}>Prato Ratatouille</Text>
                <Image source={require('./imageReceitas/Ratatouille.jpg')} />

                <Text style={style.subtitle}>{"\n"}Ingredientes
                </Text>
                <Text style={style.line}>- 6 cebolas</Text>
                <Text style={style.line}>- 6 tomates</Text>
                <Text style={style.line}>- 6 abobrinhas italianas</Text>
                <Text style={style.line}>- 1 beringela grande</Text>
                <Text style={style.line}>- 1 pimentão verde</Text>
                <Text style={style.line}>- 1 pimentão vermelho</Text>
                <Text style={style.line}>- 2 dentes de alho</Text>
                <Text style={style.line}>- sal e pimenta do reino a gosto</Text>
                <Text style={style.line}>- 1 folha de louro</Text>
                <Text style={style.line}>- manjericão fresco a gosto</Text>
                <Text style={style.line}>- azeite de oliva a gosto</Text>

                <Text style={style.subtitle}>{"\n"}Modo de Preparo</Text>

                <Text style={style.paragraph}>Corte a berinjela em rodelas finas e deixe de molho numa bacia com água e umas 4 colheres de sopa de vinagre durante 15 minutos, para evitar que amargue. Corte a abobrinha em rodelas finas. Corte os tomates em cubinhos.
                </Text>

                <Text style={style.paragraph}>{"\n"}Retire as sementes do pimentão e pique em tiras. Coloque o óleo de oliva na panela e deixe aquecer, acrescente as cebolas cortadas em rodelas e deixe dourar levemente, em seguida ponha o alho picado. Junte os legumes, o louro, os temperos restantes e mexa bem, mas com cuidado para "machucar" os legumes. Cozinhe em fogo baixo com a panela semi tampada até que os legumes fiquem molinhos.</Text>


                <Text style={style.title}>Crepioca Básica</Text>
                <Image source={require('./imageReceitas/Crepioca.jpg')} />

                <Text style={style.subtitle}>{"\n"}Ingredientes
                </Text>
                <Text style={style.line}>- 1 ovo</Text>
                <Text style={style.line}>- 2 colheres de tapioca</Text>
                <Text style={style.line}>- Tempero a gosto</Text>
                <Text style={style.line}>- 4 colheres de sopa de frango desfiado</Text>
                <Text style={style.line}>- ½ tomate</Text>
                <Text style={style.line}>- 2 colheres de milho</Text>

                <Text style={style.subtitle}>{"\n"}Modo de Preparo</Text>

                <Text style={style.paragraph}>Bata bem todos os ingredientes da massa. Numa frigideira antiaderente, despeje a mistura e a cozinhe como se fosse uma panqueca. Depois de pronta, recheie a massa com o
                </Text>


                <Text style={style.title}>Escondidinho Básico</Text>
                <Image source={require('./imageReceitas/escondidinho.jpg')} />

                <Text style={style.subtitle}>{"\n"}Ingredientes
                </Text>
                <Text style={style.line}>- 1 cebola picada</Text>
                <Text style={style.line}>- 2 colheres (sopa) de óleo vegetal</Text>
                <Text style={style.line}>- 450g de carne moída</Text>
                <Text style={style.line}>- 800g de polpa de tomate</Text>
                <Text style={style.line}>- 2 xícaras de queijo ralado</Text>
                <Text style={style.line}>- 1 Xícara de queijo ralado</Text>
                <Text style={style.line}>- Sal a gosto</Text>

                <Text style={style.subtitle}>{"\n"}Modo de Preparo</Text>

                <Text style={style.paragraph}>Preaqueça o forno em temperatura alta (200ºC). Refogue a cebola no óleo quente até dourar. Coloque então a carne moída e deixe dourar também. Adicione em seguida a polpa de tomate, tempere com sal a gosto e cozinhe até secar. Espalhe a carne no fundo de um refratário, cubra com o purê e finalize com queijo ralado. Leve ao forno e asse por 10 minutos, ou até o queijo derreter. Sirva quente.{"\n"}
                </Text>

            </ScrollView>
        </View>
    )
}
