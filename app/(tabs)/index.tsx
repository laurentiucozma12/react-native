import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

export default function Index() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [task, setTask] = useState('');
  const [date, setDate] = useState(new Date()); // Initialize with current date
  const [formattedDate, setFormattedDate] = useState('');

  // Toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Show date picker
  const showDatePickerHandler = () => {
    setShowDatePicker(true);
  };

  // Handle date change from the date picker
  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'dismissed') {
      setShowDatePicker(false);
      return;
    }
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setFormattedDate(currentDate.toLocaleDateString()); // Format the date as needed
    setShowDatePicker(false);
  };

  // Save task and close modal
  const handleSaveTask = () => {
    console.log(`Task: ${task}, Date: ${formattedDate}`);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>

      {/* Rounded Button */}
      <TouchableOpacity style={styles.roundedButton} onPress={toggleModal}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      {/* Modal for Adding Task */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Task"
            value={task}
            onChangeText={setTask}
          />

          {/* Button to Open Date Picker */}
          <TouchableOpacity
            style={styles.dateButton}
            onPress={showDatePickerHandler}
          >
            <Text style={styles.dateButtonText}>
              {formattedDate ? formattedDate : 'Select Date'}
            </Text>
          </TouchableOpacity>

          {/* DateTimePicker */}
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              is24Hour={true}
              onChange={onChange}
            />
          )}

          <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  },
  roundedButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  dateButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  dateButtonText: {
    color: '#FFF',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  closeButtonText: {
    color: '#007BFF',
    marginTop: 10,
  },
});
