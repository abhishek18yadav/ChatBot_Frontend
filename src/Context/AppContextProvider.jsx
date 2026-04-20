import CombineContext from '../Utils/CombineContext.jsx'
import { AuthContextProvider } from './AuthContext.jsx';
export const AppContextProvider = CombineContext(
    AuthContextProvider
);
