import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Loading from "./Loading.js";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather.js";
const API_KEY = "9d23fee1daf7476505c8f1499eaea6ef";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(5);
  const [condition, setCondition] = useState("Clouds");

  let getWeahter = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log("data", data);
    setIsLoading(false);
    setTemp(data.main.temp);
    setCondition(data.weather[0].main);
  };

  let getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      getWeahter(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", "so sad");
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  console.log(temp, condition);
  return isLoading ? (
    <Loading />
  ) : (
    <Weather temp={Math.round(temp)} condition={condition} />
  );
}
