import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import style from './styleFile';
const whiteOrange = '#FFF7F1';

export default function Doces() {
    return (
        <View style={{ backgroundColor: whiteOrange }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={style.title}>
                    Brownie (Padaria Bella Paulista)
                </Text>
                <Image source={require('./imageReceitas/brownie.jpg')} />

                <Text style={style.subtitle}>{"\n"}Ingredientes</Text>

                <Text style={style.line}>- 2 tabletes de margarina</Text>
                <Text style={style.line}>- 1 xícara (chá) de açúcar </Text>
                <Text style={style.line}>- 3 ovos inteiros </Text>
                <Text style={style.line}>- 2 xícaras (chá) chocolate em pó </Text>
                <Text style={style.line}>- 1 xícara (chá) farinha de trigo</Text>
                <Text style={style.line}>- 1 colher (sopa) de fermento </Text>
                <Text style={style.line}>- 1 xícara (chá) de leite </Text>
                <Text style={style.line}>- 1 lata de creme de leite </Text>
                <Text style={style.line}>- 1 colheres (sopa) de açúcar </Text>
                <Text style={style.line}>- 4 colheres (sopa) de chocolate em pó </Text>
                <Text style={style.line}>- 1 colher (sobremesa) de margarina </Text>

                <Text style={style.subtitle}>{"\n"}Modo de Preparo</Text>
                <Text style={style.paragraph}>
                    Massa: Separe as gemas das claras e bata as claras em neve e deixe descansando, enquanto isso bata na batedeira a margarina e o açúcar até formarem um creme. Aos poucos, junte o restante dos ingredientes e continue batendo até formar uma massa homogênea.
                </Text>
                <Text style={style.paragraph}>{"\n"}
                    Logo em seguida, misture com uma colher as claras em neve que estavam descansando e despeje a massa em uma forma retangular untada e enfarinhada. Leve para assar em forno médio, pré-aquecido, por mais ou menos 35 minutos.
                </Text>
                <Text style={style.paragraph}>{"\n"}
                    Cobertura: Coloque todos os ingredientes em uma panela, leve para o fogão em temperatura média e vá mexendo até ferver. Em seguida, com o bolo ainda quente, despeje a cobertura sobre ele. Se quiser, decore com amêndoas ou castanha-do-pará. Dica: Se quiser fazer idêntico ao da padaria, derreta chocolate branco, para que a cobertura fique mesclada.
                </Text>

                <Text style={style.title}>Terrine de Chocolate (Terraço Itália)
                </Text>
                <Image source={require('./imageReceitas/terraco-italia.jpg')} />

                <Text style={style.subtitle}>{"\n"}Ingredientes</Text>
                <Text style={style.line}>- ½ kg chocolate meio amargo de boa qualidade </Text>
                <Text style={style.line}>-
                    ½ kg de chocolate branco de boa qualidade </Text>
                <Text style={style.line}>- 200g creme de leite fresco </Text>
                <Text style={style.line}>- 06 gemas peneiradas</Text>

                <Text style={style.subtitle}>{"\n"}Modo de Preparo</Text>
                <Text style={style.paragraph}>
                    Chocolate branco: Derreta o chocolate em banho-maria e reserve. Bata 100g de creme de leite na batedeira até obter um creme leve. Acrescente 03 gemas ao chocolate derretido e mexa delicadamente. Em seguida acrescente o creme de leite batido e continue mexendo delicadamente para manter a textura cremosa.
                    {"\n"} </Text>
                <Text style={style.paragraph}>
                    Chocolate amargo: Derreta o chocolate em banho-maria e reserve. Bata 100g creme de leite na batedeira até obter um creme leve. Acrescente 03 gemas ao chocolate derretido e mexa delicadamente. Em seguida acrescente o creme de leite batido e continue mexendo delicadamente para manter a textura cremosa.
                    {"\n"}</Text>
                <Text style={style.paragraph}>
                    Montagem: Em uma forma retangular própria para terrine, despeje metade do creme de chocolate amargo e leve ao refrigerador até obter a consistência desejada. Retire do congelador e acrescente todo o creme de chocolate branco e leve novamente ao congelador até obter a consistência desejada. Retire do congelador e acrescente a outra metade do creme de chocolate amargo e leve ao congelador até obter a consistência desejada.{"\n"}</Text>
                <Text style={style.paragraph}>
                    Dica do Chef: se quiser deixar o seu terrine crocante, faça uma farofa de crocante (que pode ser de açúcar e amêndoas) e intercale com o creme ao montar na forma. Coloque uma camada do terrine e deixe resfriar, depois acrescente uma camada da farofa e assim sucessivamente até atingir a altura desejada. Decore com lascas de chocolate.{"\n"}
                </Text>
            </ScrollView>

        </View>
    )
}