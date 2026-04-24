import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PaginationDotsProps {
  total: number;
  current: number;
}

export default function PaginationDots({ total, current }: PaginationDotsProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[styles.dot, i === current ? styles.activeDot : styles.inactiveDot]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    borderRadius: 99,
  },
  activeDot: {
    width: 12,
    height: 12,
    backgroundColor: '#6C63FF',
  },
  inactiveDot: {
    width: 8,
    height: 8,
    backgroundColor: '#C4C4C4',
  },
});
