import {
  Button,
  ImagePlaceholder,
} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Pressable, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {Modal, Portal} from 'react-native-paper';
import {vs} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import type {
  CameraOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';

interface ImagePickerProps {
  onImageSelected: (uri: string) => void;
  uri: string | any;
}

export default React.memo((props: ImagePickerProps) => {
  const getLogMessage = (message: string) => `## Register Screen: ${message}`;
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [pickerResponse, setPickerResponse] =
    React.useState<ImagePickerResponse | null>(null);

  const showViewModal = () => (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.imageContentContainerStyle}>
        <Button
          text="Gallary"
          style={{marginVertical: vs(16)}}
          onPress={onImageLibraryPress}
        />
        <Button text="Camera" onPress={onCameraPress} />
      </Modal>
    </Portal>
  );

  const onImageLibraryPress = React.useCallback(() => {
    const options: CameraOptions = {
      durationLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, handlePickerResponse);
  }, []);

  const onCameraPress = React.useCallback(() => {
    const options: CameraOptions = {
      durationLimit: 1,
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      cameraType: 'back',
    };
    ImagePicker.launchCamera(options, handlePickerResponse);
  }, []);

  const handlePickerResponse = (response: ImagePickerResponse) => {
    setPickerResponse(response);
    hideModal();
    if (response?.assets && response.assets[0].uri) {
      props?.onImageSelected(response.assets[0].uri);
    }
  };

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  console.info(getLogMessage('uri'), uri);

  return (
    <View style={styles.imageContain}>
      <ImagePlaceholder
        source={props.uri || uri}
        placeholder={require('../../../assets/images/bootsplash_logo.png')}
        resizeMode="stretch"
        size={120}
        style={styles.image}
      />
      {showViewModal()}
      <Pressable onPress={showModal} style={styles.addIcon}>
        <Icon name="plus-circle-outline" size={32} />
      </Pressable>
    </View>
  );
});
