import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingPage from "./LandingPage/LandingPage";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>EXPO IS FUCKING AWESOME</Text>
      {/* <LandingPage /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
