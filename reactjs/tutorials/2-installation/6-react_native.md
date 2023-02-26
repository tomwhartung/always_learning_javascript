
# 6-react_native.md

Considering how React Native might figure in to my project.

# References

Continuing to work through the pages under [Installation](https://beta.reactjs.org/learn/installation)
in the new React Docs beta tutorial.

- [React Developer Tools](https://beta.reactjs.org/learn/react-developer-tools)
  - At the bottom of this page is a subsection entitled *Mobile (React Native).*

# Mobile (React Native)

The subsection calls for using `npm` to install `react-devtools` and running that on the command line:

> It should connect to any local React Native app that’s running.

# Thinking About React Native

Seeing this caused me to dig out the O'Reilly *Learning React Native* e-book I bought some time ago.

1. The book has apparently not been updated since 2017
1. The [React Native Website](https://reactnative.dev/) looks to be more current
1. The book insists React Native must be done on OSX with XCode in order to run on iPhones
1. I am not sure whether this is still true:
   - This post on StackOverflow claims that [Expo](https://expo.dev/) is the way to go:
     - https://stackoverflow.com/questions/64077008/do-i-still-need-a-mac-to-develop-react-native-applications-for-ios
     - It seems to imply you would use Expo along with React Native
1. The book makes it look like the code for a React-based site and a React-Native-based mobile app will be significantly different
   - React Native and Expo look to be designed specifically for Android and IOS mobile apps
1. The reactnative.dev site mentions using Expo to get started with writing cross-platform mobile apps
   - See the reactnative.dev site's [Environment Setup](https://reactnative.dev/docs/environment-setup) page
1. What about Progressive Web Apps?
   - These can presumably be installed on a phone and made to look and act much like a native app

# Putting React Native on the Back Burner for Now

For now:

1. Focus on using MDB and implementing PWA ideas so that the web app can run ok in a browser on phones
2. Consider using React Native to build a specialized mobile app if that makes sense in the future
3. In light of #2, keep things well-organized so that key parts of the code may be reused for a mobile-specific app

