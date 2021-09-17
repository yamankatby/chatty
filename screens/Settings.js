import React from "react";
import { Text, View } from "react-native";
import { Avatar, Title, Subheading, Button } from "react-native-paper";

const Settings = () => {
  return (
    <View style={{ alignItems: "center", marginTop: 16 }}>
      <Avatar.Text label="UN" />
      <Title>User Name</Title>
      <Subheading>user@name.com</Subheading>
      <Button>Sign Out</Button>
    </View>
  );
};

export default Settings;
