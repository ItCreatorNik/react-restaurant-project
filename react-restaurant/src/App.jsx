import store from "./redux";
import {Provider} from "react-redux";
import {Main} from "./pages/Main/component";

export const App = () => {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    )
}