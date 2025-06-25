import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

const WebViewScreen = ({ route }) => {
    const { url } = route.params;

    return (
        <WebView
            style={styles.container}
            source={{ uri: url }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default WebViewScreen;
