
import './App.css';

import CardLayout from './cardLayout';
const planDetails = [
  {
    plan: 'Free',
    price: '$0/Month',
    option1: [right()," Single User"],
    option2: [right()," 50GB Storage"],
    option3: [right()," Unlimited Public Projects"],
    option4: [right()," Community Access"],
    option5: [cross()," Unlimited Private Projects"],
    option6: [cross()," Dedicated Phone Support"],
    option7: [cross()," Free Subdomain"],
    option8: [cross()," Monthly Status Report"]
  },
  {
    plan: 'Plus',
    price: '$9/Month',
    option1: [right()," Single User"],
    option2: [right()," 50GB Storage"],
    option3: [right()," Unlimited Public Projects"],
    option4: [right()," Community Access"],
    option5: [right()," Unlimited Private Projects"],
    option6: [right()," Dedicated Phone Support"],
    option7: [right()," Free Subdomain"],
    option8: [cross()," Monthly Status Report"]
  },
  {
    plan: 'Pro',
    price: '$49/Month',
    option1: [right()," Single User"],
    option2: [right()," 50GB Storage"],
    option3: [right()," Unlimited Public Projects"],
    option4: [right()," Community Access"],
    option5: [right()," Unlimited Private Projects"],
    option6: [right()," Dedicated Phone Support"],
    option7: [right()," Free Subdomain"],
    option8: [right()," Monthly Status Report"]
  }
];
function right(){
  return(
    <span>&#10003;</span>
  );
}
function cross(){
  return(
    <span>&#x2715;</span>
  );
}
function App() {
  
  return (
    <div className="container">
      {planDetails.map(({ plan, price, option1,option2,option3,option4,option5,option6,option7,option8 }) => {
          return <CardLayout
            plan={plan}
            price={price}
            option1={option1}
            option2={option2}
            option3={option3}
            option4={option4}
            option5={option5}
            option6={option6}
            option7={option7}
            option8={option8}
          />
        })}
        {/* <CardLayout/> 
        <CardLayout /> 
        <CardLayout />  */}
    </div>
  );
}

export default App;
