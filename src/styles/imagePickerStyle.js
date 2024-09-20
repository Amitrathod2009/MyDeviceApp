import { StyleSheet } from 'react-native';

const imagePickerStyle = StyleSheet.create({
  ImageMainContainer: {
    marginVertical:24
  },
  imageCard: {
    width: '100%',
    // backgroundColor:"red"
  },
  captureImgPreview: {
    marginTop: 10,
  },
  cameraModalConatiner: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeModalPreview: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  closeModalText: {
    color: 'white',
    fontSize: 20,
  },
  cameraModalImg: {
    width: '90%',
    height: '70%',
    borderRadius: 10,
  },
  promptText:{
   fontSize:15,
   marginTop:5,
  },
  imageCardTitle:{
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: '#43388a',
  }
});

export default imagePickerStyle;
