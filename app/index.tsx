import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

// Setează comportamentul notificării când aplicația este deschisă
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [isTimerSet, setIsTimerSet] = useState(false);

  // Funcție pentru a cere permisiuni de notificare
  async function requestNotificationPermission() {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permisiunile pentru notificări sunt necesare!');
    }
  }

  // Setează o notificare care se declanșează după un anumit număr de secunde
  async function scheduleNotification() {
    const totalMinutes = parseInt(minutes) || 0;
    const totalSeconds = parseInt(seconds) || 0;
    const totalTimeInSeconds = totalMinutes * 60 + totalSeconds;

    if (totalTimeInSeconds <= 0) {
      Alert.alert('Te rog introdu o durată validă pentru timer!');
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Meditation Time',
        body: 'Timpul de meditație a expirat!',
      },
      trigger: { seconds: totalTimeInSeconds },
    });
    setIsTimerSet(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meditation Timer</Text>
      <Text> Enter Minutes</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter minutes"
        value={minutes}
        onChangeText={setMinutes}
      />
      <Text> Enter Seconds</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter seconds"
        value={seconds}
        onChangeText={setSeconds}
      />
      <Button
        title="Start Meditation"
        onPress={() => {
          requestNotificationPermission();
          scheduleNotification();
        }}
      />
      {isTimerSet && (
        <Text>
          Temporizator setat pentru {minutes || 0} minute și {seconds || 0}{' '}
          secunde.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    padding: 8,
    marginBottom: 20,
  },
});
