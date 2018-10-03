import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default (Button = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  );
});
