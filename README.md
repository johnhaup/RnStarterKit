Starter Kit for React Native apps.

### Navigation

The app uses [React Navigation](https://reactnavigation.org/)

- Loading screen
- Set up with two tabs with two screen apiece.
- App-wide modal setup.
- Types set up for navigation screen names, params, and props.

### Tests

- Basic snapshot render tests on screens.
- Run test with `-u` flag to update snapshots.

Uses [this fix](https://github.com/facebook/jest/issues/2663#issuecomment-341384494) for a png import error from react-navigation:

### State Management

[Easy Peasy](https://easy-peasy.now.sh/docs/introduction/)

### Package name

You can use [this guide](https://dev.to/karanpratapsingh/quick-guide-for-updating-package-name-in-react-native-3ei3) to update the package name from `rnstarterkit`.

### Auth0

Set up with passwordless login and google social login.

Update values in `./services/auth0`.
Updated `auth0_domain` in `./android/app/src/main/res/values/strings.xml`.
