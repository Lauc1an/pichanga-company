import { StyleSheet } from "react-native";

export const Colors = {
  white: '#FFFFFF',
  maastrichtBlue: '#00182E',
  metallicGreen: '#357A03',
  silverSand: '#B7C0C5',
  greenLizard: '#A4E624'
};

export const AppImages = {
  images: {
    logo: require('../assets/logo.png')
  }
};

export const LayoutStyles = StyleSheet.create({
  blueContainer: {
    backgroundColor: Colors.maastrichtBlue,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export const LoginStyles = StyleSheet.create({
  logo: {
    height: 150,
    width: 140,
    marginBottom:50,
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom:15,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  button: {
    backgroundColor: Colors.metallicGreen,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom:10,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: Colors.maastrichtBlue,
    marginTop: 5,
    borderColor: Colors.white,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%'
  },
  buttonOutlineText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
});

export const RegisterStyles = StyleSheet.create({
  inputContainer: {
    width: '80%'
  },
  inputTitle: {
    color: Colors.maastrichtBlue,
    fontWeight: '700',
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    color: Colors.maastrichtBlue,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: Colors.silverSand,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom:15,
  },
  buttonContainer: {
    marginTop: 30,
    width: '80%'
  },
  button: {
    backgroundColor: Colors.metallicGreen,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom:10,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
});

