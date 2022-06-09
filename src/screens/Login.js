import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Main } from '../route';
const styles = StyleSheet.create({
    hello: {
        fontFamily: 'Poppins-SemiBold',
        marginTop: 35,
        alignSelf: 'center',
        fontSize: 20,
        color: 'black'
    },
    welcome: {
        fontFamily: 'Poppins-Medium',
        // marginTop: 4,
        alignSelf: 'center',
        fontSize: 16,
        color: 'black'
    },
    name: {
        marginTop: 55,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginHorizontal: 10,
        paddingLeft: 15
    },
    password: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: -20,
        paddingLeft: 15,
        position:'relative'
    },
    eye: {
    position:'absolute',
    alignSelf:'flex-end',
    right:18,
    bottom:10
    },
    signInBtn: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: 'white',
        paddingVertical:8
    },
    main: {
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        flex:1
    },
    btn:{
        // flex:1,
        width:'90%',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor:'black',
        marginTop:45,
        borderRadius:10
    }
})
const Login = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [hidden, SetHidden] = useState(true)
    const onEyePress = () => SetHidden(!hidden)
    const onLogin =()=>{
        if(name ==''){
            ToastAndroid.show('Please enter name', ToastAndroid.SHORT)
            return;
        }
        if(password ==''){
            ToastAndroid.show('Please enter password', ToastAndroid.SHORT)
            return;
        }
        props.navigation.navigate('Main')

    }
    return (
        <View style={styles.main}>
            <Text style={styles.hello}>
                Hello Again!
            </Text>
            <Text style={styles.welcome}>
                Welcome back you've been missed!
            </Text>
            <TextInput
                value={name}
                onChangeText={text => setName(text)}
                style={styles.name}
                placeholder={'Enter username'} />
            <TextInput />
            <View style={styles.passwordBox}>
                <TextInput
                    secureTextEntry={hidden}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.password}
                    placeholder={'Password'} />
                {hidden ?
                    <Ionicons name='eye-off-outline' size={22} color='gray'
                        onPress={onEyePress} style={styles.eye} /> :
                    <Ionicons name='eye-outline' size={22} color='gray'
                        onPress={onEyePress} style={styles.eye} />}
            </View>
            <TouchableOpacity style={styles.btn}
            onPress ={onLogin}>
                <Text style={styles.signInBtn}>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Login

