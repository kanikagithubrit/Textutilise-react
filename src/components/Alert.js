import React from 'react'

export default function Alert(props) {     //this is for capitalising the first letter word of success
  const capitalize =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
    return (
      <div style={{height: '50px'}}>
       {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>}  
      </div>  //thst means ki if props.alert null ni hai fr hi aage wala function kaam krega
              //this style if for CLS(cummulatibe layout shift)
    )

}
