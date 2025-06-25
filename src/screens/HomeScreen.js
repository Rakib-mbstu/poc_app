import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Expo App</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('WebView', { url: 'https://www.namecheap.com/support/knowledgebase/article.aspx/385/2237/how-to-set-up-a-url-redirect-for-a-domain/' })}
            >
                <Text style={styles.buttonText}>Open WebView</Text>
            </TouchableOpacity>
            <View style={{ margin: 10 }}></View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('WebView', { url: 'https://brta.gov.bd/site/page/b6f9f650-670e-424f-889f-7baada366b8d/%E0%A6%86%E0%A6%AC%E0%A7%87%E0%A6%A6%E0%A6%A8-%E0%A6%AB%E0%A6%B0%E0%A6%AE' })}
            >
                <Text style={styles.buttonText}>Open WebView</Text>
            </TouchableOpacity>
            <View style={{ margin: 10 }}></View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('WebView', { url: 'https://freetestdata.com/document-files/pdf/' })}
            >
                <Text style={styles.buttonText}>Open WebView</Text>
            </TouchableOpacity>
            <View style={{ margin: 10 }}></View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('WebView', { url: 'https://react.dev' })}
            >
                <Text style={styles.buttonText}>Open WebView!!!</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default HomeScreen;
