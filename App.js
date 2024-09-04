import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import data from './data.json';

export default function App() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        setProfiles(data);
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {profiles.map((profile, index) => (
                <View key={index} style={styles.profileCard}>
                    <Image source={{ uri: profile.photo_url }} style={styles.profileImage} />
                    <Text style={styles.profileName}>{profile.name}</Text>
                    <Text style={styles.profileEmail}>{profile.email}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f7f7f7',
    },
    profileCard: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    profileEmail: {
        fontSize: 14,
        color: '#666',
    },
});