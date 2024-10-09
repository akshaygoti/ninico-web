import { createStore } from "redux";
import rootreducer from "./Redux/Reducers/Main";

const Store = createStore(
    rootreducer
)

export default Store;