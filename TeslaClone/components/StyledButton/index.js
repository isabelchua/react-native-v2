import React from "react";
import { Pressable, Text, View } from "react-native";
//import styles from "../CarItem/styles";
import styles from "./styles";

const StyledButton = props => {
	const type = props.type;
	//console.warn(type);

	const backgroundColor = type === "primary" ? "black" : "white";
	const textColor = type === "primary" ? "white" : "black";

	return (
		<View style={styles.container}>
			<Pressable
				style={[styles.button, { backgroundColor: backgroundColor }]}
				onPress={() => {
					console.warn("hey there");
				}}
			>
				<Text style={[styles.text, { color: textColor }]}>
					Custom Order
				</Text>
			</Pressable>
		</View>
	);
};

export default StyledButton;
