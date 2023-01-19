import * as ImagePicker from 'expo-image-picker';

// funcao para adicionar um novo item na lista
export const alteraDados = (variavel, valor, dados, setDados) => {
  setDados({
    ...dados,
    [variavel]: valor
  })
}

// funcao para verificar se a entrada esta vazia
export function verificaSeTemEntradaVazia(dados, setDados) {
  for (const [variavel, valor] of Object.entries(dados)) {
    if (valor == '') {
      setDados({
        ...dados,
        [variavel]: null
      })
      return true
    }
  }
  return false
}

export async function escolherImagemDaGaleria(setImagem){
  let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
}

export function verificarItens(item1, item2){
  return item1 == item2;
}