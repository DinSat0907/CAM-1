import { Camera, CameraType } from 'expo-camera';
// import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native';
import { StatusBar } from 'react-native';

export default function Cam() {

  // const [captureImage, setCaptureImage] = useState<any>(null)



// const __takePicture = async () => {
//     if (!camera) return
//     const photo = await camera.takePictureAsync()
//     console.log(photo)
//     setCaptureImage(photo)
//   }



  return (
    <View style={styles.container}>
      <View style={styles.camTopCont}>

      </View>
      <Camera  style={styles.camera} type={CameraType.back}></Camera>
      <View style={styles.camBotCont}>
        <View style={styles.previewImg}></View>    

        <TouchableOpacity style={styles.captureBut}></TouchableOpacity>

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
