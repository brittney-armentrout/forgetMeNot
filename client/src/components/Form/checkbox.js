// import React from "react";

// const CheckBox = (props) => {
//     return ( 
//     <div>
//         <label for={props.name} className="form-label">{props.title}</label>
//         <div className="checkbox-group">
//         {props.options.map(option => {
//             return (
//                 <label key={option}>
//                     <input 
//                         className="form-checkbox"
//                         id = {props.name}
//                         name = {props.name}
//                         onChange = {props.handleChange}
//                         value = {option}
//                         checked = { props.selectedOptions.indexOf(option) > -1 }
//                         type = "checkbox" 
//                     /> 
//                     {option}
//                 </label>
//             );
//         })}
//     </div>
// </div>
// );

// }

// class CheckBox extends React.Component {
//     render() {
//         return (
//         <div>
//             <label for={this.props.name} className="form-label">{this.props.title}</label>
//             <div className="checkbox-group">
//                 {this.props.options.map(option => {
//                 return (
//                     <label key={option}>
//                         <input 
//                             className="form-checkbox"
//                             id = {this.props.name}
//                             name = {this.props.name}
//                             onChange = {this.props.handleChange}
//                             value = {this.option}
//                             checked = { this.props.selectedOptions.indexOf(option) > -1 }
//                             type = "checkbox" 
//                         /> 
//                         {option}
//                     </label>
//                 );
//             })}
//             </div>
//         </div>
//         )
//     }
// }