// import React from 'react';
// import {View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity} from 'react-native';

// class Item extends React.PureComponent {
//   state = {
//     selected: false,
//   };
//   onPress = () => {
//     this.setState((prev) => ({selected: !prev.selected}));
//     console.log("asd");    
//   };

//   render() {
//     return (
//       <TouchableOpacity onPress={this.onPress}>
//         <View
//           style={{
//             padding: 20,
//             elevation: 3,
//             borderRadius: 10,
//             marginHorizontal: 20,
//             backgroundColor: !this.state.selected ? '#eee' : 'lightgreen',
//           }}>
//           <Text style={{fontSize: 20}}>{this.props.item.name}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   }
// }
// export default Item;
