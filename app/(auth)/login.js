import {
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Text,
  View
} from 'react-native';
import { useState } from 'react';
import { useAuth } from "../../context/auth";
import { LayoutStyles, LoginStyles, AppImages } from "../../constants/styles";
import { Link } from "expo-router";

const Login = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetchLogin = async () => {
    const login = await signIn(email, password);
    console.log("🚀 ~ file: LoginScreen.js:28 ~ fetchLogin ~ handleLogin:", login)
  };

  return (
    <KeyboardAvoidingView
      style={LayoutStyles.blueContainer}
      behavior="padding"
    >
      <Image
        style={LoginStyles.logo}
        source={AppImages.images.logo}
      />

      <View style={LoginStyles.inputContainer}>
        <TextInput
          placeholder="Correo"
          value={email}
          onChangeText={text => setEmail(text)}
          style={LoginStyles.input}
        />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={text => setPassword(text)}
          style={LoginStyles.input}
          secureTextEntry
        />
      </View>

      <View style={LoginStyles.buttonContainer}>
        <TouchableOpacity
          onPress={fetchLogin}
          style={LoginStyles.button}
        >
          <Text style={LoginStyles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>

        <Link href="/register" asChild>
          <TouchableOpacity
            style={LoginStyles.buttonOutline}
          >
            <Text style={LoginStyles.buttonOutlineText}>REGISTRARSE</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </KeyboardAvoidingView>
  )
};

export default Login;
