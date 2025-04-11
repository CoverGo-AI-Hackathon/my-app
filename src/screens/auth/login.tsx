// LoginScreen.tsx
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ImageSourcePropType,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ScrollView,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UserStackParamList } from '../../navigations/user.navigate';


type Props = NativeStackScreenProps<UserStackParamList, 'Login'>;

// Định nghĩa kiểu dữ liệu cho các state
interface FormState {
  email: string;
  password: string;
  isPasswordVisible: boolean;
  emailError: string;
  passwordError: string;
}

// Component chính
const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
    isPasswordVisible: false,
    emailError: '',
    passwordError: '',
  });
  const updateFormState = (key: keyof FormState, value: string | boolean): void => {
    setFormState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };
  const validateEmail = (email: string): boolean => {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      updateFormState('emailError', 'Email không được để trống');
      return false;
    } else if (!emailRegex.test(email)) {
      updateFormState('emailError', 'Email không hợp lệ');
      return false;
    }
    updateFormState('emailError', '');
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (!password) {
      updateFormState('passwordError', 'Mật khẩu không được để trống');
      return false;
    } else if (password.length < 6) {
      updateFormState('passwordError', 'Mật khẩu phải có ít nhất 6 ký tự');
      return false;
    }
    updateFormState('passwordError', '');
    return true;
  };

  const handleLogin = (): void => {
    const isEmailValid = validateEmail(formState.email);
    const isPasswordValid = validatePassword(formState.password);

    if (isEmailValid && isPasswordValid) {
      // Khai báo kiểu dữ liệu cho response và error khi gọi API
      // interface LoginResponse {
      //   token: string;
      //   user: {
      //     id: string;
      //     name: string;
      //     email: string;
      //   };
      // }

      // loginApi(formState.email, formState.password)
      //   .then((response: LoginResponse) => {
      //     navigation.navigate('Home');
      //   })
      //   .catch((error: Error) => {
      //     Alert.alert('Lỗi đăng nhập', error.message);
      //   });

      Alert.alert('Đăng nhập thành công', 'Xin chào!');
      // Nếu có navigation, bạn sẽ điều hướng người dùng đến màn hình chính
      // navigation.navigate('Home');
      navigation.navigate('Profile')
    }
  };

  const handleForgotPassword = (): void => {
    // navigation.navigate('ForgotPassword');
    Alert.alert('Quên mật khẩu', 'Chức năng đang được phát triển');
  };

  const handleRegister = (): void => {
    // navigation.navigate('Register');
  
    Alert.alert('Đăng ký', 'Chức năng đang được phát triển');
  };

  // Định nghĩa kiểu dữ liệu cho logo source
  const logoSource: ImageSourcePropType = { uri: 'https://via.placeholder.com/150' };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // Tùy chỉnh nếu bị che
      >
        <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        >
          <View style={styles.logoContainer}>
            <Image
              source={logoSource}
              style={styles.logo}
            />
            <Text style={styles.appName}>Ứng dụng của bạn</Text>
          </View>

          <Text style={styles.title}>Đăng nhập</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập email của bạn"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formState.email}
              onChangeText={(text: string) => {
                updateFormState('email', text);
                if (formState.emailError) validateEmail(text);
              }}
              onBlur={() => validateEmail(formState.email)}
            />
            {formState.emailError ? <Text style={styles.errorText}>{formState.emailError}</Text> : null}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mật khẩu</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Nhập mật khẩu của bạn"
                secureTextEntry={!formState.isPasswordVisible}
                value={formState.password}
                onChangeText={(text: string) => {
                  updateFormState('password', text);
                  if (formState.passwordError) validatePassword(text);
                }}
                onBlur={() => validatePassword(formState.password)}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => updateFormState('isPasswordVisible', !formState.isPasswordVisible)}
              >
                <Text>{formState.isPasswordVisible ? '👁️' : '👁️‍🗨️'}</Text>
              </TouchableOpacity>
            </View>
            {formState.passwordError ? <Text style={styles.errorText}>{formState.passwordError}</Text> : null}
          </View>

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Đăng nhập</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>hoặc</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>G</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>f</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>in</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Chưa có tài khoản? </Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.registerLink}>Đăng ký ngay</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

// Cách khác không định nghĩa kiểu cụ thể để tránh lỗi
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    // justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
  },
  eyeIcon: {
    padding: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#3498db',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#888',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  socialButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: '#333',
    fontSize: 16,
  },
  registerLink: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;