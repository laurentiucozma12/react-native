# What I did:

1. I read from https://docs.expo.dev/tutorial/create-your-first-app/
2. I installed react native expo:

```
npx create-expo-app@latest
```

3. I started the project:

```
npx expo start
```

4. I added Tailwind from this guide: https://www.freecodecamp.org/news/tailwindcss-in-react-native-expo/

```
npm i nativewind
npm i --dev tailwindcss@3.3.2
```

5. I added Tailwind config file with this command:

```
npx tailwindcss init
```

6. I configured the Tailwind config file

```tsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './<custom directory>/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

7. I configured NativeWind with Babel babel.conf.js:

```tsx
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'], // I added this line
  };
};
```

8. I changed configuration in expo-end.d.ts:

```ts
/// <reference types="nativewind/types" />
//  <reference types="expo/types" /> // This was the old code, I removed this line

// NOTE: This file should not be edited and should be in your git ignore
```

## Default Readme:

## Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
