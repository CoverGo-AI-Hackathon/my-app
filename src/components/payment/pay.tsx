import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
} from 'react-native';

const amounts = [10000, 20000, 50000, 100000];

const PaymentForm = () => {
  const [email, setEmail] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handlePayment = () => {
    if (!email || !selectedAmount) return;

    const url = `https://hcmutssps.id.vn/payment/createOrder?email=${encodeURIComponent(
      email
    )}&amount=${selectedAmount}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Thanh toán</Text>

        <Text style={styles.label}>Nhập email người nhận:</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Chọn số tiền:</Text>
        <View style={styles.amountContainer}>
          {amounts.map((amount) => (
            <TouchableOpacity
              key={amount}
              style={[
                styles.amountButton,
                selectedAmount === amount && styles.selected,
              ]}
              onPress={() => setSelectedAmount(amount)}
            >
              <Text
                style={[
                  styles.amountText,
                  selectedAmount === amount && styles.selectedText,
                ]}
              >
                {amount.toLocaleString('vi-VN')}₫
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PaymentForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f2f5',
    flexGrow: 1,
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  amountContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  amountButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  selected: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  amountText: {
    color: '#000',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  payText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
