import * as dotenv from 'dotenv';

dotenv.config();

module.exports = {
  "expo": {
    "name": "dysrupveiculos",
    "slug": "dysrupveiculos",
    "scheme": "dysrupveiculos",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/favicon.png",
    "userInterfaceStyle": "dark",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "cover",
      "backgroundColor": "#202024"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "expo-font",
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        }
      ]
    ],
    "android": {
      "package": "com.mateusdmartins.dysrupveiculos",
      "permissions": [
        "ACCESS_FINE_LOCATION",
        "ACCESS_COARSE_LOCATION",
        "ACCESS_BACKGROUND_LOCATION",
      ],
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#202024"
      },
      "config": {
        "googleMaps": {
          "apiKey": process.env.GOOGLE_MAPS_API
        }
      }
    }
  }
}