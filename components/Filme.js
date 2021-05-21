import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Filme extends Component{

    render(){
        return(
            <>
                <Text h1>Titulo:</Text>
                <Text style={styles.textS}> {this.props.data.Title}</Text>
                <Text>Lançado:</Text>
                <Text style={styles.textS}>{this.props.data.Released}</Text>
                <Text>Diretor:</Text>
                <Text style={styles.textS}> {this.props.data.Director}</Text>
                <Text>Idioma:</Text>
                <Text style={styles.textS}> {this.props.data.Language}</Text>
                <Text>Enredo:</Text>
                <Text style={styles.textS}> {this.props.data.Plot}</Text>
            </>
        )
    }
}

const styles = StyleSheet.create 
({
    textS: {
        color: '#fff',
    }
});

export default Filme;