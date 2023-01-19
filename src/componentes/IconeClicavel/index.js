import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import estilos from "./estilos";

export function IconeClicavel({
  exibir=true,
  onPress,
  iconeNome="trash-2",
  iconeTamanho=25,
  iconeCor="#fff",
  quantidadeNotificacoes=0
}){

  if(!exibir) return null;

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconeNome} size={iconeTamanho} color={iconeCor} />
      {quantidadeNotificacoes > 0 && (
        <Text style={estilos.qtdNotificacoes}>{quantidadeNotificacoes}</Text>
      )}
    </TouchableOpacity>
  );
}