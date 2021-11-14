import React from 'react'
import { StyleSheet, Text, View , TextInput, KeyboardAvoidingView,Button} from 'react-native'
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import ImgPicker from '../helpers/imagePicker';




const Registration = () => {
  const [names, setNames] = useState('')
  const [age, setAge] = useState('')
const [email, setEmail] = useState('')
const [contact, setContact] = useState('')
const [school, setSchool] = useState('')
const [college, setCollege] = useState('')
const [skill, setSkill] = useState('')
const [saving, setSaving] = useState([])


  const nameChangeHandler=text=>{setNames(text)};
  const ageChangeHandler=text=>{setAge(text)};
const emailChangeHandler=text=>{setEmail(text)};
const schoolChangeHandler=text=>{setSchool(text)};
const contactChangeHandler=text=>{setContact(text)};
const collegeChangeHandler=text=>{setCollege(text)};
const skillChangeHandler=text=>{setSkill(text)};


  const registerHandler=()=>{
    
    // this.state={name:"",age:"",email:"",school:"",contact:"",college:"",skill:""}
 console.log(names,age,school,email,contact,college,skill)
  setSaving(save => [...save,names,age,school,email,contact,college,skill]);
  const arr =[names,age,school,email,contact,college,skill]
 
 
}

  
  
  return (
    <ScrollView>
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
          
            <View style={styles.inputContainer}>
            <Text>Full Name</Text>
            <TextInput placeholder="Full Name"
            style={styles.text}
            value={names}
            autoFocus
            type="text" onChangeText={nameChangeHandler}/>
            <Text>Age</Text>
            <TextInput placeholder="Age" style={styles.text}
            value={age}
            autoFocus
            type="number" onChangeText={ageChangeHandler}/>
            <Text>Email</Text>
            <TextInput placeholder="Email" value={email} style={styles.text}
            autoFocus
            type="email"  onChangeText={emailChangeHandler}/>
            <Text>Contact</Text>
            <TextInput placeholder="Contact" value={contact} style={styles.text}
            autoFocus
            type="number" onChangeText={contactChangeHandler}/>
           <Text>School</Text>
            <TextInput placeholder="School" value={school} style={styles.text}
            autoFocus
            type="text" onChangeText={schoolChangeHandler}/>
            <Text>College</Text>
            <TextInput placeholder="College" value={college} style={styles.text}
            autoFocus
            type="text" onChangeText={collegeChangeHandler}/>
            <Text>Skills</Text>
            <TextInput placeholder="Skills" value={skill} style={styles.text}
            autoFocus
            type="text" onChangeText={skillChangeHandler}/> 
          
</View>
<ImgPicker/>
<View style={{ height: 20 }} />
<Button title="Register" style={styles.button} onPress={registerHandler} />
<View>
   {saving.map((arr)=><Text>{arr}</Text>)} 
  </View>
<ImgPicker/>
<View style={{ height: 100 }} />
        </KeyboardAvoidingView>
        </ScrollView>
    )
}
  

export default Registration

const styles = StyleSheet.create({container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: 10,
},
inputContainer: {
  width: 300,
},
button: { width:"200", marginTop: 10 ,},
text:{backgroundColor:"white" , borderColor:"black",borderWidth:2}
})
