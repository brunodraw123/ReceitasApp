import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import style from './styleFile';
const whiteOrange = '#FFF7F1';

export default function Salgado() {
    return (
        <View style={{ backgroundColor: whiteOrange }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={style.title}>Pão de queijo de liquidificador</Text>
                <Image source={require('./imageReceitas/pao-de-queijo.jpg')} />

                <Text style={style.subtitle}>{"\n"}Ingredientes</Text>
                <Text style={style.line}>- 3 xícaras (chá) de polvilho doce</Text>
                <Text style={style.line}>- 3 ovos</Text>
                <Text style={style.line}>- 1/2 xícara (chá) de óleo</Text>
                <Text style={style.line}>- 1 xícara (chá) de leite quente</Text>
                <Text style={style.line}>- Sal a gosto</Text>
                <Text style={style.line}>- 1 colher (chá) de fermento em pó</Text>
                <Text style={style.line}>- Óleo e farinha de trigo para untar</Text>
                <Text style={style.line}>- 1 e 1/2 xícara (chá) de queijo de minas padrão (meia cura) ralado</Text>
                <Text style={style.line}>- 1 e 1/2 xícara (chá) de polvilho azedo</Text>

                <Text style={style.subtitle}>{"\n"}Modo de Preparo</Text>
                <Text style={style.paragraph}>No liquidificador, bata o polvilho doce, os ovos, o óleo, o leite, o sal e o fermento. Coloque em uma tigela, deixe esfriar e misture o queijo e o polvilho azedo até ficar homogêneo. Com as mãos, untadas de óleo modele bolinhas e disponha em uma fôrma untada e enfarinhada. Leve ao forno médio, preaquecido, por 20 minutos ou até dourar. Se desejar, sirva acompanhado de requeijão cremoso tipo Catupiry.</Text>


                <Text style={style.title}>Batata recheada com atum</Text>
                <Image source={require('./imageReceitas/batata-recheada.jpg')} />

                <Text style={style.subtitle}>{"\n"}Ingredientes</Text>
                <Text style={style.line}>- 5 batatas grandes </Text>
                <Text style={style.line}>- 1 lata de atum escorrido </Text>
                <Text style={style.line}>- 1 cebola ralada </Text>
                <Text style={style.line}>- 5 colheres (sopa) de maionese </Text>
                <Text style={style.line}>- Sal e pimenta-do-reino a gosto </Text>
                <Text style={style.line}>- Queijo parmesão ralado a gosto </Text>
                <Text style={style.line}>- Cebolinha picada para polvilhar </Text>

                <Text style={style.subtitle}>{"\n"}Modo de Preparo</Text>
                <Text style={style.paragraph}>Lave as batatas e seque. Faça alguns furos com um garfo. No micro-ondas, coloque as batatas diretamente no prato e ligue em potência máxima por 4 minutos. Vire as batatas e ligue por mais 4 minutos. Quando estiver morna, corte no sentido do comprimento. Retire o miolo com uma colher, deixando uma camada de 1cm junto da casca. Reserve. Misture o atum, a cebola, a maionese, sal e pimenta. Junte com o miolo das batatas e recheie. Polvilhe com queijo ralado e leve ao micro-ondas para gratinar, por 12 minutos, em potência alta. Polvilhe com cebolinha e sirva.</Text>

                <Text style={style.title}>Torta-pizza fácil</Text>
                <Image source={require('./imageReceitas/torta-pizza.jpg')} />

                <Text style={style.subtitle}>{"\n"}Ingredientes</Text>
                <Text style={style.line}>- 1 pacote de pão de forma sem casca (350g)</Text>
                <Text style={style.line}>- Azeite para untar</Text>
                <Text style={style.line}>- 400g de presunto fatiado</Text>
                <Text style={style.line}> - 400g de queijo mussarela fatiado</Text>
                <Text style={style.line}>- 3 tomates em rodelas</Text>
                <Text style={style.line}>- Sal e orégano a gosto</Text>
                <Text style={style.line}>- 1/2 caixa de creme de leite (100g)
                </Text>

                <Text style={style.subtitle}>{"\n"}Modo de Preparo</Text>
                <Text style={style.paragraph}>
                    Com algumas fatias de pão de forma, forre o fundo e laterais de uma fôrma de aro removível de 22cm untada. Dentro da fôrma, faça camadas de presunto, de mussarela, de tomate temperado com sal e orégano, e de pão umedecido com creme de leite temperado com sal. Repita as camadas até acabarem os ingredientes, terminando em presunto, queijo mussarela e tomate temperado com sal e orégano. Leve ao forno médio, preaquecido, por 15 minutos ou até gratinar. Retire, deixe amornar, desenforme e sirva em seguida.{"\n"}
                </Text>
            </ScrollView>
        </View>)
}