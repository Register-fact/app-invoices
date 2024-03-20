import { Button, Input, Text } from '@rneui/base'
import { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';
import useForm from '../hooks/useForm';
import calendarApi from '../api/InvoiceApi';

export const Login = ({ navigation }) => {
    
    const { values, handleChange, resetForm } = useForm({
        email: '',
        password: '',
      });

      const {email, password} = values
    const handleLogin = async () => {
        const res = await calendarApi.post('/login', {email, password})
        console.log(res)
        console.log('Form values:', email);
        resetForm();
    }

  return (
    <View style={styles.container}>
     <Text style={styles.title}>Welcome to MyApp!</Text>

    <View style={styles.containerButtom}>
    <Text style={styles.TextInput}>Login</Text>
    <View style={styles.containerBoxInput}>

    <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
            style={styles.Input}
            placeholder='Enter your email'
            value={values.email}
            onChangeText={(text) => handleChange('email', text)}
        />
    </View>

<View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput 
            style={styles.Input}
            placeholder='Enter your password'
            value={values.password}
            onChangeText={(text) => handleChange('password', text)}
            secureTextEntry={true}
        />
    </View>
   
    <Button buttonStyle={{
                borderRadius: 10,
                borderTopRightRadius: 0,
              }} color='#000' onPress={handleLogin}> Login </Button>
    </View>
    <Button titleStyle={{ marginHorizontal: 20, color: 'black' }} onPress={() => navigation.navigate('Register')} title={'¿No tiene cuenta?'} type='clear'/>
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#000', 
        paddingTop: 200
      },
    containerButtom: {
      flex: 1,
      width: '100%',
      backgroundColor: '#f6f6f6',
      alignItems: "center",
      justifyContent: 'space-evenly',
      borderTopLeftRadius: 80,
    },
    title: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
    },
    TextInput:{
        fontSize: 30,
    },
    containerTop:{
        backgroundColor: '#000',
        height: 80
    },
    containerBoxInput:{
        width: '80%',
        justifyContent: 'space-between',
        gap: 15,
    },
    Input: {
        width: '100%', 
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        backgroundColor: '#FFF',
        placeholderTextColor: '#999',
    },

    inputContainer: {
        padding: 5,
        backgroundColor: '#FFF',
        borderRadius: 10,

    },
    label: {
        color: '#000',
        paddingLeft: 5
    }, 
   
  });

