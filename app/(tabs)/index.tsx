import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';

export default function Index() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSaveTask = () => {
    // Handle saving the task (e.g., save it to state or a database)
    console.log(`Task: ${task}, Date: ${date}`);
    // Close the modal
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>

      {/* Rounded Button */}
      <TouchableOpacity style={styles.roundedButton} onPress={toggleModal}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Task"
            value={task}
            onChangeText={setTask}
          />
          <TextInput
            style={styles.input}
            placeholder="Date (e.g. 2024-10-31)"
            value={date}
            onChangeText={setDate}
          />
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
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 6,
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
