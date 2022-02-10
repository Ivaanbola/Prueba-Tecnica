## Versiones node yarn
    node 14.17.0
    yarn 

## Iniciar App
    Este proyecto esta creado desde un equipo windows.
    Si bien react-native funciona para ios y para android, hay que hacer ajustes en la parte de iOS que no se han podido tener en cuenta 
    Para iniciar el proyecto lanzar comando:
    npx react-native run-android

## Limpieza de caches

    # Delete temporary files
    rm -rf $TMPDIR/react-*
    rm -r $TMPDIR/react-*

    # Clean native build folders
    ./android/gradlew clean -p ./android/
    # reset React Native cache+
    npm start --reset-cache

    En otra consola
    npx react-native run-android

