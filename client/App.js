import { StatusBar } from "expo-status-bar";
import AppRouter from "./src/AppRouter";
import Context from "./src/Context/Context";

export default function App() {
  return (
    <Context>
      <AppRouter />
      {/* <StatusBar hidden /> */}
    </Context>
  );
}
