import React ,{Component} from 'react'
import {View,StyleSheet,TextInput,TouchableOpacity, Alert,FlatList,Text,Modal,ScrollView, KeyboardAvoidingView} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import Myheader from '../components/myheader'
import {ListItem} from 'react-native-elements'

export default class BookDonate extends Component{
    constructor(){
        super()
        this.state={
            booklist:[],

        }
        this.requestref=null;
    }

    getrequestlist=()=>{
        this.requestref=db.collection("requestbooks").onSnapshot((snapshot)=>{
            var requestlist = snapshot.docs.map(document=>document.data())
            this.setState({booklist:requestlist})
        })
    }
    componentDidMount(){
        this.getrequestlist();
    }
    componentWillUnmount(){
        this.requestref();
    }
    keyExtractor=(item,index)=>index.toString()
   renderItem=({item,i})=>{
       return(
            <ListItem key={i} title={item.bookname}  titleStyle={{color:"blue"}}
            rightElement={<TouchableOpacity onPress={()=>{
                this.props.navigation.navigate("ReceiverDetails",{"details":item})
            }}><Text>View</Text></TouchableOpacity>}
            />
        )
    }
render(){
    return(
        <View style ={{flex:1}}>
            <Myheader title="Donate Books"/>
            <View style={{flex:1}}>
             {this.state.booklist.length==0?(<View style={styles.subContainer}>
                 <Text >List of all requested books</Text></View>
                 ):(<FlatList keyExtractor={this.keyExtractor}
                 data={this.state.booklist}
                renderItem={this.renderItem}
                 />)}
            </View>
        </View>
    )
}

}
const styles = StyleSheet.create({ subContainer:{ flex:1, fontSize: 20, justifyContent:'center', alignItems:'center' },
 button:{ width:100, height:30, justifyContent:'center', 
 alignItems:'center', backgroundColor:"#ff5722", shadowColor: "#000",
  shadowOffset: { width: 0, height: 8 } } })