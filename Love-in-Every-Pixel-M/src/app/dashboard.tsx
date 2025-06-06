import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import { useRouter } from "expo-router";

export default function Dashboard() {
    const router = useRouter();
    
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
        <Button
            title="Voltar"
            onPress={() => router.back()}
        />
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#2F4F4F", // Um verde igual a sua unha linda! 😉
    },
});