import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import api from './components/Api';
import Filme from './components/Filme';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      filme:[],
      filmeDigitado:'',
    };
    this.carregar = this.carregar.bind(this);
  }

  async componentDidMount(){
    const response = await api.get('?t='+this.state.filmeDigitado+'+&apikey=588a5524');
    this.setState({
      filme: response.data
    })
  }

  async carregar(){
    const response = await api.get('?t='+this.state.filmeDigitado+'+&apikey=588a5524');
    this.setState({
      filme: response.data
    })
  }

  render(){
    return (
      <View style={styles.body}>
        <Text h1 style={styles.titulo}>API Pesquisa de Filmes</Text>
          <View style={styles.pesquisa}>
            <TextInput placeholder="Pesquisar filme..." 
            onChangeText={(value) => this.setState({filmeDigitado:value})}/>
          </View>
          
          <View style={styles.retorno}>
            <Filme data={this.state.filme}/>
          </View>

          <View style={styles.button}>
            <Button title="Buscar" onPress={this.carregar} color='#b82748'/>
          </View>

        </View>
    );
  }
  
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#add6ed',
  },
  pesquisa: {
    position: 'absolute',
    marginLeft:40,
    marginTop:200,
    fontSize:20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor:'black',
    borderBottomWidth: 3,
    width:320,
    height: 40,
    backgroundColor:'#e6e6e6',
  },
  retorno: {
    position: 'absolute',
    marginTop: 300,
    marginLeft: 40,
    },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 750,
    },
    titulo: {
      color: '#000',
      position: 'absolute',
      marginTop:90,
      marginLeft:55,
      fontSize:20,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 25,
      borderBottomColor:'black',
      borderBottomWidth: 3,
    }
});

export default App;