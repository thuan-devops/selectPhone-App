import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function DrawerSettingsScreen() {
  const [notifications, setNotifications] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <View style={styles.textContainer}>
          <Text style={styles.settingTitle}>Thông báo</Text>
          <Text style={styles.settingSubText}>Nhận thông báo cập nhật ứng dụng</Text>
        </View>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ false: '#767577', true: '#CA153E' }}
          thumbColor={notifications ? '#fff' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingItem}>
        <View style={styles.textContainer}>
          <Text style={styles.settingTitle}>Chế độ tối (Dark Mode)</Text>
          <Text style={styles.settingSubText}>Chuyển sang giao diện nền tối</Text>
        </View>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ false: '#767577', true: '#CA153E' }}
          thumbColor={darkMode ? '#fff' : '#f4f3f4'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 1,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  settingSubText: {
    fontSize: 12,
    color: '#888',
    marginTop: 3,
  },
});