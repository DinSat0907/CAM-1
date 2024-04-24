import { Camera, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import { StatusBar } from 'react-native';

export default function Cam({navigation}) {

const cameraRef = useRef(null);
const [photo, setPhoto] = useState(null);

const takePicture = async () => {
  if (cameraRef.current) {
    const options = { quality: 0.5, base64: true };
    const data = await cameraRef.current.takePictureAsync(options);
    console.log(setPhoto(data.uri));
    // Navigation.navigate('Gallery')
  }
};


  return (
    <View style={styles.container}>
      <View style={styles.camTopCont}>

      </View>
      <Camera  style={styles.camera} type={CameraType.back} 
      ref={cameraRef} 
      ></Camera>
      <View style={styles.camBotCont}>
        <View style={styles.previewImg}>
        {/* {photo && <Image source={{ uri: photo }} style={styles.photo} />} */}
          </View>    

        <TouchableOpacity style={styles.captureBut} 
        onPress={takePicture}
        ></TouchableOpacity>

        <View style={styles.allImg}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 20,
  },
  camTopCont:{
    flex: 2,
    backgroundColor: 'black'
  },
  camBotCont:{
    paddingVertical:40,
    flex: 1,
    backgroundColor: 'black',
    flexDirection:'row',
    justifyContent: 'space-around'
  },
  
  previewImg: {
    // borderWidth:1,
    height: 60,
    width: 60,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10
  },
  captureBut:{
    width: 65,
    height: 65,
    // bottom: 0,
    borderRadius: 50,
    backgroundColor: '#fff'

  },
  allImg:{
    height: 60,
    width: 60,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10
  }
});

