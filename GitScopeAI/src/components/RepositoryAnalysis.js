```javascript
// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

// RepositoryAnalysis Component
const RepositoryAnalysis = ({ repoUrl }) => {
  // State for storing the repository data
  const [repoData, setRepoData] = useState(null);

  // Function to fetch repository data from GitHub API
  const fetchRepoData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repoUrl}`);
      setRepoData(response.data);
    } catch (error) {
      console.error('Error fetching repository data: ', error);
    }
  };

  // UseEffect to call fetchRepoData on component mount
  useEffect(() => {
    fetchRepoData();
  }, []);

  // Render repository data if available
  return (
    <View style={styles.container}>
      {repoData ? (
        <>
          <Text style={styles.title}>Repository Analysis</Text>
          <Text style={styles.text}>Name: {repoData.name}</Text>
          <Text style={styles.text}>Description: {repoData.description}</Text>
          <Text style={styles.text}>Stars: {repoData.stargazers_count}</Text>
          <Text style={styles.text}>Forks: {repoData.forks_count}</Text>
          <Text style={styles.text}>Open Issues: {repoData.open_issues_count}</Text>
        </>
      ) : (
        <Text style={styles.text}>Loading...</Text>
      )}
    </View>
  );
};

// Styles for the RepositoryAnalysis component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default RepositoryAnalysis;
```