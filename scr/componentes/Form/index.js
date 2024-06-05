import React, { useState } from "react";
import { TextInput, View, Text,TouchableOpacity,} from "react-native";
import { Picker } from '@react-native-picker/picker';
import ResultImc from "./ResultImc";
import styles from "./style";


//aqui vai ficar todo o formulario
export default function Form (){
   
    //poder gerenciar o estado da informacao - gerenciar estado 

    //precisamos colocar o nome da variavel e tbm o set dela dentro do use state vamos colocar
    //  o que elke vai pedir para iniciar
    ///quando e uma informacao que o cluente quer deixa em branco geralmente e quando vc quer 
    //colocar o valor coloca o texto 

   const [gender,setGender]= useState(null) 
   const [height,setHeight]= useState(null)
   const [weight,setWeight]= useState(null)
   const [messageImc,setMessageImc]= useState("Preencha o peso e altura")
   const [imc, setImc]= useState(null)
   const [TextButton, setTextButton]= useState("Calcular")

    function imcCalculator (){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu Imc é igual:") 
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }

    return (
        //aqui estamos usando o placeholder para ficar como um exemplo pro usuario do que ele tem que colocar no campo 
        //ja o keyborartype ele vai entender que ao usuario clicar nesse campo input ele vai trazer um teclado do tipo numerico
        //text vai ser o label na tela e o input e onde o usuario vai escrever para ter um retorno 
        <View style={styles.formContext}>
        <View style={styles.form}>
          <Text style={styles.formLabel}>Qual seu Gênero:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={gender}
              onValueChange={(chosenGender) => setGender(chosenGender)}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Feminino" value="feminino" />
              <Picker.Item label="Masculino" value="masculino" />
            </Picker>
          </View>
  
          <Text style={styles.formLabel}>Altura</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
          />
  
          <Text style={styles.formLabel}>Peso</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 75.360"
            keyboardType="numeric"
          />
  
          <TouchableOpacity
            style={styles.ButtonCalculator}
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonCalculator}>{TextButton}</Text>
          </TouchableOpacity>
        </View>
        
        {/* Certifique-se de que o componente ResultImc esteja sendo importado e usado corretamente */}
        <ResultImc messageResultImc={messageImc} resultImc={imc} />
      </View>
    );
  };
  
