import { React, useState } from 'react';
import { StyleSheet, Image, ScrollView, } from 'react-native';
import { View, Text, Button, Input, XStack, styled, Select} from 'tamagui';
import CountDown from 'react-native-countdown-component';
import { Pause, Play } from '@tamagui/lucide-icons';

const StyledView = styled(View, {
    padding: 10,
    margin: 10,
    backgroundColor: "#d2afff"
  })

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);

    return (
      <StyledView>   
          <Text>Timer</Text>
          <CountDown
                  running={isRunning}
                  until={25*60*60}
                  onFinish={() => alert('finished')}
                  digitStyle={{backgroundColor: '#FFF'}}
                  timeToShow={['M', 'S']}
                  size={20}
                />
          <Button alignSelf="center" 
            onPress={() => {
              setIsRunning(!isRunning);
              }} circular icon={isRunning ? Play : Pause } size="$6">
          </Button>
      </StyledView>
    );
  };
  
export default Timer;
