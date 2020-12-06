import React from 'react';
import {View, Text, FlatList, TouchableNativeFeedback} from 'react-native';
import {getListItem} from '../services/api';

class ListItem extends React.Component {

 
  renderItem = ({item}) => {
    return (
      <TouchableNativeFeedback onPress={() => this.props.handlePressItem(item)}>
        <View
          style={{
            padding: 20,
            elevation: 3,
            borderRadius: 10,
            marginHorizontal: 20,
            backgroundColor: !item.selected ? '#eee' : 'lightgreen',
          }}>
          <Text style={{fontSize: 20}}>{item.name}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  };

  renderSeparator = () => <View style={{height: 20}} />;
  keyExtractor = (item) => item.id.toString();

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.data}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={this.renderItem}
        contentContainerStyle={{paddingTop: 20}}
      />
    );
  }
}
export default ListItem;
