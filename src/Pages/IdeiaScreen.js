import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert, Modal, Pressable } from 'react-native';
const margin = 3;
const brown = '#853D00';
const orange = '#FF7400';
const whiteOrange = '#FFECDC';

export default function IdeiaScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ backgroundColor: whiteOrange, flex: 2 }}>

      <Text style={{ fontWeight: 'bold', textAlign: 'center', padding: 12, fontSize: 16, color: 'white', backgroundColor: brown }}>RECEITAS.COM</Text>
      <Text style={{ backgroundColor: 'white', textAlign: 'center', fontWeight: 'bold', padding: 7 }}>Quem somos?</Text>
      <Text style={{ backgroundColor: 'white', textAlign: 'justify', padding: 20, }}>
        Nossa ideia consiste em criar um guia prático de pratos
        deliciosos para iniciantes e entusiastas no mundo gastronômico.
        {'\n'}
        Nós do Receitas.com criamos esse projeto inspirados em colegas que moram sozinhos e não têem grandes habilidades culinárias, logo precisam optar por soluções simples e versáteis.
      </Text>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>         Você pode contribuir para nosso projeto enviando sua receita para ser publicada na página inicial. Se os usuários do app gostarem do seu prato ele vai para a aba Destaques da Semana :)
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Sair</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Saiba Mais</Text>
        </Pressable>
      </View>

      <View style={{
        flex: 1, flexDirection: 'column', marginTop: 5
      }}>
        <Text style={{ textAlign: 'center', color: brown, fontSize: 16, fontWeight: 'bold' }}>Envie sua sugestão para nosso E-mail ou Whatssap</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
          <Text style={{ fontWeight: 'bold' }}>brunodraw123{'\n'}@gmail.com</Text>
          <Text style={{ fontWeight: 'bold' }}>19-99578-0104</Text>
        </View>
      </View>

    </View>

  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
