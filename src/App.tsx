import Todo from "./components/Todo";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

export default function App () {
  return(
    <Provider store={store}>
        <section>
        <Todo />
      </section>
    </Provider>
  );
}
