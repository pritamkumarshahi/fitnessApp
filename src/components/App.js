import React, { Component } from "react";
import CoolTabs from 'react-cool-tabs';
import Dashboard from './Dashboard';
import History from './History'


// class Content1 extends Component {
//   render() {
//     return <div>
//       Dashboard
//     </div>
//   }
// }
// class Content2 extends Component {
//   render() {
//     return <div>
//       History
//     </div>
//   }
// }

export  default  class  Example  extends  React.Component {
render() {
   return (
     <div>
	     <CoolTabs
	       tabKey={'1'}
	       style={{
            height: "100%",
            position: "absolute",
            width: "100%",
            overflow: "hidden", background:  'white' }}
	       activeTabStyle={{ background:  '#ada7a7', color:  'white' }}
	       unActiveTabStyle={{ background:  '#c8ccc8', color:  'black' }}
	       activeLeftTabBorderBottomStyle={{ background:  'blue', height:  4 }}
	       activeRightTabBorderBottomStyle={{ background:  'yellow', height:  4 }}
	       tabsBorderBottomStyle={{ background:  'orange', height:  4 }}
	       leftContentStyle={{ background:  '#ffffff' }}
	       rightContentStyle={{ background:  'ffffff' }}
	       leftTabTitle={'Dashboard'}
	       rightTabTitle={'History'}
	       leftContent={<Dashboard/>}
	       rightContent={<History/>}
	       contentTransitionStyle={'transform 0.6s ease-in'}
	       borderTransitionStyle={'all 0.6s ease-in'}/>
     </div>
);
}}