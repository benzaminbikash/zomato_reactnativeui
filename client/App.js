import { StatusBar } from "expo-status-bar";
import AppRouter from "./src/AppRouter";
import Context from "./src/Context/Context";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <Context>
      <AppRouter />
    </Context>
  );
}
