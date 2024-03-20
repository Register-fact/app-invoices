import { Button, Input, Text } from '@rneui/base'
import { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';

export const Register = ({ navigation }) => {
    
    const handleRegister = () => {

    }

  return (
    <View style={styles.container}>
     <Text style={styles.title}>Welcome to MyApp!</Text>

    <View style={styles.containerButtom}>
    <Text style={styles.TextInput}>SignUp</Text>
    <View style={styles.containerBoxInput}>

    <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput 
            style={styles.Input}
            placeholder='Enter your Username'
        />
    </View>

    <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
            style={styles.Input}
            placeholder='Enter your email'
        />
    </View>

<View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput 
            style={styles.Input}
            placeholder='Enter your password'
            secureTextEntry={true}
        />
    </View>

    <View style={styles.inputContainer}>
        <Text style={styles.label}>confirm Password</Text>
        <TextInput 
            style={styles.Input}
            placeholder='confirm your password'
            secureTextEntry={true}
        />
    </View>


    <Button buttonStyle={{
                borderRadius: 10,
                borderTopRightRadius: 0,
                borderColor: '#000'
              }} color='#000' onPress={handleRegister}> Login </Button>


              <Button buttonStyle={{
                borderRadius: 10,
                borderTopRightRadius: 0,
              }} 
              color='#000' 
              onPress={handleRegister}
              type='clear' > Google </Button>
    </View>
    <Button titleStyle={{ marginHorizontal: 20, color: 'black' }} onPress={() => navigation.navigate('Login')} title={'Ya tengo cuenta'} type='clear'/>
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
        paddingTop: 100
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

