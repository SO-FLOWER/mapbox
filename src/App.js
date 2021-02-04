import React from 'react';
import './App.css'
import ReactDOM from 'react-dom';

// function BuySomeThing(props){
//     if(props.money > 10 ){
//       return <h2>
//         购买成功！金额:￥{props.money},找零:￥{props.money - 10}
//       </h2>
//     }else{
//       return <h2>
//         购买失败！金额:￥{props.money}
//       </h2>
//     }
// }

// class InputWidget extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       money:0
//     }
//   }

//   uid = {
//     'rmb':'人民币',
//     'usd':'美金'
//   }

//   handChange=(e)=>{
//     let money = e.target.value;
//     this.setState({
//       money:money
//     })
//     this.props.onMoneyInput(money)
//   }

//   render(){
//     return(
//           <fieldset>
//               <legend>
//                  请输入付款金额({this.uid[this.props.uid]})
//               </legend>
//               <input type="number" value={this.state.money} onChange={this.handChange}></input>
//           </fieldset> 
//     )
//   }
// }



// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       rmb:0,
//       usd:0
//     }
//   }

//   rmbChange = (money) => {
//    console.log('人民币' + money);
//   }

//   usdChange = (money) => {
//     console.log('美金' + money);
//   }
 

//   render(){
//     return(
//       <div>
//           <h2>付款计算器，货币兑换</h2>
//           <InputWidget uid={'rmb'} onMoneyInput={this.rmbChange}></InputWidget>
//           <InputWidget uid={'usd'} onMoneyInput={this.usdChange}></InputWidget>

//           <BuySomeThing money={this.state.money}></BuySomeThing>
//       </div>
//       )}
// }

// title组件
// class Title extends React.Component{
//   constructor(){
//       super()
//   }
//   render(){
//       let {color} = this.props
//       return (
//           <h3 style={{color: color}}>这是一个标题</h3>
//       )
//   }
// }

// // Button 组件
// class Button extends React.Component{
//   constructor(props){
//       super(props)
//   }

//   render(){
//       let {color,handleClick} = this.props

//       return (
//           <div>
//               <button
//                   style={{color:color}}
//                   type="button"
//                   onClick={() => {
//                       handleClick("blue")
//                   }}
//                   >
//                   蓝色主题
//               </button>
//               <button
//                   style={{color:color}}
//                   type="button"
//                   onClick={() => {
//                       handleClick("green")
//                   }}
//                   >
//                   绿色主题
//               </button>
//           </div>
//       )
//   }
// }


// // APP 组件
// class App extends React.Component{
//   constructor(){
//       super()
//       this.state = {
//           themeColor: 'blue'
//       }
//   }

//   handleClick(color){
//       console.log(this)
//       this.setState({
//           themeColor: color
//       })
//   }


//   render(){
//       let {themeColor} = this.state

//       return (
//           <div>
//               <Title color={themeColor}/>
//               <Button 
//                   handleClick={(color) => this.handleClick(color)} 
//                   color={themeColor}/>
//           </div>
//       )
//   }
// }

// 添加内容组件
// function ShowA(){
//   return <h2>This is ShowA Component</h2>
// }

// function ShowB(){
//   return <h2>This is ShowB Component</h2>
// }

// // 渲染组件
// class App extends React.Component{
//   constructor(){
//       super()

//       this.state = {
//           isShowA : true
//       }
//   }

//   render(){
//       let {isShowA } = this.state;
      
//       // 定义保存组件的变量
//       let showComponent = null
      
//       // 更加条件的不同,变量中赋值不同的组件
//       if(isShowA){
//           showComponent =  <ShowA />
//       }else{
//           showComponent =  <ShowB />
//       }
      
//       // 也可以简写如下
//       // showComponent = isShowA ? <ShowA /> : <ShowB />

//       return (
//           <div>
//               {/* 显示代表不同组件的变量 */ }
//               { showComponent }
//               <button 
//                   type="button" 
//                   onClick={() => this.setState({isShowA: !isShowA})}
//               >点击显示组件{isShowA? "B" : "A"}</button>
//           </div>
//       )
//   }
// }

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
            showElem:0
        }
  }

  changNum=(num)=>{
    this.setState({
       num:num
    })
  }

  render(){
      return (
         <ul>
           <li onClick={() => this.changNum(0)}>
             <div className={this.state.num == 0 ? 'active' : ''}>第一</div>
           </li>
           <li onClick={() => this.changNum(1)}>
             <div className={this.state.num == 1 ? 'active' : ''}>第二</div>
           </li>
           <li onClick={() => this.changNum(2)}>
             <div className={this.state.num == 2 ? 'active' : ''}>第三</div>
           </li>
           <li onClick={() => this.changNum(3)}>
             <div className={this.state.num == 3 ? 'active' : ''}>第四</div>
           </li>
           <li onClick={() => this.changNum(4)}>
             <div className={this.state.num == 4 ? 'active' : ''}>第五</div>
           </li>
           <li onClick={() => this.changNum(5)}>
             <div className={this.state.num == 5 ? 'active' : ''}>第六</div>
           </li>
           <li onClick={() => this.changNum(6)}>
             <div className={this.state.num == 6 ? 'active' : ''}>第七</div>
           </li>
         </ul>
      )
  }
}



export default App;
