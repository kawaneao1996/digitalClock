import { StyleSheet, Text, View } from 'react-native';
import dayjs from 'dayjs';
import {useTime} from  './useTime';

export default function App() {
  const time = useTime(1000);
  const formattedTime = dayjs(time).format('HH:mm:ss');
  return (
    <View style={styles.container}>
      <Text>
        {formattedTime}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
