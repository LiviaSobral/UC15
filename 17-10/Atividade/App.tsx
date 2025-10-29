import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import User from './components/User';
import Card from './components/Card';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.background}>
        <User imageURl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgD60gnoIDhh9lHRcbW71uZFs_b-Z9jCINsg&s' name='Bandit' age={21} bio='You picked a bad time to get lost Friend'/>
        <ScrollView style={styles.container}>
          <Card imageURl='https://i.ytimg.com/vi/DKAXsdil_BQ/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC6AKKAgwIABABGGUgZShlMA8=&rs=AOn4CLAvBai2wV-Y_iyVXid6M19nI_KsDA' title='Found this in my kitchen' content='Scary looking mudcrab tried to stab me in the knee'/>
          <Card imageURl='https://pbs.twimg.com/media/Dxxa_hlWwAo4hId.jpg' title='THERE IS ANOTHER' content='this is getting out of hand now there are two of them'/>
          <Card imageURl='https://static.wikia.nocookie.net/elderscrolls/images/d/d8/Sweetroll_%28Blades%29.jpg/revision/latest?cb=20190925010142' title='I have been robbed!!' content='I know people are gonna laugh but someone actually stole my sweet roll'/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 704,
    backgroundColor: '#313236',
    padding:10
  },
  background:{
    backgroundColor:'black'
  }
});
