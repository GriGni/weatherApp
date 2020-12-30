import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#C9FFBF", "#FFAFBD"],
    title: "the weather is cloudy",
    subtitle: "go out and walk with your boyfriend",
  },
  Thunderstorm: {
    iconName: "weahter-lightning",
    gradient: ["#E6DADA", "#274046"],
    title: "you have to escape here",
    subtitle: "watch out the Thunder!!!",
  },
  Drizzle: {
    iconName: "weahter-partly-rainy",
    gradient: ["#ddd6f3", "#faaca8"],
    title: "A little bit rain",
    subtitle: "it's cool, you could feel it",
  },
  Rain: {
    iconName: "weahter-pouring",
    gradient: ["#616161", "#9bc5c3"],
    title: "Rain ",
    subtitle: "don't go out!",
  },
  Snow: {
    iconName: "weahter-snowy",
    gradient: ["#50C9C3", "#96DEDA"],
    title: "Snow!!",
    subtitle: "Let's go to snowFight",
  },
  Atmosphere: {
    iconName: "weahter-sunny",
    gradient: ["#c21500", "#ffc500"],
    title: "Hot..",
    subtitle: "i need some airconditioner",
  },
  Clear: {
    iconName: "weahter-sunny",
    gradient: ["#EFEFBB", "#D4D3DD"],
    title: "Clear",
    subtitle: "it is easy to walk",
  },
  Haze: {
    iconName: "weahter-hazy",
    gradient: ["#DE6262", "#FFB88C"],
    title: "haze",
    subtitle: "it's like fog",
  },

  Mist: {
    iconName: "weahter-fog",
    gradient: ["#f857a6", "#ff5858"],
    title: "Mist",
    subtitle: "I can't see outside... watch out cars",
  },
};

export default function Weather({ temp, condition }) {
  console.log(temp, condition);
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient || ["#B993D6", "#8CA6DB"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={100}
          name={weatherOptions[condition].iconName || "weather-sunset"}
          color="white"
        ></MaterialCommunityIcons>
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  title: {
    color: "white",
    fontWeight: "300",
    fontSize: 50,
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 30,
    alignItems: "flex-start",
  },
});
