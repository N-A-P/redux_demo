
import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback, Button} from 'react-native';
import Badge from './Badge';

class Navbar extends React.PureComponent {
  render() {
    return (
        <View style={{ backgroundColor: '#20c842',flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Shopping App</Text>
          <Badge data={this.props.data} />
        </View>
    );
  }
}
export default Navbar;
