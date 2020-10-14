import React ,{Component} from 'react'
import {View,StyleSheet,TextInput,TouchableOpacity, Alert,Text,Modal,ScrollView, KeyboardAvoidingView} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import Myheader from '../components/myheader'


export default class BookRequest extends Component{
    constructor(){
        super()
        this.state={
            emailid:firebase.auth().currentUser.email,
            bookname:"",
            reason:"",
        }
    }
    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }
    Addrequest=(bookname,reason)=>{
        var emailid = this.state.emailid;
        var requestid = this.createUniqueId();
        db.collection("requestbooks").add({emailid:emailid,bookname:bookname,reason:reason,requestid:requestid})
        this.setState({bookname:"",reason:""})
        return(
            Alert.alert("Book Requested Successfully")
        )
    }
    render(){
        return(
            <View style={{flex:1}}>
               <Myheader title="Request Book"/>
               
               <KeyboardAvoidingView style={styles.keyBoardStyle}>
                   <TextInput style={styles.formTextinput}
                   placeholder={"Enter Book Name"}
                   onChangeText={(text)=>{
                    this.setState({bookname:text})
                   }}
                   value={this.state.bookname}
                   />
                     <TextInput style={styles.formTextinput}
                   placeholder={"Reason"}
                   multiline
                   numberOfLines={7}
                   onChangeText={(text)=>{
                    this.setState({reason:text})
                   }}
                   value={this.state.reason}
                   />
                   <TouchableOpacity style={styles.button} onPress={()=>{this.Addrequest(this.state.bookname,this.state.reason)}}><Text>Request</Text></TouchableOpacity>
               </KeyboardAvoidingView>
            </View>
            

        )
    }
    
    }
    const styles = StyleSheet.create({ keyBoardStyle : { flex:1, alignItems:'center', justifyContent:'center' },
     formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, },
      button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", 
      shadowOffset: { width: 0, height: 8, }, 
      shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, } )