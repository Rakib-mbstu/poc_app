# Expo App with WebView

A simple Expo application that demonstrates navigation between a home screen and a WebView component.

## Features

- Home screen with a clean UI
- WebView integration
- React Navigation for screen management

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Run on your preferred platform:
   - For Android: `npm run android`
   - For iOS: `npm run ios`
   - For web: `npm run web`

## Project Structure

- `/src/screens/`
  - `HomeScreen.js` - Main screen with navigation button
  - `WebViewScreen.js` - WebView component that loads the specified URL

## Dependencies

- @react-navigation/native
- @react-navigation/native-stack
- react-native-screens
- react-native-safe-area-context
- react-native-webview
