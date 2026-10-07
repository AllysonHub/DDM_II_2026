import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.texto}>
          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1966, quando os designers da Letraset e James Mosley, o bibliotecário da St Bride Printing Library em Londres, pegaram uma tradução de Cícero de 1914 e a embaralharam para criar um texto fictício para as folhas de tipos da Letraset. Ele sobreviveu não apenas a muitas décadas, mas também à transição para a editoração eletrônica, permanecendo essencialmente inalterado. Foi popularizado graças a essas folhas e, mais recentemente, com softwares de editoração eletrônica como o Aldus PageMaker e o Microsoft Word, que incluíam versões de Lorem Ipsum.

          Por que o utilizamos?
          É um fato conhecido que um leitor se distrairá com o conteúdo legível de uma página ao analisar seu layout. A vantagem de usar Lorem Ipsum é que ele possui uma distribuição de letras mais ou menos normal, ao contrário de usar frases como "Conteúdo aqui, conteúdo aqui", que o fazem parecer inglês legível. Muitos programas de editoração eletrônica e editores de páginas web agora usam Lorem Ipsum como texto padrão, e uma busca por "lorem ipsum" revelará muitos sites ainda em desenvolvimento. Diversas versões surgiram ao longo dos anos, algumas por acidente, outras propositalmente (com a inserção de humor, por exemplo).

        </Text>
      </ScrollView>
      <TextInput placeholder="Teste" style={styles.input}></TextInput>
      <Button title='Botao' style={styles.botao}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#be25ff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  texto: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    fontSize: 20,
  },
  input: {
    backgroundColor: 'rgb(203, 143, 255)',
    color: '#eddbff',
    fontSize: 20,
    padding: 10,
    margin: 10,
  },
  botao: {
    fontSize: 40,
  }
});
