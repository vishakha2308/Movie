import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { removeMovie } from '../../../redux/actions';
const Favourite = () => {
    const { movies, moviesBookmarks } = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();

    const removeMovies = movie => dispatch(removeMovie(movie));

    const handleRemoveBookmark = movie => {
        removeMovies(movie);
    };
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginVertical: 12,marginHorizontal:10 }}>
                <View style={{  flex: 1 }}>
                    <Image
                        source={{ uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path }}
                        resizeMode='contain'
                        style={{ width: 140, height: 160, borderRadius: 10 }}
                    />
                    <View style={{ flex: 1, marginLeft: 5,marginTop:4 }}>
                        <View>
                        <Text style={{ fontSize: 18, color: 'white', width: 138, fontFamily: 'Poppins-SemiBold', marginTop: 5 }}
                                numberOfLines={1}>
                                {item.title}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 10,
                                justifyContent:'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ color: 'white', fontFamily: 'Poppins-Medium',alignSelf:'center' }}>
                                {item.vote_average}
                            </Text>
                            <TouchableOpacity
                                onPress={() => handleRemoveBookmark(item)}
                                activeOpacity={0.7}
                                style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#2D3038',
                                    borderRadius: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 30,
                                    width: 30
                                }}
                            >
                                <MaterialCommunityIcons
                                    color='#64676D'
                                    size={24}
                                    name='bookmark-remove'
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ flex: 1, paddingHorizontal: 16 }}>
            <Text style={{ color: 'white', fontSize: 22, fontFamily: 'Poppins-SemiBold', marginTop: 10 }}>Favourite Movies</Text>
                <View style={{ flex: 1, marginTop: 8 }}>
                    {moviesBookmarks.length === 0 ? (
                        <Text style={{ color: '#64676D', fontSize: 18 }}>
                            Add a movie to favourite list.
                        </Text>
                    ) : (
                        <FlatList
                        horizontal
                            data={moviesBookmarks}
                            keyExtractor={item => item.id.toString()}
                            renderItem={renderItem}
                            showsVerticalScrollIndicator={false}
                        />
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
}
export default Favourite