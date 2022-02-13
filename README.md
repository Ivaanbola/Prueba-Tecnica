## Versiones node 
    node 14.17.0

## Iniciar App
    Este proyecto esta creado desde un equipo windows.
    Si bien react-native funciona para ios y para android, hay que hacer ajustes en la parte de iOS que no se han podido tener en cuenta 
    Para iniciar el proyecto lanzar comando:
    npm install,
    Para lanzar la aplicación
    npx react-native run-android

## Limpieza de caches
    En caso de que el paso anterior falle 

    # Clean native build folders
    ./android/gradlew clean -p ./android/
    # reset React Native cache+
    npm start --reset-cache

    En otra consola
    npx react-native run-android

