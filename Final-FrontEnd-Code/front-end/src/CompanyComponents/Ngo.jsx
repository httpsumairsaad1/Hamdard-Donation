import React, { useEffect, useState } from 'react'
import './Ngo.css'
const Ngo = () => {
  const data=[
    {
      "NgoId": "1",
      "NameofNgo": "Charity Foundation",
      "Purpose": "Providing food, shelter, and education to underprivileged children."
    },
    {
      "NgoId": "2",
      "NameofNgo": "Humanitarian Aid Society",
      "Purpose": "Delivering emergency aid to disaster-stricken regions."
    },
    {
      "NgoId": "3",
      "NameofNgo": "Global Relief Fund",
      "Purpose": "Providing medical assistance and humanitarian aid globally."
    },
    {
      "NgoId": "4",
      "NameofNgo": "Helping Hands Organization",
      "Purpose": "Offering assistance to the elderly and differently-abled individuals."
    },
    {
      "NgoId": "5",
      "NameofNgo": "Kindness Alliance",
      "Purpose": "Promoting kindness and empathy in communities."
    },
    {
      "NgoId": "6",
      "NameofNgo": "Aid for All",
      "Purpose": "Providing relief and support to marginalized communities."
    },
    {
      "NgoId": "7",
      "NameofNgo": "Supportive Community Network",
      "Purpose": "Building resilient communities through support networks."
    },
    {
      "NgoId": "8",
      "NameofNgo": "People's Assistance Foundation",
      "Purpose": "Empowering individuals through education and skills training."
    },
    {
      "NgoId": "9",
      "NameofNgo": "Hopeful Hearts Initiative",
      "Purpose": "Supporting individuals and families affected by health challenges."
    },
    {
      "NgoId": "10",
      "NameofNgo": "Empowerment Foundation",
      "Purpose": "Promoting economic empowerment and gender equality."
    },
    {
      "NgoId": "11",
      "NameofNgo": "Resilient Communities Project",
      "Purpose": "Building resilient communities through sustainable development."
    },
    {
      "NgoId": "12",
      "NameofNgo": "Helping Hands Worldwide",
      "Purpose": "Providing disaster relief and long-term development assistance."
    },
    {
      "NgoId": "13",
      "NameofNgo": "United Relief Foundation",
      "Purpose": "Providing humanitarian aid and development assistance globally."
    },
    {
      "NgoId": "14",
      "NameofNgo": "Compassionate Care Society",
      "Purpose": "Providing compassionate care and support to those in need."
    },
    {
      "NgoId": "15",
      "NameofNgo": "Care for All",
      "Purpose": "Ensuring access to healthcare for all individuals regardless of background."
    },
    {
      "NgoId": "16",
      "NameofNgo": "Community Assistance Network",
      "Purpose": "Facilitating community-driven development projects for sustainable change."
    },
    {
      "NgoId": "17",
      "NameofNgo": "International Aid Alliance",
      "Purpose": "Collaborating with global partners to address humanitarian crises."
    },
    {
      "NgoId": "18",
      "NameofNgo": "Generosity Foundation",
      "Purpose": "Promoting philanthropy and charitable giving for social impact."
    },
    {
      "NgoId": "19",
      "NameofNgo": "Humanitarian Relief Network",
      "Purpose": "Coordinating relief efforts and resources to respond to emergencies."
    },
    {
      "NgoId": "20",
      "NameofNgo": "Empathy Outreach",
      "Purpose": "Promoting empathy and understanding through community outreach."
    }
  ];
  
  const [ngoData,setNgoData] = useState([{}]);
  
  //  useEffect(async() => {
  //   try{const response=await fetch('http://localhost:3000/ngos',{
  //     method: 'POST',
  //     headers:{
  //       'content-type' : 'Application/json'
  //     },      
  //   }).then(res=>{res.json()}).then(resp=> {return resp});

  //   if(response.success){
  //     setNgoData(response.ngos);
  //     console.log(response.ngos);
  //   }else{
  //     alert('System busy Data not found')
  //   }
  // }catch(error){
  //   console.log(error);
  // }
  // }, [])
  
  
  return (
    <div className='listOfNgos'>
      <h1>List of NGO's</h1>
      <table>
        <thead>
          <tr>
            <th>NGO ID</th>
            <th>Name</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ngo) => (
            <tr key={ngo.NgoId}>
              <td>{ngo.NgoId}</td>
              <td>{ngo.NameofNgo}</td>
              <td>{ngo.Purpose}</td>
              <td><button className='donateButton'>Donate Now</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Ngo