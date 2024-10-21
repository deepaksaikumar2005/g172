import React from 'react'
import Title from '../components/Title'
import contact from '../assets/contact.webp';
const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t'>
            <Title text1={'CONTACT'} text2={'US'}/>
        </div>
        
        <div className='my-10 flex flex justify-center md:flex-row gap-10 mb-28'>
            <img src={contact} alt="" className='w-full md:max-w-480px'/>
            <div className='flex flex-col justify-center items-start gap-6'>
            <p className='text-2xl font-medium text-gray-800'>Give us your number our team will contact you soon</p>
            <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Mobile number' required/>
            <button className='bg-black text-white font-light px-8 py-2 mt-4'>Submit</button>
            </div>

        </div>
    </div>
  )
}
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children;
    }
  }
  

export default Contact;