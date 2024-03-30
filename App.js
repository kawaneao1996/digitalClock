import { StyleSheet, Text, View } from 'react-native';
import dayjs from 'dayjs';
import { useTime } from './useTime';

export default function App() {
  const time = useTime(1000);
  const formattedTime = dayjs(time).format('M月D日\nH時m分\ns秒');
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>
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
  styledText: {
    fontSize: 63,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
