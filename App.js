import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Dashboard from './src/screens/Dashboard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />
      <Dashboard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' }
});