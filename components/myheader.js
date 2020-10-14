import React ,{Component} from 'react'
import {Header} from 'react-native-elements'
import {View,Stylesheet} from 'react-native'

const Myheader = props=>{
    return(
        <Header centerComponent={{text:props.title,style:{color:"white",fontSize:14,fontWeight:"bold"}}}
        backgroundColor="black"
        />
    )
}
export default Myheader 