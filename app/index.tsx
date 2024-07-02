import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Asset, useAssets } from 'expo-asset';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';


const DeliveryScreen = () => {
  const handleCopyCode = () => {
    Alert.alert('Success', 'Pick-up code copied to clipboard');
  };

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/chevron-left.png')} style={{width: 32, height: 32, marginLeft: -10, marginBottom: 24}}/>
      <View style={styles.header}>
        <Text style={styles.title}>Delivery# 487303</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>Pending</Text>
        </View>
      </View>

      <View style={styles.adSpace}>
        <Text>Ad Space</Text>
      </View>

      <View style={styles.deliveryDetails}>
        <Text style={styles.deliveryDetailsHeader}>Delivery Details</Text>
        <Text style={styles.deliveryTime}>Delivery time: 2023-10-17 17:05:54</Text>
        <View style={styles.deliveryFrom}>
          <Image source={require('../assets/images/fedex.png')} style={styles.logo}/>
          <View>
            <Text style={styles.deliveryFromText}>Delivery from FedEx</Text>
            <Text style={styles.address}>Bluebits Office Metrotown{'\n'}
            4289 Kingsway, Burnaby, BC, Canada, V6B0C8</Text>
          </View>
        </View>
        <View style={styles.codeRow}>
          <View>
            <Text style={styles.subHeader}>Pick-up Code</Text>
            <TouchableOpacity onPress={handleCopyCode} style={styles.copyButton}>
              <Text style={styles.codeText}>288-234-123 </Text>
              <Image source={require('../assets/images/copy.png')} style={styles.optionIcon}/>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.subHeader}>Compartment</Text>
            <Text style={styles.codeText}>104</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.unlockButton}>
        <Text style={styles.unlockText}>Unlock Compartment</Text>
      </TouchableOpacity>

      <View style={styles.shadowProp}>
        <TouchableOpacity style={styles.optionButton}>
        <Image source={require('../assets/images/locker.png')} style={styles.optionIcon}/>
            <View>
              <Text style={styles.optionText}>Residential Unit Registration</Text>
              <Text style={styles.optionDescription}>Register your unit with BlueBox to enable delivery by unit feature.</Text>
            </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.optionButton}>
        <Image source={require('../assets/images/edit.png')} style={styles.optionIcon}/>
        <View>
          <Text style={styles.optionText}>Create a support ticket</Text>
          <Text style={styles.optionDescription}>Submit a support ticket form to us.</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
    color: '#2b2b2b',
  },
  statusContainer: {
    backgroundColor: '#FCE5E6',
    padding: 4,
    paddingLeft:12,
    paddingRight:12,
    borderRadius: 12,
  },
  status: {
    color: '#EA5455',
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
  },
  adSpace: {
    height: 123,
    backgroundColor: '#EDF2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderRadius: 8,
  },
  deliveryDetails: {
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    paddingTop: 24,
    paddingBottom: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  deliveryDetailsHeader: {
    fontFamily: 'Roboto_500Medium',
    marginBottom: 6,
    color: '#2b2b2b',
  },
  deliveryTime: {
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    color: '#9397A5',
  },
  deliveryFrom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    color: '#2b2b2b',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  deliveryFromText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
  },
  address: {
    color: '#666',
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    lineHeight: 18,
  },

  codeRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 40,
  },
  subHeader: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
    marginBottom: 8,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
  },
  codeText: {
    fontSize: 20,
    marginRight: 8,
    color: '#4D81E7',
    fontFamily: 'Roboto_700Bold',
  },
  unlockButton: {
    backgroundColor: '#4D81E7',
    padding: 14,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 24,
  },
  unlockText: {
    color: '#fff',
    fontFamily: 'Roboto_500Medium',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingLeft: 32,
    paddingBottom: 32,
    borderRadius: 8,
    marginBottom: 16,
    maxWidth: '90%',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  optionIcon: {
    width: 24,
    height: 24,
  },
  optionText: {
    fontFamily: 'Roboto_500Medium',
    marginLeft: 8,
    marginBottom: 2,
    fontSize: 14,
  },
  optionDescription: {
    color: '#9397A5',
    marginLeft: 8,
    fontSize: 12,
    width: 'auto',
  },
});

export default DeliveryScreen;
