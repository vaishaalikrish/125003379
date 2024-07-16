import React,{useState} from "react";
function RegForm ()
{
    const[formData,setFormData]=useState({
  companyName:'goMart',
  ownerName:'Vaishaali K',
  rollNo:'125003379',
  ownerEmail:'125003379@sastra.ac.in',
  accessCode:"LGcHvG"
    });
    const handleChangeform =(key,val) =>
    {
    setFormData({...formData,[key]:val});
    };
    const handleSubmit=(e) =>
    {
        e.preventDefault();
        // try{
        //     const res=await fetch('http://20.244.56.144/test/register',{
        //         method:'POST'
        //     })
        // }
    }
    return(
        <div className="form1"></div>
    );
};
export default RegForm;