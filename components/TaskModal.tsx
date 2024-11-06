// TaskModal.tsx
import React, { FC } from 'react';
import {
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

interface TaskModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  task: string | null;
  setTask: React.Dispatch<React.SetStateAction<string | null>>;
  handleAddTask: () => void;
}

const TaskModal: FC<TaskModalProps> = ({
  modalVisible,
  setModalVisible,
  task,
  setTask,
  handleAddTask,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add a New Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Write a task"
            value={task || ''}
            onChangeText={(text) => setTask(text)}
            autoFocus={modalVisible}
          />
          <TouchableOpacity onPress={handleAddTask} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Task</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.cancelButton}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#55BCF6',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 15,
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#55BCF6',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cancelButtonText: {
    color: '#55BCF6',
    fontWeight: 'bold',
  },
});

export default TaskModal;
