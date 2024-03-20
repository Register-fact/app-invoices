import { Text } from "@rneui/base"
import { AuthScreen } from "./auth/AuthScreen"
import { NavigationContainer } from "@react-navigation/native"
import { NavigateTabs } from "./Invoices/tabs/NavigateTabs"

export const AppInvoice = () => {

    const status = 'authenticated-';

    if(status === 'checking'){
        return  <><Text>Cargando...</Text></>
    }

  return (
    <>
    <NavigationContainer>
    { (status === 'authenticated') ? < NavigateTabs/> : <AuthScreen />}
    </NavigationContainer>
    </>
  )
}
