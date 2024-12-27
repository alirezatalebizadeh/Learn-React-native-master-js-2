import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, conteinerStyles, textStyle, isLoading }: any) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            className={`${conteinerStyles} ${isLoading ? "opacity-50" : ""}`}
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}

        >
            <Text
                className={`${textStyle}`}
                style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#FF9C01",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        width: "80%"

    },
    text: {
        backgroundColor: "#",
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 22.4
    },
})