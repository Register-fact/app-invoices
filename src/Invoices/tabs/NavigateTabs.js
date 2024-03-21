import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Perfil } from "./Perfil";
import { Invoices } from "./Invoices";
import { Header, Icon } from "@rneui/base";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useAuthStore } from "../../helpers/useAuthStore";


const Tab = createMaterialBottomTabNavigator();

export const NavigateTabs = () => { 

  const {startLogout} = useAuthStore()

   const onNewNote = () => {
    
   }
   
   const onLogout= () => {
    startLogout()
   }
 


  return (
    <>
    <SafeAreaProvider>
    <Header
      leftComponent={{
        icon: 'menu',
        color: '#fff',
      }}
      rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={onLogout} >
              <Icon name="description" color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              
            >
            </TouchableOpacity>
          </View>
      }
      centerComponent={{ text: 'Header', style: styles.heading }}
    />
    </SafeAreaProvider>
    <Tab.Navigator
      initialRouteName="Inicio"
      activeColor="#9CD2D3"
      inactiveColor="#C1E8FF"
      barStyle={{backgroundColor: '#114C5F'}}
    >
      
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={20}  />
          )
        }}
      />
      <Tab.Screen
        name="Invoice"
        component={Invoices}
        options={{
          tabBarLabel: 'Mis Notas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="note-multiple" color={color} size={20} />
          )
        }}
      />
      
    </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  });
