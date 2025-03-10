import { Pressable, Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "@/styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Image
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
        }}
        style={{
          width: 200,
          height: 200,
          resizeMode: 'cover',
        }}
      />
    </View>
  );
}
