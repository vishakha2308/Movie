import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { TMDB_API_KEY, BASE_URL } from '../API/Key';
import AntDesign from 'react-native-vector-icons/AntDesign'

const MoviesDetails = (props) => {
    const [data, setData] = useState({})
    const moviesDetails = async () => {
        try {
            const paramObj = {
                api_key: `${TMDB_API_KEY}`,
                language: 'en-US',
            }
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${props.route.params}`,

                {
                    params: paramObj,
                }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )
            console.log('result for moviesDet', res)
            if (res && res.status === 200) {
                return {
                    status: 'success',
                    data: res,
                }
            }
            else {
                return {
                    status: 'error',
                }
            }
        }
        catch (err) {
            console.log('error in statsres...', err.response);
            return {
                status: 'error',
                error: err.response.data,
            }
        }
    }
    console.log('props', props)
    const result = async () => {
        const res = await moviesDetails();
        if (res.status === 'success') {
            console.log('daya', res.data.data)
            setData(res.data.data)
        }
    }
    useEffect(() => {
        result()
    }, [])
    return (
        <ScrollView style={{ backgroundColor: 'black', flex: 1, }}>
            <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                activeOpacity={0.7}
                style={{
                    flexDirection: 'row',
                    top: 10,
                    left: 12,
                    backgroundColor: '#2D3038',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 30,
                    width: 30,
                    position: 'absolute',
                    zIndex: 2
                }}
            >


                <AntDesign
                    color='#64676D'
                    size={22}
                    name='back'
                />
            </TouchableOpacity>
            <Image
                source={{ uri: 'https://image.tmdb.org/t/p/original/' + data.poster_path }}
                resizeMode='contain'
                style={{ width: '100%', height: 400, flex: 1 }} />
            <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'white', alignSelf: 'center', fontSize: 18, marginTop: 5 }}>{data?.title}</Text>
            <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'white', alignSelf: 'center', fontSize: 14, marginTop: 5 }}>{data?.release_date}</Text>
            <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'white',fontSize: 14, marginTop: 5 }}>{data?.vote_average}</Text>
                <AntDesign
                    name='star'
                    size={16}
                    color='yellow'
                    style={{alignSelf:'center',marginLeft:5  }}/>
            </View>
            <Text style={{ fontFamily: 'Poppins-Regular', color: 'white', alignSelf: 'center', fontSize: 14, marginTop: 5 ,textAlign:'justify',marginHorizontal:5}}>{data?.overview}</Text>
        </ScrollView>
    )
}
export default MoviesDetails