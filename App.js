import { Text, View, ScrollView, Image } from "react-native";


import Cartilha from './componentes/cartilha';
 
 
export default function App() {
   return(
  
     <View>
      <ScrollView>
        <Text>
          <Cartilha/>
        </Text>
        <Image/>
      </ScrollView>
     </View>
  
   ) ;

 }


