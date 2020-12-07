import React from 'react';
import { connect } from 'react-redux';
import {getListItem} from '../services/api';
import * as ACTIONS from '../actions/listItem'
import ListItem from '../screens/ListItem'

class ListItemContainer extends React.Component {

  componentDidMount = async () => {
    // network request
    let data = await getListItem();
    data = data.map(item => ({ ...item, selected: false  }))
    
    this.props.dispatch(ACTIONS.fetchListItems(data))

  }
  
  onPress = (item) => {
    this.props.dispatch(ACTIONS.addOrRemoveCard(item))
  }

  render() {
    return (
        <ListItem  data={this.props.data} onPress={this.onPress} selectedColor="lightgreen" />
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.listItemsReducer
  }
}

export default connect(mapStateToProps)(ListItemContainer);
