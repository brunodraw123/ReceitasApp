import React from 'react';
import { View, Text, Image,ScrollView } from 'react-native';
import style from './styleFile';
const whiteOrange = '#FFF7F1';
 
export default function Destaques() {
  return (
    <View style={{ backgroundColor: whiteOrange }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style.title}>Molho Sherry Shallot (L'Entrecôte Paris)</Text>
        <Image source={require('./imageReceitas/lentrecote-de-paris.jpg')} />

        <Text style={style.subtitle}>
          {"\n"}Ingredientes
        </Text>
        <Text style={style.line}>- 1 entrecôte (bife) de cerca de 170g </Text>
        <Text style={style.line}>- 2 colheres de sopa de cebolas echalotes picadas </Text>
        <Text style={style.line}>- 1 colher de sopa de azeite extra virgem </Text>
        <Text style={style.line}>- 1 colher de sopa de jerez ou vinho tinto </Text>
        <Text style={style.line}>- 1 colher de sopa de vinagre suave </Text>
        <Text style={style.line}>- 2 colheres de sopa de mostarda Dijon </Text>
        <Text style={style.line}>- 150 ml de creme de leite fresco</Text>
        <Text style={style.line}>- 1 colher de sopa manteiga gelada </Text>
        <Text style={style.line}>- sal grosso moído, açúcar e salsinha a gosto </Text>
        <Text style={style.line}>- 1 colher de sopa de vinagre suave</Text>
        <Text style={style.line}>- 2 colheres de sopa de mostarda Dijon</Text>

        <Text style={style.subtitle}>{"\n"}Modo de preparo</Text>
        <Text style={style.paragraph}>
          Salgue a carne com o sal grosso moído e, numa grelha ou frigideira bem quente, grelhe o entrecôte por três minutos de cada lado. Numa frigideira
          à parte, coloque o azeite e a echalote picada. Refogue, adicione o jerez e dê uma flambada.
        </Text>
        <Text style={style.paragraph}>
          Coloque o vinagre e deixe evaporar um pouco. Entre com a mostarda Dijon e complete com o creme de leite fresco. Nesse ponto, é preciso ter cuidado para não queimar o molho - se for preciso, adicione um pouco de água. Adicione sal e uma pitada de açúcar (para corrigir o excesso de acidez). Coloque a manteiga bem gelada, que vai conferir cremosidade e brilho ao molho, e salpique com salsinha.
        </Text>
        <Text style={style.paragraph}>{"\n"}
          Antes de servir, corte a carne e coloque no prato para depois cobrir com o molho.
        </Text>

        <Text style={style.title}>Pão Australiano (Outback)</Text>
        <Image source={require('./imageReceitas/pao-australiano-do-outback.jpg')} />

        <Text style={style.subtitle}>
          {"\n"}Ingredientes
        </Text>

        <Text style={style.line}>- 1 + ¾ xícaras de chá de farinha de trigo + farinha para sovar</Text>
        <Text style={style.line}>- 1 xícara de chá de farinha de trigo integral</Text>
        <Text style={style.line}>- 1 xícara de chá de farinha de centeio</Text>
        <Text style={style.line}>- 3 colheres de sopa de açúcar mascavo</Text>
        <Text style={style.line}>- 3 colheres de sopa de chocolate em pó</Text>
        <Text style={style.line}>- 1 colher de chá de sal</Text>
        <Text style={style.line}>- 2 colheres de chá de fermento biológico seco instantâneo</Text>
        <Text style={style.line}>- 1 xícara de chá de água morna</Text>
        <Text style={style.line}>- 15 gotas de corante alimentício marrom</Text>
        <Text style={style.line}>- ½ xícara de chá de melaço de cana</Text>
        <Text style={style.line}>- 2 colheres de sopa de manteiga em temperatura ambiente
        </Text>
        <Text style={style.line}>- 2 colheres de sopa de fubá</Text>
        <Text style={style.line}>- 200g de manteiga em temperatura ambiente</Text>
        <Text style={style.line}>- 150ml de água</Text>

        <Text style={style.subtitle}>{"\n"}Modo de preparo</Text>
        <Text style={style.paragraph}>
          Comece preaquecendo o forno a 200°C. Pão: Em um bowl, misture os ingredientes secos (farinha de trigo, farinha de trigo integral, farinha de centeio, açúcar mascavo, chocolate em pó, sal e fermento). Depois, misture o corante marrom na água morna. Faça um buraco no meio dos ingredientes secos e jogue ali a água, o melaço de cana e a manteiga, mexa até virar uma massa.
        </Text>
        <Text style={style.paragraph}>{"\n"}
          Agora é hora de misturar a massa com a mão até ficar firme. Coloque a massa em uma superfície lisa enfarinhada e comece a sová-la, deixanda a massa ainda mais macia. Deixe a massa descansando coberta por um pano por uma hora. Divida a massa descansada em três pães e coloque em uma forma untada ou forrada com papel manteiga. Com as mãos passa água nos pãezinhos e polvilhe um pouco de fubá, deixe descansando por mais 20 minutos.
        </Text>
        <Text style={style.paragraph}>{"\n"}
          Agora é só levar ao forno até dourar, cerca de 30 minutos. Manteiga: Na batedeira bata a manteiga e a água até ficar bem clarinha. A manteiga vai dobrar de tamanho e aí estará pronta. Depois é só servir o pão quentinho com a manteiga.
        </Text>


        <Text style={style.title}>Pastel de Belém (Habib's)</Text>
        <Image source={require('./imageReceitas/pastel-de-belem-do-habibs.jpg')} />

        <Text style={style.subtitle}>{"\n"}Ingredientes</Text>
        <Text style={style.line}>- 500ml de leite</Text>
        <Text style={style.line}>- 250g de açúcar</Text>
        <Text style={style.line}>- 50g de farinha de trigo</Text>
        <Text style={style.line}>- Casca de ½ limão</Text>
        <Text style={style.line}>-  1 unidade de canela em pau</Text>
        <Text style={style.line}>- 1 ovos, 5 gemas</Text>
        <Text style={style.line}>- 1 colher de café de essência de baunilha</Text>
        <Text style={style.line}>250g de massa folhada pronta</Text>

        <Text style={style.subtitle}>{"\n"}Modo de preparo</Text>
        <Text style={style.paragraph}>Preaqueça o forno a 200°C. Comece misturando o açúcar e a farinha de trigo, passando os dois em uma peneira, reserve. Ferva o leite com a casca do limão e a canela em pau.{"\n"}</Text>
        <Text style={style.paragraph}>Quando o leite ferver, retire o limão e a canela. Misture o leite, a farinha e o açúcar, e mexa até ficar homogêneo, deixe esfriando por 10 minutos.{"\n"}
        </Text>
        <Text style={style.paragraph}>Depois, misture os ovos e a essência de baunilha, é o creme do recheio. Corte a massa folhada em círculos, em um tamanho grande, suficiente para cobrir toda forminha do pastel - você pode usar um copo de boca bem larga para cortar. Coloque a massa em forminhas de cupcakes e despeje dentro o recheio. Leve ao forno até dourar.
          {"\n"}
        </Text>

      </ScrollView>
    </View>
  )
}


