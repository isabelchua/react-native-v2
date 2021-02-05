import React from "react";
import { Pressable, Text, View } from "react-native";
//import styles from "../CarItem/styles";
import styles from "./styles";

const StyledButton = ({ params }) => (
	<View>
		<Pressable
			style={styles.button}
			onPress={() => {
				console.warn("hey there");
			}}
		>
			<Text>Custom Order</Text>
		</Pressable>
	</View>
);

export default StyledButton;
