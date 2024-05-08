import React from 'react';
import { StyleSheet, Image, ScrollView, } from 'react-native';
import { View, Text, TextArea, Input, XStack, styled} from 'tamagui';

import Timer from './../components/Timer';

const StyledView = styled(View, {
    padding: 100,
    backgroundColor: "#e6d7ff"
  })

const Session = () => {
    return (
      <StyledView>   
            <Text>Session Goal</Text>
            <TextArea placeholder="What are we working on for this session?" />
            <Timer />
      </StyledView>
    );
  };
  
  export default Session;