import {configureStore} from "@reduxjs/toolkit";

import restaurant from "./enitities/restaurant";
import dish from "./enitities/dish";
import review from "./enitities/review";
import user from "./enitities/user";

const store = configureStore({
    reducer: {
        restaurant,
        dish,
        review,
        user
    }
})

export default store;