import { useDispatch, useSelector } from "react-redux"
import InvoiceApi from "../api/InvoiceApi"
import { checkingCredentials, clearErrorMessage, login, logout } from "../Invoices/store/auth/AuthSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const useAuthStore = () => {

    const {status, user, errorMessage} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const startLogin = async({email, password}) => {
        try {
          dispatch(checkingCredentials())
          const {data} = await InvoiceApi.post('/login', {email, password})

          const { access_token, refresh_token, user_id } = data;

          await AsyncStorage.setItem('access_token', access_token);
          await AsyncStorage.setItem('refresh_token', refresh_token);
          await AsyncStorage.setItem('user_id', user_id);
  
          dispatch(login({name: data.username, uid: data.user_id}))
        } catch (error) {
          dispatch(logout('Error de autenticacion'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10)

          await AsyncStorage.removeItem('access_token');
          await AsyncStorage.removeItem('refresh_token');
          await AsyncStorage.removeItem('user_id');
        }
    }


const checkAuthToken = async () => {
  try {

      const token = await AsyncStorage.getItem('token');

      if (!token) {
          dispatch(logout());
          return;
      }

      const response = await axios.get('/refresh', {
          headers: {
              Authorization: `Bearer ${token}` 
          }
      });

      const newToken = response.data.token;

      await AsyncStorage.setItem('token', newToken);
      await AsyncStorage.setItem('token-init-date', new Date().getTime().toString());

      dispatch(login({
          name: response.data.username,
          uid: response.data.user_id
      }));

  } catch (error) {
      await AsyncStorage.clear();
      dispatch(logout());
  }
};

const startLogout = async () => {
  try {
      // Limpiar AsyncStorage
      await AsyncStorage.clear();

      // Despachar acciones para manejar el cierre de sesión
      //dispatch(onLogoutCalendar());
      dispatch(logout());
  } catch (error) {
      console.error('Error al cerrar sesión:', error);
  }
};

  return {
    //variables
    status,
    user,
    errorMessage,
    //funciones
    startLogin,
    checkAuthToken,
    startLogout
  }
}
