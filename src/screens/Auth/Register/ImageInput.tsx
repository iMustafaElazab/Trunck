import {
  Button,
  ImagePlaceholder,
} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Pressable, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Modal, Portal} from 'react-native-paper';
import {vs} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import type {ImageOrVideo} from 'react-native-image-crop-picker';

interface ImagePickerProps {
  onImageSelected: (image: ImageOrVideo) => void;
  uri: string | any;
}

export default React.memo((props: ImagePickerProps) => {
  const getLogMessage = (message: string) => `## Register Screen: ${message}`;
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [pickedImage, setPickedImage] = React.useState<
    ImageOrVideo | undefined
  >(undefined);

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

  const onImageLibraryPress = React.useCallback(async () => {
    try {
      await ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping: true,
      })
        .then(image => {
          setPickedImage(image);
          props.onImageSelected(image);
          console.log(image);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.error('Error capturing or cropping image:', error);
    }
  }, []);

  const onCameraPress = React.useCallback(async () => {
    try {
      await ImagePicker.openCamera({
        width: 500,
        height: 500,
        cropping: true,
      })
        .then(image => {
          setPickedImage(image);
          props.onImageSelected(image);
          console.log(image);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.error('Error capturing or cropping image:', error);
    }
  }, []);

  console.info(getLogMessage('uri'), pickedImage);

  return (
    <View style={styles.imageContain}>
      <ImagePlaceholder
        source={pickedImage?.path}
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
