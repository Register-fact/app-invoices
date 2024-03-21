import { Text } from "@rneui/base"
import { AuthScreen } from "./auth/AuthScreen"
import { NavigationContainer } from "@react-navigation/native"
import { NavigateTabs } from "./Invoices/tabs/NavigateTabs"
import { useAuthStore } from "./helpers/useAuthStore"
import { useEffect } from "react"

export const AppInvoice = () => {

  const {checkAuthToken, status} = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  },[])
  
    if(status === 'checking'){
        return  <><Text>Cargando...</Text></>
    }

  return (
    
    <NavigationContainer>
    { (status === 'authenticated') ? < NavigateTabs/> : <AuthScreen />}
    </NavigationContainer>
  )
}
