import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Cep extends Component{

    render(){
        return(
            <>
                <Text>Titulo: {this.props.data.Title}</Text>
            </>
        )
    }
}

export default Cep;