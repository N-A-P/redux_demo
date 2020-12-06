import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Navbar from './app/components/Navbar';
import ListItem from './app/screens/ListItem';
import { getListItem } from './app/services/api';



class App extends React.Component {
  state={
    data: []
  }
  handlePressItem = (item) =>{
    const newData = this.state.data.map(ele => {
      if(ele.id === item.id)
        return {...ele, selected: !ele.selected}

      return ele;
    })
    this.setState({data: newData, })
  }
  async componentDidMount() {
    let data = await getListItem();
    data = data.map(item => ({...item, selected: false}) )
    this.setState({data});
  }
  render() {
    return (
      <View style={styles.container}>
        <Navbar data={this.state.data}/>
        <ListItem handlePressItem={this.handlePressItem} data={this.state.data}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
export default App;
