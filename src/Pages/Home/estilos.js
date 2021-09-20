import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',

  },
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 5,
  },
  conteinerSacola: {
    backgroundColor: '#AED6F1',
    padding: 18,
    borderRadius: 30,
  },
  conteinerDescricao: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  conteinerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  texto: {
    padding: 34,
    backgroundColor: '#87CEFA',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'//por enquantos
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#1A1A1A',
  },
  imagem: {
    height: 30,
    width: 30,
  },
  titulo: {
    //fontFamily: 'OpenSans-Bold',//Problema na Implementação da Font
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export const cores = {
  roxo: '#8A2BE2',
  laranja: '#FFA500',
  escuro: '#555555',
  claro: '#fff',
  cinza: '#C7C7C7',
  verde: '#98FB98',
  azulC: '#87CEFA',
  azulC2: '#AED6F1'
};

