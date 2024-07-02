import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

const DeliveryScreen = () => {
  const handleCopyCode = () => {
    Alert.alert('Success', 'Pick-up code copied to clipboard');
  };

  return (
    <ScrollView style={styles.container}>
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

        <TouchableOpacity style={styles.unlockButton}>
          <Text style={styles.unlockText}>Unlock Compartment</Text>
        </TouchableOpacity>

        <View style={styles.deliveryDetailsRow}>
          
          <Text style={styles.deliveryTimeHeader}>Delivered at:  
            <Text style={styles.deliveryTime}> 2023-10-17 17:05:54</Text>
          </Text>
        </View>
        <View style={styles.deliveryDetailsRow}>
          <Text style={styles.deliveryTimeHeader}>Delivered Location: {'\n'} 
          </Text>
          <Text style={styles.address}>Bluebits Office Metrotown{'\n'}
          4289 Kingsway, Burnaby, BC,{'\n'}
          Canada, V6B0C8{'\n'}
          <Text style={styles.textUnderline}>Open Google Map</Text>
          </Text>
        </View>
        <View style={styles.deliveryDetailsRow}>
          <Text style={styles.deliveryTimeHeader}>Delivered by: {'\n'} 
          </Text>
          <Text style={styles.textUnderline}>FedEx</Text>
        </View>
      </View>

      <View style={styles.hr} />

      <View style={styles.shadowProp}>
        <TouchableOpacity style={styles.optionButton}>
          <Image source={require('../assets/images/locker.png')} style={styles.optionIcon}/>
          <View>
            <Text style={styles.optionText}>Residential Unit Registration</Text>
            <Text style={[styles.optionDescription, {maxWidth: '95%'}]}>Register your unit with BlueBox to enable delivery by unit feature.</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={[styles.shadowProp, {marginBottom: 60}]}>
        <TouchableOpacity style={styles.optionButton}>
          <Image source={require('../assets/images/edit.png')} style={styles.optionIcon}/>
          <View>
            <Text style={styles.optionText}>Create a support ticket</Text>
            <Text style={styles.optionDescription}>Submit a support ticket form to us.</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 0,
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
    borderRadius: 8,
  },
  deliveryDetailsHeader: {
    fontFamily: 'Roboto_500Medium',
    marginBottom: 20,
    color: '#2b2b2b',
    fontSize: 18,
  },
  deliveryTimeHeader: {
    marginBottom: 4,
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
  },
  deliveryDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems:'flex-start',
    marginBottom: 12,
  },
  deliveryTime: {
    marginBottom: 16,
    fontSize: 14,
    fontFamily: 'Roboto_500Medium',
  },
  deliveryFrom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 24,
    color: '#2b2b2b',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  logo: {
    width: 14,
    height: 14,
    marginLeft: 8,
  },
  deliveryFromText: {
    fontSize: 14,
    marginBottom: 2,
  },
  address: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
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
    marginBottom: 40,
    marginTop: 24,
    shadowColor: '#4C90EF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 4,
  },
  unlockText: {
    color: '#fff',
    fontFamily: 'Roboto_500Medium',
  },
  hr: {
    height: 1,
    backgroundColor: '#F5F5F5',
    marginBottom: 24,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 24,
    borderRadius: 4,
    maxWidth: '90%',
    gap: 24,
    height: 80,
  },
  shadowProp: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 16,
    
  },
  optionIcon: {
    width: 24,
    height: 24,
  },
  optionText: {
    fontFamily: 'Roboto_500Medium',
    marginBottom: 2,
    fontSize: 14,
    height: 'auto',
    flexShrink: 1
  },
  optionDescription: {
    color: '#9397A5',
    fontSize: 12,
  },
});

export default DeliveryScreen;
