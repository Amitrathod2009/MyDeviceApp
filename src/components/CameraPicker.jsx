import {Text, TouchableOpacity, View, Image, Modal} from 'react-native';
import React, { useState } from 'react'
import {launchCamera} from 'react-native-image-picker';
import imagePickerStyle from '../styles/imagePickerStyle';
import { Button, Card } from 'react-native-paper';
import styles from '../styles/styles';

const CameraPicker = ({onCameraImagePicked}) => {
  const [imageCameraUri, setCameraImageUri] = useState(null);
  const [CameraPreviewVisible, setCameraPreviewVisible] = useState(false);

  const openCamera = () => {
    console.log('camera open ====>');
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        maxWidth: 300,
        maxHeight: 300,
        quality: 1,
      },
      response => {
        console.log('Camera response ===> ', response);
        if (response.didCancel) {
          console.log('cancelled camera ===>');
        } else if (response.errorCode) {
          console.log('Camera error ===>', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          setCameraImageUri(uri);
          if (onCameraImagePicked) {
            onCameraImagePicked(uri);
          }
        } else {
          console.log('No image captured ==>');
        }
      },
    );
  };

  const openCameraPreview = () => {
    setCameraPreviewVisible(true);
  };
  const closeCameraPreview = () => {
    setCameraPreviewVisible(false);
  };

  return (
    <View style={[imagePickerStyle.ImageMainContainer,styles.marginBottom10]}>
        <Card style={[imagePickerStyle.imageCard]}>
          <Card.Title
            title={'Capture an Image from camera'}
            titleStyle={[imagePickerStyle.imageCardTitle]}
          />
          <Card.Content>
            {imageCameraUri ? (
              <View>
                <View style={[styles.cardContent]}>
                <Button
                  mode="contained"
                  onPress={openCameraPreview}
                  style={[imagePickerStyle.captureImgPreview,styles.padding5]} labelStyle={[styles.fontSize18]}>
                  Preview Image
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => setCameraImageUri(null)}
                  style={[imagePickerStyle.captureImgPreview,styles.padding5]} labelStyle={[styles.fontSize18]}>
                  Delete Image
                </Button>
                </View>
                <Text style={[imagePickerStyle.promptText,styles.marginHorizontal10]}>
                  To capture again, please delete the image first.
                </Text>
              </View>
            ) : (
              <Button mode="contained" onPress={openCamera} labelStyle={[styles.dateTimeText,styles.colorWhite]} style={[styles.padding5,styles.marginRight80]}>
                {'Camera'}
              </Button>
            )}
          </Card.Content>
        </Card>
        <Modal
          visible={CameraPreviewVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={closeCameraPreview}>
          <View style={[imagePickerStyle.cameraModalConatiner]}>
            <TouchableOpacity
              onPress={closeCameraPreview}
              style={[imagePickerStyle.closeModalPreview]}>
              <Text style={[imagePickerStyle.closeModalText]}>Close</Text>
            </TouchableOpacity>
            <Image
              source={{uri: imageCameraUri}}
              style={[imagePickerStyle.cameraModalImg]}
            />
          </View>
        </Modal>
      </View>
  )
}

export default CameraPicker