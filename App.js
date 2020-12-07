import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Navbar from './app/components/Navbar';
import appReducer from './app/reducers';
import ListItem from './app/screens/ListItem';

const store = createStore(appReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navbar />
          <ListItem />
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
