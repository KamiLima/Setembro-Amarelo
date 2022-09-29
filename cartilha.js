import React from 'react';
import {View, Text, StyleSheet,Image } from 'react-native';

export default function Cartilha () {

  return(

    <View style= {styles.geral}>
    <Image style={styles.logo} source={require('../assets/sa5.jpg')} />
    <Text style={styles.texto}>
  Transtornos mentais: você sabia que praticamente todas as pessoas que cometeram suicídio apresentavam pelo menos um transtorno psiquiátrico? Pessoas com depressão, transtorno bipolar, trantornos relacionados ao uso de drogas lícitas ou ilícitas(álcool, maconha, crack e cocaína, por exemplo), esquizofrenia e transtorno de personalidade fazem parte do grupo de risco. Dessa forma, a identificação e o tratamento dos trastornos mentais pelo médico psiquiatra estão entre os principais fatores de proteção na prevenção do suicídio. </Text>
  <Text style={styles.titulo}>
  Fatores de risco e Sinais de Alerta
  </Text>
  <Text style={styles.texto2}>
  1. Transtornos mentais: Você sabia que praticamente todas as pessoas que cometeram suicídio apresentavam pelo menos um transtorno psiquiátrico? Pessoas com depressão, transtorno bipolar, transtorno relacionados ao uso de drogas lícitas ou ilícitas, esquizofrenia e transtorno de personalidade fazem parte do grupo de risco. Dessa forma, a identificação e o tratamento dos transtornos mentais pelos médicos psiquiatra estão entre os
principais fatores de proteção na prevenção do suicídio.
  </Text>
  <Text style={styles.texto2}>
  2. Histórico pessoal: Tentativa prévia é o principal fator de risco para o suicídio. Indivíduos que já tentaram o suicídio têm de cinco a seis vezes mais chances de tentar novamente.
  </Text>
  <Text style={styles.texto2}>
  3. Ideação suicida: Comentários que demonstrem desespero, desesperança e desamparo podem ser manifestação de uma ideação suicida. Atenção a expressão como "eu desejaria não ter nascido", "caso não nos encontremos de novo" - são sinais de alerta.
  </Text>
  <Text style={styles.texto2}>
  4. Fatores estressores crônicos e recentes: Eventos estressores significativos, como separação conjugal, migração ou perda de uma pessoa próxima, além daqueles que leva a prejuízo econômico e social, como falência e perda de emprego, estão associados ao surgimento de pensamentos suicidas.

  </Text>
  
    </View>
  )
}
const styles = StyleSheet.create({
  geral: {
    flex: 2,
    backgroundColor: '#',
    padding: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    
    },
  texto: {
    backgroundColor: '#F4FA58',
    borderStyle: 'groove',
    borderWidth: 0,
    borderRadius: 20,
    borderColor:'black',
    textAlign: 'center',
    margin: 20,
    marginTop: 0,
    fontSize: 14,
  },
  logo:{
    width:280,
    height: 280,
    margin: 32,
  },
  titulo: {
    textAlign: 'center',
    margin: 15,
    fontSize: 15,
    backgroundColor:'#9A2EFE',
    borderRadius: 8,
  },
  texto2: {
    margin: 15,
    fontSize: 12,
    backgroundColor:'#F4FA58',
    borderColor: '#9A2EFE',
    borderTopLeftRadius:1,
    borderRadius: 10,
    
  },


});

