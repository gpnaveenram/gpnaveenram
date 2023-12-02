import React from 'react';
import './cardLayout.css';

function CardLayout({plan,price,option1,option2,option3,option4,option5,option6,option7,option8}) {
  return (
   <div className="section">
   <div class="row">
    <div class="col-sm-4" style={{
      height:700,
      width:320,
      padding:16,
      marginLeft:20
    }}>
      <div class="card">
      <p class="card-title">{plan}</p>
      <h1 class="card-text">{price}</h1>
        <div style={{textAlign:'left'}}class="card-body">
          <hr></hr>
          <br></br>
          <p><b><span>{option1[0]}</span></b>{option1[1]}</p>
          <p><b><span>{option2[0]}</span></b>{option2[1]}</p>
          <p><b><span>{option3[0]}</span></b>{option3[1]}</p>
          <p><b><span>{option4[0]}</span></b>{option4[1]}</p>
          <p><b><span>{option5[0]}</span></b>{option5[1]}</p>
          <p><b><span>{option6[0]}</span></b>{option6[1]}</p>
          <p><b><span>{option7[0]}</span></b>{option7[1]}</p>
          <p><b><span>{option8[0]}</span></b>{option8[1]}</p>
        </div>
        <div style={{display:'center', margin:10}}>
          <a href="https://guvi.in" class="btn btn-primary">Button</a>
          </div>
      </div>
    </div>
  </div>
  </div>
      
  );
}

export default CardLayout;
