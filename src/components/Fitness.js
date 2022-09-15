import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import style from './styleFile';
const whiteOrange = '#FFF7F1';

export default function Fitness() {
    return (
        <View style={{ backgroundColor: whiteOrange }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={style.title}>Omelete de legumes
                </Text>
                <Image source={require('./imageReceitas/Omelete-de-legumes.jpg')} />

                <Text style={style.subtitle}>{"\n"}
                    Ingredientes</Text>
                <Text style={style.line}>
                    - 1 colher de sopa de óleo de coco</Text>
                <Text style={style.line}>- 1 ovo grande;</Text>
                <Text style={style.line}>- 1 xícara de abobrinha ralada</Text>
                <Text style={style.line}>- 1 xícara de tomate cortado em cubos</Text>
                <Text style={style.line}>- 1 xícara de cenoura ralada</Text>
                <Text style={style.line}>- 1 pitada de sal</Text>
                <Text style={style.line}>- folhas de alface</Text>

                <Text style={style.subtitle}>{"\n"}
                    Modo de Preparo</Text>
                <Text style={style.paragraph}>
                    Em um recipiente, bata os ovos com o sal, depois
                    acrescente os legumes ralados, a salsinha e misture bem.
                </Text>
                <Text style={style.paragraph}>{"\n"}
                    Depois reserve,
                    coloque o óleo de coco em uma frigideira antiaderente (fogo médio),
                    despeje a mistura na panela e deixe dourar dos dois lados, após isso
                    sirva com folhas de alface (ou outra verdura de sua preferência).
                </Text>


                <Text style={style.title}>
                    Brigadeiro falso
                </Text>
                <Image source={require('./imageReceitas/Brigadeiro-Falso.jpg')} />

                <Text style={style.subtitle}>{"\n"}Ingredientes</Text>
                <Text style={style.line}>- 1 colher de chá de cacau em pó</Text>
                <Text style={style.line}>- 1 colher de sopa de leite em pó</Text>
                <Text style={style.line}>- 1 banana bem madura</Text>

                <Text style={style.subtitle}>{"\n"}Modo de Preparo</Text>
                <Text style={style.paragraph}>
                    Esquente a banana no micro-ondas por 1 minuto,
                    se preferir, adicione 1 colher de sopa de água para a fruta ficar mais macia. Depois misture o restante dos ingredientes e coma com colher.{"\n"}
                </Text>

            </ScrollView>
        </View>

    );
}
