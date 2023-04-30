import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';

// import { Container } from './styles';

const App: FC = () => {
  const backgroundStyle = "container h-12 bg-slate-300 flex-1"
  return (
    <>
      <SafeAreaView className={backgroundStyle}>
        <Text>
          Start New Project
        </Text>
      </SafeAreaView>
    </>
  )
}

export default App;