import React from 'react';
import {View, Text, FlatList, TouchableNativeFeedback} from 'react-native';
import { connect } from 'react-redux';
import {getListItem} from '../services/api';
import * as ACTIONS from '../actions/listItem'
class ListItem extends React.Component {

  componentDidMount = async () => {
    // network request
    let data = await getListItem();
    data = data.map(item => ({ ...item, selected: false  }))
    
    this.props.dispatch(ACTIONS.fetchListItems(data))

  }
  
  onPress = (item) => {
    this.props.dispatch(ACTIONS.addOrRemoveCard(item))
  }

  renderItem = ({item}) => {
    return (
      <TouchableNativeFeedback onPress={() => this.onPress(item)}>
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
const mapStateToProps = state => {
  return {
    data: state.listItemsReducer
  }
}

export default connect(mapStateToProps, )( ListItem);
