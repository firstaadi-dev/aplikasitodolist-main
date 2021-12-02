import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class HomeDetail2 extends Component {

    //arr1 sama item2 bedanya apa?

    //no idea tbh
    //jajal
    //yawes gas

	    //arr1 tak hapus, item2 tak jadiin data dari listnya aja ya, wok
	
	//arr1  =  []
	
	    //also bikin id keknya mending random string aja
  // id=0
  state = {
    text: '',
    item2:[
      {id:1, data:"loading"}
    ]
  };
      //sejauh ini blm nemu bug buat nambah
      //cuma pas apus aja goblok
	    //Yang store data udah gud? nambahin to do nya. wok
    storedata = async () =>{
      //this.arr1.push({id:this.id, data:this.state.text})
        //this.id++;
        let newItems = [...this.state.item2, { id: this.makeid(10), data: this.state.text }];

		//await AsyncStorage.setItem("mylist1", JSON.stringify(this.arr1))
		await AsyncStorage.setItem("mylist2", JSON.stringify(newItems))
		        
      this.setState({
          item2: newItems
      })
      console.log(this.state)
	}
	    
    makeid(length) {
        let result = '';
        let characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

	    //DARI COMPONENTDIDMOUNT
	fetchList = async () => {
			//Aslinya
		        /*
		this.arr1 = JSON.parse(await AsyncStorage.getItem("mylist1")) || []
			setState({
            item2: JSON.parse(await AsyncStorage.getItem("mylist1")) || ""
        })
        this.id = this.arr1[this.arr1.length - 1].id + 1;
		        */
		
        this.setState({
            item2: JSON.parse(await AsyncStorage.getItem("mylist2")) || []
        })
	}

    deleteItem = async (id) => {
        let newItems = Array.from(this.state.item2);
		const indexToDelete = newItems.findIndex(element => element.id == id);
    newItems.splice(indexToDelete, 1);
    await AsyncStorage.setItem("mylist2", JSON.stringify(newItems))
    this.setState({item2 : newItems});

		// this.storedata();
		//await AsyncStorage.removeItem("mylist1");
		//await fetchList();
	};
//kindly mark yg diganti bagian mana wae ntar, biart tak apply ke 2-7 jugs
      //what is 2-7
      //same code cuma beda hari
    //tak pisah akwoawkoawkow owalaaa
	    //vus liat bagian atas
	componentDidMount() {
		//Function tak externalize
		this.fetchList();  
    }
    //HALOLOOOOOOOOOO\
    //WASIONNNNNN sek tak liat2 dulu
    //top 10 multiplier game 2020 watchmojo 
    //okr okre
    //trtus lali apus ini pas responsi akwoawkowakokaww
  render(){
    if(this.state.item2.length > 0){
      renderList = this.state.item2.map(item2=>{
      return (
		    <TouchableOpacity key={item2.id} onPress={
			  () => {
                  this.deleteItem(item2.id);
                 // AsyncStorage.removeItem("mylist1")
			  }
		  }>
          <Text style={styles.item} >{item2.data}</Text>
        </TouchableOpacity>
      )
      })
    }else{
      renderList = <Text style={styles.noItems}>No Activity</Text>
    }

    return (
      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>ACTIVITY LIST</Text>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder='Apa yang ingin kamu lakukan?'
            value={this.state.text}
            onChangeText={text => this.setState({text})}
          />
          <TouchableOpacity style={styles.button} onPress={this.storedata} >
              <Text style={styles.buttonText}>Input</Text>
          </TouchableOpacity>
        </View>
        <View>
          {renderList}
        </View>
      </View>
  
  )};
}

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  noItems:{
    textAlign: 'center',
    paddingTop: 50,
    fontSize: 20,
  },
  container: {
    width,
  },
  topWrapper: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'dodgerblue',
  },
  item:{
    padding:16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  inputWrapper:{
    flexDirection: 'row', 
    marginHorizontal:20, 
    marginTop:20, 
    justifyContent: 'space-between'
  },
  textInput:{
    flex:3,
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingLeft: 10,
  },
  button:{
    justifyContent: 'center', 
    alignItems: 'center', 
    flex:1, 
    backgroundColor: 'green', 
    borderRadius: 50, 
    marginLeft:10, 
    width:80
  },
  buttonText:{
    color: '#fff'
  }
  
});
