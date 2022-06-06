import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Modal,
  SafeAreaView,
  Button,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openExit, setOpenExit] = useState(false); //import해야하는 코드
  const [inputValue, setInputValue] = useState(""); //import해야하는 코드
  const [lengthOfInput, setLengthOfInput] = useState(0); //import해야하는 코드

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* import해야하는 코드 */}
      <Text>잠시만 기다려주세요</Text>
      <Text>로딩중입니다.</Text>
      {[...Array(3).keys()].map((index) => (
        <MotiView
          key={index}
          from={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 3,
          }}
          transition={{
            type: "timing",
            duration: 2000,
            delay: index * 800,
            easing: Easing.out(Easing.ease),
            repeatReverse: false,
            loop: true,
          }}
          style={styles.dot}
        />
      ))}
      {/* 로딩창 코드 */}

      {/* 탈퇴버튼 코드 */}
      <Modal
        animationType="slide"
        visible={openExit}
        transparent={true}
        onRequestClose={() => setIsOpen(!openExit)}
        style={styles.modal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalSize}>
            <Text style={styles.title}>탈퇴하기</Text>
            <Text>혹시나 불편한 점이 있으셨다면</Text>
            <Text>사유를 부탁드려요!</Text>
            <TextInput
              multiline
              maxLength={50}
              value={inputValue}
              onChangeText={(text) => {
                setInputValue(text);
                setLengthOfInput(text.length);
              }}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.submitQuit}
              onPress={() => setOpenExit(!openExit)}
            >
              <Text
                style={{ color: "white", fontWeight: "600", fontSize: "16" }}
              >
                제출하고 탈퇴하기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quit}
              onPress={() => setOpenExit(!openExit)}
            >
              <Text
                style={{ color: "#FF107D", fontWeight: "600", fontSize: "16" }}
              >
                그냥 탈퇴하기
              </Text>
            </TouchableOpacity>
            <Text style={styles.textLength}>{lengthOfInput}/50</Text>
          </View>
        </View>
      </Modal>
      {/* import하는 범위 */}
      <Button title="탈퇴하기" onPress={() => setOpenExit(!openExit)} />

      <Modal
        animationType="slide"
        visible={isOpen}
        transparent={true}
        onRequestClose={() => setIsOpen(!isOpen)}
        style={styles.modal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalSize}>
            <Text>모달 열림</Text>
            <Image
              source={require("./assets/favicon.png")}
              style={styles.image}
            />
            <Button
              title="눌러서 모달을 꺼주세요"
              onPress={() => setIsOpen(!isOpen)}
            />
          </View>
        </View>
      </Modal>
      <Button title="모달을 여는 버튼이다" onPress={() => setIsOpen(!isOpen)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
  },

  modal: {
    marginTop: 300,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalSize: {
    margin: 20,
    width: 350,
    height: 400,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  image: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
  },

  dot: {
    position: "absolute",
    top: 200,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FF96BE80",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },

  textLength: {
    position: "absolute",
    top: 200,
    right: 75,
    color: "#ADADAD",
  },

  input: {
    width: 220,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ADADAD",
    marginTop: 20,
    padding: 10,
  },

  submitQuit: {
    width: 220,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#FF107D",
  },

  quit: {
    width: 220,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF107D",
    marginTop: 20,
  },
});
