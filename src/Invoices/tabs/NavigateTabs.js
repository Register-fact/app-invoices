import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Perfil } from "./Perfil";
import { Invoices } from "./Invoices";


const Tab = createMaterialBottomTabNavigator();

export const NavigateTabs = () => { 



   const onNewNote = () => {
    
   }
   

 


  return (
   
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
  
  );
}
