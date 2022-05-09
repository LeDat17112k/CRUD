import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      userName: 'Lê Thành Đạt',
      index:0,
      name:'',
      price:0,
      action:'ADD ITEM',
      items:[
        {
          name:'Iphone 6',
          price:'1000'
        },
        {
          name:'Iphone 7',
          price:'1564'
        },
        {
          name:'Iphone 8',
          price:'2540'
        },
        {
          name:'Iphone 9',
          price:'5465'
        }
      ]
    }
  }

  changeName =(e)=>{
    this.setState({
      name:e.target.value
    });
  }

  changePrice = (e) =>{
    this.setState({
      price:e.target.value
    })
  }

  addItem =()=>{
    if(!this.state.items.find(item=>item.name===this.state.name)){
      this.setState({
        items:[
          ...this.state.items,
          { name:this.state.name,price:this.state.price}
        ],
        name:"",
        price:""
      })

    }
  }

  Edit =(item,index)=>{
      this.setState({
        action:'UPDATE ITEM',
        name:item.name,
        price:item.price,
        index:index
      });
  }

  Update = () =>{
  }
  

  updateNewTextValue(event){
    this.setState({newItemText: event.target.value});
  }
  createNewTodo = ()=>{

  }
}


export default App;
