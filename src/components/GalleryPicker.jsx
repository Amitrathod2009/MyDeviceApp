import {Text, TouchableOpacity, View, Image, Modal} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import imagePickerStyle from '../styles/imagePickerStyle';
import {Button, Card} from 'react-native-paper';
import styles from '../styles/styles';

const GalleryPicker = () => {
  const [galleryImageUri, setGalleryImageUri] = useState(null);
  const [galleryPreviewVisible, setGalleryPreviewVisible] = useState(false);

  const openGallery = () => {
    console.log('Gallary Opening ===>');
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        console.log('Gallary response ===>', response);
        if (response.didCancel) {
          console.log('cancelled gallery ====>');
        } else if (response.errorCode) {
          console.log('Gallery error =====> ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          setGalleryImageUri(uri);
        } else {
          console.log('No image selected ====>');
        }
      },
    );
  };
  const closeGalleryPreview = () => {
    setGalleryPreviewVisible(false);
  };

  return (
    <View style={[imagePickerStyle.ImageMainContainer, styles.marginBottom20]}>
      <Card style={[imagePickerStyle.cameraCard]}>
        <Card.Title
          title={'Select an Image from Gallery'}
          titleStyle={[imagePickerStyle.imageCardTitle]}
        />
        <Card.Content>
          {galleryImageUri ? (
            <View>
              <View style={[styles.cardContent]}>
                <Button
                  mode="contained"
                  onPress={() => setGalleryPreviewVisible(true)}
                  style={[imagePickerStyle.captureImgPreview, styles.padding5]}
                  labelStyle={[styles.fontSize18]}>
                  Preview Image
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => setGalleryImageUri(null)}
                  style={[imagePickerStyle.captureImgPreview, styles.padding5]}
                  labelStyle={[styles.fontSize18]}>
                  Delete Image
                </Button>
              </View>
              <Text
                style={[
                  imagePickerStyle.promptText,
                  styles.marginHorizontal10,
                ]}>
                To select image again from gallery please delete the image
                first.
              </Text>
            </View>
          ) : (
            <Button
              mode="contained"
              onPress={openGallery}
              labelStyle={[styles.dateTimeText, styles.colorWhite]}
              style={[styles.padding5, styles.marginRight80]}>
              Open Gallery
            </Button>
          )}
        </Card.Content>
      </Card>

      {/* Modal for image preview */}
      <Modal
        visible={galleryPreviewVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeGalleryPreview}>
        <View style={[imagePickerStyle.cameraModalConatiner]}>
          <TouchableOpacity
            onPress={closeGalleryPreview}
            style={[imagePickerStyle.closeModalPreview]}>
            <Text style={[imagePickerStyle.closeModalText]}>Close</Text>
          </TouchableOpacity>
          <Image
            source={{uri: galleryImageUri}}
            style={[imagePickerStyle.cameraModalImg]}
          />
        </View>
      </Modal>
    </View>
  );
};

export default GalleryPicker;
