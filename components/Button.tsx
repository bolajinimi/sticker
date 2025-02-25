import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Pressable, Text } from "react-native";

type Props = {
    label: string;
    onPress?: () => void;
    theme?: "primary"
}

export default function Button({ label, onPress, theme }: Props) {
    if (theme === 'primary') {
    return (
        <View style={styles.container}>
            <Pressable 
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={onPress}
                android_ripple={{ color: "#388E3C" }}
            >
                <FontAwesome
                name="upload"
                size={18}
                color="#25292e"
                style={styles.buttonIcon}
                />
                <Text style={styles.text}>{label}</Text>
            </Pressable>        
        </View>
    );
}}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        width: '100%',
    },
    button: {
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        width: '100%',
        minHeight: 50,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPressed: {
        opacity: 0.8,
    },
    buttonIcon: {
        paddingRight: 8,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});
