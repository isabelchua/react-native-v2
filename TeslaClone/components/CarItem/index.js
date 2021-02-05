import React from "react";
import { Text, View, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = props => {
	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require("../../assets/images/ModelX.jpeg")}
				style={styles.image}
			/>
			<View style={styles.titles}>
				<Text style={styles.title}>Model S</Text>
				<Text style={styles.subtitle}>Starting at $69,999</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<StyledButton
					type="primary"
					content={"CUSTOM ORDER"}
					onPress={() => {
						console.warn("Custom Order was pressed");
					}}
				/>
				<StyledButton
					type="secondary"
					content={"EXISTING INVENTORY"}
					onPress={() => {
						console.warn("Existing Inventory was pressed");
					}}
				/>
			</View>
		</View>
	);
};

export default CarItem;
