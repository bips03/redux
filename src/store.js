import { createStore } from "redux";

import Reducer from './reducer'


const store = createStore(Reducer)

export default store
/*
CONTEXT API WE WILL HAVE PROVIDER
return 
<context.Provider value={state}>
{all components}
</context.Provider>
and to use it we will use other export
useContext(context) to get the value provided
and we wrap app component with ContextProvider function
*/