import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function Dashboard() {
  const [metrics] = useState([
    { id: '1', title: 'Gross Revenue', value: '₹1,24,450', change: '+18.4%' },
    { id: '2', title: 'Active API Requests', value: '99.9%', change: 'Optimal' },
    { id: '3', title: 'Completed QA Runs', value: '1,420', change: '100% Passed' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Analytics & Operations Hub</Text>
      <Text style={styles.subtitle}>Real-time performance metrics</Text>
      
      <FlatList
        data={metrics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardValue}>{item.value}</Text>
            <Text style={styles.cardChange}>{item.change}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => alert('SQL Data Refreshed Successfully!')}>
        <Text style={styles.buttonText}>Refresh Database Sync</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#0F172A' },
  header: { fontSize: 26, fontWeight: 'bold', color: '#F8FAFC', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#94A3B8', marginBottom: 24 },
  card: { padding: 20, backgroundColor: '#1E293B', borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#334155' },
  cardTitle: { fontSize: 14, color: '#94A3B8' },
  cardValue: { fontSize: 28, fontWeight: 'bold', color: '#38BDF8', marginVertical: 6 },
  cardChange: { fontSize: 12, color: '#4ADE80', fontWeight: '600' },
  button: { backgroundColor: '#2563EB', padding: 16, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' }
});