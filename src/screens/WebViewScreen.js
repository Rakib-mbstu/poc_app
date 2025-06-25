import React from 'react';
import { StyleSheet, Platform, Linking, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { Share } from 'react-native';

const WebViewScreen = ({ route }) => {
    const { url } = route.params;

    // Function to handle sharing files
    const shareFile = async (fileUrl) => {
        try {
            await Share.share({
                url: fileUrl,
                message: 'Save or Share PDF',
                title: 'Save or Share PDF',
            });
        } catch (error) {
            console.log('Error sharing:', error);
            Linking.openURL(fileUrl);
        }
    };

    // Android: Handle file download
    const handleFileDownload = ({ nativeEvent }) => {
        if (Platform.OS === 'android') {
            Alert.alert(
                'Download requested',
                'Opening download in browser...',
                [{ text: 'OK' }]
            );
            Linking.openURL(nativeEvent.downloadUrl);
        }
    };

    // iOS: Intercept download links and show share sheet
    const handleShouldStartLoadWithRequest = (event) => {
        if (
            Platform.OS === 'ios' &&
            event.url !== url &&
            /\.(pdf|zip|docx?|xlsx?|pptx?|mp3|mp4|apk|csv|txt)$/i.test(event.url)
        ) {
            Alert.alert(
                'File Download',
                'What would you like to do with this file?',
                [
                    {
                        text: 'Save/Share',
                        onPress: () => shareFile(event.url)
                    },
                    {
                        text: 'Open in Browser',
                        onPress: () => Linking.openURL(event.url)
                    },
                    {
                        text: 'Cancel',
                        style: 'cancel'
                    }
                ]
            );
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