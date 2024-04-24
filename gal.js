// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React, { useEffect, useState } from 'react';
// import { View, FlatList, Image, StyleSheet, Button} from 'react-native';

// const GalleryComponent = ({Navigation}) => {
//   const [photos, setPhotos] = useState([]);

//   // Assume photos is an array of photo URIs
//   useEffect(async() => {
//     AsyncStorage.data.then((value) => setPhotos(value));
//   }, [])

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={photos}
//         renderItem={({ item }) => (
//           <Image source={{ uri: item }} style={styles.image} />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         numColumns={3}
//       />
//     <View>
//         <Button title='Go Back' onPress={()=>{Navigation.navigate('Camera')}}></Button>
//     </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     margin: 5,
//   },
// });

// export default GalleryComponent;
