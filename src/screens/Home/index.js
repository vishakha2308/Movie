import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, getTVSeries, addMovie, removeMovie } from '../../../redux/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Home = (props) => {
    const dispatch = useDispatch();
    const [val,setVal] =useState({})
    const [liked, setLiked] = useState(false)
    const [tvLiked, setTvLiked] = useState(false)
    const { movies, moviesBookmarks } = useSelector(state => state.moviesReducer);
    // const { tvSeries} =useSelector(state=>state.tvSeriesReducer);
    const fetchMovies = () => dispatch(getMovies());
    const fetchTvSeries = () => dispatch(getTVSeries());
    const addToMovie = movie => dispatch(addMovie(movie));
    const removeFromMovie = movie => dispatch(removeMovie(movie));
    const handleAddMovie = movie => {
        addToMovie(movie);
      };

      const handleRemoveMovie = movie => {
          setLiked(false)
        removeFromMovie(movie);
      };
      const ifExists = movie => {
        if (moviesBookmarks.filter(item => item.id === movie.id).length > 0) {
          return true;
        }

        return false;
      };
    useEffect(() => {
        fetchMovies();
        fetchTvSeries();
        console.log('movies', movies)
    }, []);
    const renderItem = ({ item }) => {
        setVal(item)
        return (
            <TouchableOpacity
            onPress={()=>props.navigation.navigate('MoviesDetails',item.id)}
            style={{ marginVertical: 10, marginHorizontal: 12 }}>
                <View style={{ flex: 1 }}>
                    {/* Book Cover */}
                    <Image
                        source={{ uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path }}
                        resizeMode='contain'
                        style={{ width: 140, height: 160, borderRadius: 10 }}
                    />
                    <View style={{ flex: 1, }}>
                        <View>
                            <Text style={{ fontSize: 18, color: 'white', width: 138, fontFamily: 'Poppins-SemiBold', marginTop: 5 }}
                                numberOfLines={1}>
                                {item.title}
                            </Text>
                        </View>
                        <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 5 }}>
                            <Text style={{ color: 'white', fontFamily: 'Poppins-Medium' }}>
                                {item.vote_average}
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    ifExists(item) ? null : handleAddMovie(item)
                                }}
                                activeOpacity={0.7}
                                style={{
                                    flexDirection: 'row',
                                    padding: 2,
                                    backgroundColor: '#2D3038',
                                    borderRadius: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 30,
                                    width: 30
                                }}
                            >

                                { liked?
                                    <MaterialCommunityIcons
                                        color='#64676D'
                                        size={22}
                                        name='cards-heart'
                                    /> :
                                    <MaterialCommunityIcons
                                        color='#64676D'
                                        size={22}
                                        name='cards-heart-outline'
                                    />}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    const movieRenderItem = ({ item }) => {
        return (
            <TouchableOpacity

            style={{ marginVertical: 10, marginHorizontal: 12 }}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={{ uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path }}
                        resizeMode='contain'
                        style={{ width: 140, height: 160, borderRadius: 10 }}
                    />
                    <View style={{ flex: 1, }}>
                        <View>
                            <Text style={{ fontSize: 18, color: 'white', width: 138, fontFamily: 'Poppins-SemiBold', marginTop: 5 }}
                                numberOfLines={1}>
                                {item.original_name}
                            </Text>
                        </View>
                        <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 5 }}>
                            <Text style={{ color: 'white', fontFamily: 'Poppins-Medium' }}>
                                {item.vote_average}
                            </Text>
                            <TouchableOpacity
                                onPress={() => setTvLiked(!tvLiked)}
                                activeOpacity={0.7}
                                style={{
                                    flexDirection: 'row',
                                    padding: 2,
                                    backgroundColor: '#2D3038',
                                    borderRadius: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 30,
                                    width: 30
                                }}
                            >

                                {tvLiked ?
                                    <MaterialCommunityIcons
                                        color='#64676D'
                                        size={22}
                                        name='cards-heart'
                                    /> :
                                    <MaterialCommunityIcons
                                        color='#64676D'
                                        size={22}
                                        name='cards-heart-outline'
                                    />}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black', paddingHorizontal: 16, }}>
            <View style={{ flex: 1, paddingHorizontal: 16 }}>
                <Text style={{ color: 'white', fontSize: 22, fontFamily: 'Poppins-SemiBold', marginTop: 10 }}>Popular Movies</Text>
                <View style={{ flex: 1, marginTop: 8 }}>
                    <FlatList
                        horizontal
                        data={movies}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 16 }}>
                {/* <Text style={{ color: 'white', fontSize: 22, fontFamily: 'Poppins-SemiBold', marginTop: -8 }}>Popular TV Series</Text> */}
                {/* <View style={{ flex: 1, marginTop:2}}>
                    <FlatList
                        horizontal
                        data={tvSeries}
                        keyExtractor={item => item.id.toString()}
                        renderItem={movieRenderItem}
                        showsVerticalScrollIndicator={false}
                    />
                </View> */}
            </View>
        </SafeAreaView>
    )

}
export default Home