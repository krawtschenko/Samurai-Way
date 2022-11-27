import React from "react";
import {StoreType} from "./redax/reduxStore";

const storeContext = React.createContext({} as StoreType)

export default storeContext