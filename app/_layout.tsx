import { StatusBar } from 'expo-status-bar';
// import { Modal, StyleSheet, Text, View, Button } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '@/components/customDrawer';
import { LogBox } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import ImageViewer from '@/components/ImageViwer';
import { ImageSourcePropType } from 'react-native';
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';

LogBox.ignoreLogs(['Reanimated']);

const PlaceholderImage: ImageSourcePropType = require('../assets/uma-pintura.png');

export default function App() {
  const pickImagemAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={[styles.container, { paddingBottom: 0 }]}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          label="Choose a photo"
          theme="primary"
          onPress={pickImagemAsync}
        />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
