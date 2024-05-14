import React from 'react';
import Card from './Components/Card';


const App = () => {
  const data = [
  
    {
      title:"FREE",
      price:"$0/month",
      User:"Single User",
      Storage:"50GB Storage",
      PublicProject:"Unlimited Public Projects",
      access:"Community Access",
      PrivateProject:"Unlimited Private Projects",
      Support:"Dedicated Phone Support",
      Subdomain:"Free Subdomain",
      Report:"Monthly status Reports",
      isPrivateProjects: false,
      isSupport: false,
      isSubdomain: false,
      isReport: false,
    },
    {
      title:"PLUS",
      price:"$9/month",
      User:"5 User",
      Storage:"50GB Storage",
      PublicProject:"Unlimited Public Projects",
      access:"Community Access",
      PrivateProject:"Unlimited Private Projects",
      Support:"Dedicated Phone Support",
      Subdomain:"Free Subdomain",
      Report:"Monthly status Reports",
      isPrivateProjects: true,
      isSupport:true,
      isSubdomain: true,
      isReport: false,
    },
    {
      title:"PRO",
      price:"$49/month",
      User:"Unlimited User",
      Storage:"50GB Storage",
      PublicProject:"Unlimited Public Projects",
      access:"Community Access",
      PrivateProject:"Unlimited Private Projects",
      Support:"Dedicated Phone Support",
      Subdomain:"Free Subdomain",
      Report:"Monthly status Reports",
      isPrivateProjects: true,
      isSupport: true,
      isSubdomain: true,
      isReport: true,
    }
];
  return (
    <>
     <Card data={data} />
    </>
  );
};

export default App;