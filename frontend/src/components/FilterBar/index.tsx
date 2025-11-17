import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { FilterBarProps } from './types';
import { styles } from './styles';

export default function FilterBar({
  showUnwatchedOnly,
  onToggleUnwatched,
  visible,
  onClose,
}: FilterBarProps) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Filters</Text>
            <TouchableOpacity
              onPress={onClose}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterSectionTitle}>Watch Status</Text>
            
            <TouchableOpacity
              style={[
                styles.filterOption,
                !showUnwatchedOnly && styles.filterOptionActive,
              ]}
              onPress={() => {
                if (showUnwatchedOnly) {
                  onToggleUnwatched();
                }
              }}
            >
              <View style={styles.filterOptionContent}>
                <View style={[
                  styles.radioButton,
                  !showUnwatchedOnly && styles.radioButtonActive,
                ]}>
                  {!showUnwatchedOnly && <View style={styles.radioButtonInner} />}
                </View>
                <Text style={[
                  styles.filterOptionText,
                  !showUnwatchedOnly && styles.filterOptionTextActive,
                ]}>
                  All Episodes
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.filterOption,
                showUnwatchedOnly && styles.filterOptionActive,
              ]}
              onPress={() => {
                if (!showUnwatchedOnly) {
                  onToggleUnwatched();
                }
              }}
            >
              <View style={styles.filterOptionContent}>
                <View style={[
                  styles.radioButton,
                  showUnwatchedOnly && styles.radioButtonActive,
                ]}>
                  {showUnwatchedOnly && <View style={styles.radioButtonInner} />}
                </View>
                <Text style={[
                  styles.filterOptionText,
                  showUnwatchedOnly && styles.filterOptionTextActive,
                ]}>
                  Unwatched Only
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.applyButton}
            onPress={onClose}
          >
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

