import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';

// import { Container } from './styles';

const App: FC = () => {
  const backgroundStyle = "bg-neutral-300 dark:bg-slate-900 flex-1 align-items-center justify-center"
  return (
    <>
      <SafeAreaView className={backgroundStyle}>
        <Text>
          Emerson
        </Text>
      </SafeAreaView>
    </>
  )
}

export default App;