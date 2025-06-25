import React from 'react';
import { StyleSheet, Platform, Linking, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = ({ route }) => {
    const { url } = route.params;

    // Android: Handle file download
    const handleFileDownload = ({ nativeEvent }) => {
        Alert.alert(
            'Download requested',
            'Opening download in browser...',
            [{ text: 'OK' }]
        );
        Linking.openURL(nativeEvent.downloadUrl);
    };

    // iOS: Intercept download links and open in Safari
    const handleShouldStartLoadWithRequest = (event) => {
        if (
            Platform.OS === 'ios' &&
            event.url !== url &&
            /\.(pdf|zip|docx?|xlsx?|pptx?|mp3|mp4|apk|csv|txt)$/i.test(event.url)
        ) {
            Linking.openURL(event.url);
            return false;
        }
        return true;
    };

    return (
        <WebView
            style={styles.container}
            source={{ uri: url }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onFileDownload={Platform.OS === 'android' ? handleFileDownload : undefined}
            onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default WebViewScreen;
