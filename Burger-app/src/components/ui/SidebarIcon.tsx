import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Sidebar = ({ onClose }:any) => {
  return (
    <View style={styles.sidebar}>
      <Text style={styles.title}>القائمة</Text>
      <TouchableOpacity style={styles.menuItem} onPress={() => { /* الانتقال إلى الصفحة الرئيسية */ }}>
        <Text style={styles.menuText}>الرئيسية</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => { /* الانتقال إلى قائمة البرجر */ }}>
        <Text style={styles.menuText}>قائمة البرجر</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => { /* الانتقال إلى السلة */ }}>
        <Text style={styles.menuText}>سلة التسوق</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => { /* تسجيل الخروج */ }}>
        <Text style={styles.menuText}>تسجيل الخروج</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeText}>إغلاق</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    position: 'absolute',
    top: 0,
    right: 0,
    width: 250,
    height: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: -2, height: 0 },
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 18,
  },
  closeButton: {
    marginTop: 'auto',
    paddingVertical: 15,
    alignItems: 'center',
  },
  closeText: {
    fontSize: 18,
    color: 'red',
  },
});

export default Sidebar;
