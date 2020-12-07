import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

class Badge extends React.PureComponent {

  render() {
    const number = this.props.data.filter(item => item.selected).length
    return (
      <View>
        <Image
          source={require('../images/checkout.png')}
          style={{width: 50, height: 50}}
        />
        {!!number && (
          <View style={styles.badge}>
            <Text style={styles.text}>{number}</Text>
          </View>
        )}
      </View>
    );
  }
}
const size = 29;
const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'red',
    width: size,
    height: size,
    borderRadius: 18,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: -size / 2,
    right: -size / 2,
  },
  text: {color: '#fff', fontSize: 20},
});

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Badge);
