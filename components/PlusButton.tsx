// PlusButton.tsx
import React, { FC } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface PlusButtonProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlusButton: FC<PlusButtonProps> = ({ setModalVisible }) => {
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View style={styles.addWrapper}>
        <Text style={styles.plus}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  plus: {
    fontSize: 30,
    color: '#55BCF6',
    paddingBottom: 3,
  },
});

export default PlusButton;
