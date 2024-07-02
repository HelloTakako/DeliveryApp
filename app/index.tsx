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
      {/* <Image
            source={fedex}
            style={styles.logo}
          /> */}
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
          {/* {assets ? <Image source={require('../assets/images/fedex.svg')} /> : null} */}
          <Image source={require('../assets/images/fedex.svg')} style={styles.logo}/>
          {/* <Image
            source={{ uri: '../assets/images/fedex.svg' }}
            style={styles.logo}
          /> */}
          <View>
            <Text style={styles.deliveryFromText}>Delivery from FedEx</Text>
            <Text style={styles.address}>Bluebits Office Metrotown{'\n'}
            4289 Kingsway, Burnaby, BC, Canada, V6B0C8</Text>
          </View>
        </View>
        <View style={styles.codeContainer}>
          <View style={styles.codeRow}>
            <Ionicons name="key" size={24} color="black" />
            <Text style={styles.pickupCode}>Pick-up Code</Text>
          </View>
          <TouchableOpacity onPress={handleCopyCode} style={styles.copyButton}>
            <Text style={styles.codeText}>288-234-123</Text>
            <MaterialIcons name="content-copy" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.codeContainer}>
          <View style={styles.codeRow}>
            <Ionicons name="cube" size={24} color="black" />
            <Text style={styles.compartment}>Compartment 104</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.unlockButton}>
        <Text style={styles.unlockText}>Unlock Compartment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <Ionicons name="home" size={24} color="black" />
        <View>
          <Text style={styles.optionText}>Residential Unit Registration</Text>
          <Text style={styles.optionDescription}>Register your unit with BlueBox to enable delivery by unit feature.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <Ionicons name="help-circle" size={24} color="black" />
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
    marginBottom: 16,
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
  codeContainer: {
    marginBottom: 16,
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  pickupCode: {
    fontWeight: 'bold',
    marginLeft: 8,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
  },
  codeText: {
    fontSize: 16,
    marginRight: 8,
  },
  compartment: {
    fontWeight: 'bold',
    marginLeft: 8,
  },
  unlockButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  unlockText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  optionText: {
    fontWeight: 'bold',
    marginLeft: 8,
  },
  optionDescription: {
    color: '#666',
    marginLeft: 8,
  },
});

export default DeliveryScreen;
