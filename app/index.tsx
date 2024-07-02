import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
// import Clipboard from '@react-native-clipboard/clipboard';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const DeliveryScreen = () => {
  const handleCopyCode = () => {
    // Clipboard.setString('288-234-123');
    Alert.alert('Success', 'Pick-up code copied to clipboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>8:00</Text>
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
        <Text style={styles.deliveryTime}>Delivery time: 2023-10-17 17:05:54</Text>
        <View style={styles.deliveryFrom}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/FedEx_Express.svg/1200px-FedEx_Express.svg.png' }}
            style={styles.logo}
          />
          <View>
            <Text style={styles.deliveryFromText}>Delivery from FedEx</Text>
            <Text style={styles.address}>Bluebits Office Metrotown</Text>
            <Text style={styles.address}>4289 Kingsway, Burnaby, BC, Canada, V6B0C8</Text>
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
  time: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statusContainer: {
    backgroundColor: '#ffcccc',
    padding: 4,
    borderRadius: 4,
  },
  status: {
    color: 'red',
    fontWeight: 'bold',
  },
  adSpace: {
    height: 100,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  deliveryDetails: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  deliveryTime: {
    marginBottom: 8,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
  address: {
    color: '#666',
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
