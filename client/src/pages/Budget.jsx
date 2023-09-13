import React from 'react'
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultvalue = {
  location:"",
  bhk:"",
  bath:"",
  total_sqft:""
}

const URL ="http://localhost:8000";

const Budget = () => {
const [pred,setPred]=useState(null)
  const [user, setUser]= useState(defaultvalue);
const location = ['1st Block Jayanagar', '1st Phase JP Nagar', '2nd Phase Judicial Layout', '2nd Stage Nagarbhavi', '5th Block Hbr Layout', '5th Phase JP Nagar', '6th Phase JP Nagar', '7th Phase JP Nagar', '8th Phase JP Nagar', '9th Phase JP Nagar', 'AECS Layout', 'Abbigere', 'Akshaya Nagar', 'Ambalipura', 'Ambedkar Nagar', 'Amruthahalli', 'Anandapura', 'Ananth Nagar', 'Anekal', 'Anjanapura', 'Ardendale', 'Arekere', 'Attibele', 'BEML Layout', 'BTM 2nd Stage', 'BTM Layout', 'Babusapalaya', 'Badavala Nagar', 'Balagere', 'Banashankari', 'Banashankari Stage II', 'Banashankari Stage III', 'Banashankari Stage V', 'Banashankari Stage VI', 'Banaswadi', 'Banjara Layout', 'Bannerghatta', 'Bannerghatta Road', 'Basavangudi', 'Basaveshwara Nagar', 'Battarahalli', 'Begur', 'Begur Road', 'Bellandur', 'Benson Town', 'Bharathi Nagar', 'Bhoganhalli', 'Billekahalli', 'Binny Pete', 'Bisuvanahalli', 'Bommanahalli', 'Bommasandra', 'Bommasandra Industrial Area', 'Bommenahalli', 'Brookefield', 'Budigere', 'CV Raman Nagar', 'Chamrajpet', 'Chandapura', 'Channasandra', 'Chikka Tirupathi', 'Chikkabanavar', 'Chikkalasandra', 'Choodasandra', 'Cooke Town', 'Cox Town', 'Cunningham Road', 'Dasanapura', 'Dasarahalli', 'Devanahalli', 'Devarachikkanahalli', 'Dodda Nekkundi', 'Doddaballapur', 'Doddakallasandra', 'Doddathoguru', 'Domlur', 'Dommasandra', 'EPIP Zone', 'Electronic City', 'Electronic City Phase II', 'Electronics City Phase 1', 'Frazer Town', 'GM Palaya', 'Garudachar Palya', 'Giri Nagar', 'Gollarapalya Hosahalli', 'Gottigere', 'Green Glen Layout', 'Gubbalala', 'Gunjur', 'HAL 2nd Stage', 'HBR Layout', 'HRBR Layout', 'HSR Layout', 'Haralur Road', 'Harlur', 'Hebbal', 'Hebbal Kempapura', 'Hegde Nagar', 'Hennur', 'Hennur Road', 'Hoodi', 'Horamavu Agara', 'Horamavu Banaswadi', 'Hormavu', 'Hosa Road', 'Hosakerehalli', 'Hoskote', 'Hosur Road', 'Hulimavu', 'ISRO Layout', 'ITPL', 'Iblur Village', 'Indira Nagar', 'JP Nagar', 'Jakkur', 'Jalahalli', 'Jalahalli East', 'Jigani', 'Judicial Layout', 'KR Puram', 'Kadubeesanahalli', 'Kadugodi', 'Kaggadasapura', 'Kaggalipura', 'Kaikondrahalli', 'Kalena Agrahara', 'Kalyan nagar', 'Kambipura', 'Kammanahalli', 'Kammasandra', 'Kanakapura', 'Kanakpura Road', 'Kannamangala', 'Karuna Nagar', 'Kasavanhalli', 'Kasturi Nagar', 'Kathriguppe', 'Kaval Byrasandra', 'Kenchenahalli', 'Kengeri', 'Kengeri Satellite Town', 'Kereguddadahalli', 'Kodichikkanahalli', 'Kodigehaali', 'Kodigehalli', 'Kodihalli', 'Kogilu', 'Konanakunte', 'Koramangala', 'Kothannur', 'Kothanur', 'Kudlu', 'Kudlu Gate', 'Kumaraswami Layout', 'Kundalahalli', 'LB Shastri Nagar', 'Laggere', 'Lakshminarayana Pura', 'Lingadheeranahalli', 'Magadi Road', 'Mahadevpura', 'Mahalakshmi Layout', 'Mallasandra', 'Malleshpalya', 'Malleshwaram', 'Marathahalli', 'Margondanahalli', 'Marsur', 'Mico Layout', 'Munnekollal', 'Murugeshpalya', 'Mysore Road', 'NGR Layout', 'NRI Layout', 'Nagarbhavi', 'Nagasandra', 'Nagavara', 'Nagavarapalya', 'Narayanapura', 'Neeladri Nagar', 'Nehru Nagar', 'OMBR Layout', 'Old Airport Road', 'Old Madras Road', 'Padmanabhanagar', 'Pai Layout', 'Panathur', 'Parappana Agrahara', 'Pattandur Agrahara', 'Poorna Pragna Layout', 'Prithvi Layout', 'R.T. Nagar', 'Rachenahalli', 'Raja Rajeshwari Nagar', 'Rajaji Nagar', 'Rajiv Nagar', 'Ramagondanahalli', 'Ramamurthy Nagar', 'Rayasandra', 'Sahakara Nagar', 'Sanjay nagar', 'Sarakki Nagar', 'Sarjapur', 'Sarjapur  Road', 'Sarjapura - Attibele Road', 'Sector 2 HSR Layout', 'Sector 7 HSR Layout', 'Seegehalli', 'Shampura', 'Shivaji Nagar', 'Singasandra', 'Somasundara Palya', 'Sompura', 'Sonnenahalli', 'Subramanyapura', 'Sultan Palaya', 'TC Palaya', 'Talaghattapura', 'Thanisandra', 'Thigalarapalya', 'Thubarahalli', 'Thyagaraja Nagar', 'Tindlu', 'Tumkur Road', 'Ulsoor', 'Uttarahalli', 'Varthur', 'Varthur Road', 'Vasanthapura', 'Vidyaranyapura', 'Vijayanagar', 'Vishveshwarya Layout', 'Vishwapriya Layout', 'Vittasandra', 'Whitefield', 'Yelachenahalli', 'Yelahanka', 'Yelahanka New Town', 'Yelenahalli', 'Yeshwanthpur', 'other'];
  function onvalueChange(e) {
    setUser({...user, [e.target.name] : e.target.value})
  }
  
  const costDetails = async(e) =>{
    e.preventDefault();
    try {
     const response= await axios.post(`${URL}/price`, user) ;
     setPred(response.data.prediction);
      
   } catch (error) {
       console.log('while calling the addUser api',error);
       
   }
  }
 
  return (
    <div className='w-full h-screen bg-form bg-cover bg-center '>
    <Navbar />
    <section className='relative p-10 '>
    
        <div className='rounded-2xl bg-white w-2/3 h-[500px] mx-auto shadow-lg shadow-gray-400/90 p-10 '>
        <h1 className='text-4xl font-palanquin font-bold text-center mb-6 pt-3'> Generate Your <span className='text-[#ffdd00d8]'>Cost</span> Now! </h1>
        <form onSubmit={costDetails} className=' min-h-fit overflow-auto p-5 flex flex-col '>
                <div className='flex flex-row justify-start items-center gap-2'>
                <div className='w-full mb-4'>
                  <p className='text-lg h-fit w-fit font-medium mb-2'>Location</p>
                   <select name="location"   onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '>
                    <option value="select">select</option>
                    {location.map(loc => <option value={`${loc}`} >{loc}</option>
                    )} 
                   
                   </select>
                </div>
    
                <div className='w-full mb-4'>
                  <p className='text-lg h-fit w-fit font-medium mb-2'>Enter BHK</p>
                  <input name="bhk" type='number' onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                <div className='w-full mb-4'>
                  <p className='text-lg h-fit w-fit font-medium mb-2'>Enter no of Bathrooms</p>
                   <input name="bath" onChange={(e)=>onvalueChange(e)}  className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/> 
                </div>
    
                <div className='w-full mb-4'>
                  <p className='text-lg h-fit w-fit font-medium mb-2'>Enter Square feet</p>
                  <input name="total_sqft" onChange={(e)=>onvalueChange(e)}  className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
                </div>

                    <div className='mt-4 flex flex-col justify-center items-center'>
                  <button type="submit"  className='text-white bg-gradient-to-tr from-amber-200 to-amber-700   border-[#f9d959] rounded-lg h-12 w-fit px-4 '>Know Your Cost</button>
                  {pred && <p className='p-5 font-bold font-palanquin text-xl text-amber-600'>your property value is {pred} Lakhs only</p>}
                </div>
                
    </form>
   
        </div>
    </section>
    </div>
  )
}

export default Budget