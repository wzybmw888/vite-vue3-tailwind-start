import {createStore} from 'vuex'
import variable from "./modules/variable";

export default createStore({
    modules: {
        variable: variable,
    }
})
