// Importing necessary libraries and components
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing the reducers
import rootReducer from './reducers';

// Importing the screens
import RepositoryAnalysis from './components/RepositoryAnalysis';
import CodeSnippetGeneration from './components/CodeSnippetGeneration';
import AISuggestions from './components/AISuggestions';
import CodeEditor from './components/CodeEditor';
import ChatSystem from './components/ChatSystem';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import ProjectFolderStructure from './components/ProjectFolderStructure';
import ReadmeRequirements from './components/ReadmeRequirements';
import DeploymentFolders from './components/DeploymentFolders';
import VercelIntegration from './components/VercelIntegration';
import UserInterface from './components/UserInterface';
import CrossPlatformCompatibility from './components/CrossPlatformCompatibility';
import TutorialsHelp from './components/TutorialsHelp';
import AIMachineLearning from './components/AIMachineLearning';

// Creating the navigation stack
const Stack = createStackNavigator();

// Creating the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

// The main App component
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RepositoryAnalysis">
          <Stack.Screen name="RepositoryAnalysis" component={RepositoryAnalysis} />
          <Stack.Screen name="CodeSnippetGeneration" component={CodeSnippetGeneration} />
          <Stack.Screen name="AISuggestions" component={AISuggestions} />
          <Stack.Screen name="CodeEditor" component={CodeEditor} />
          <Stack.Screen name="ChatSystem" component={ChatSystem} />
          <Stack.Screen name="PersonalizedRecommendations" component={PersonalizedRecommendations} />
          <Stack.Screen name="ProjectFolderStructure" component={ProjectFolderStructure} />
          <Stack.Screen name="ReadmeRequirements" component={ReadmeRequirements} />
          <Stack.Screen name="DeploymentFolders" component={DeploymentFolders} />
          <Stack.Screen name="VercelIntegration" component={VercelIntegration} />
          <Stack.Screen name="UserInterface" component={UserInterface} />
          <Stack.Screen name="CrossPlatformCompatibility" component={CrossPlatformCompatibility} />
          <Stack.Screen name="TutorialsHelp" component={TutorialsHelp} />
          <Stack.Screen name="AIMachineLearning" component={AIMachineLearning} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
