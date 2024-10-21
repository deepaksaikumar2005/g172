import React from 'react'
import Title from '../components/Title'
import aboutus from '../assets/aboutus.jpg';
const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT '} text2 = {' US'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img src={aboutus} alt="" className='w-full md:max-w-[450px]'/>
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray'>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptatibus nemo odit eligendi. Ipsum fugit ipsam eaque consequatur eligendi. Suscipit sequi placeat voluptatum dolores sit, similique at cupiditate natus ipsum.</p>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At est corporis exercitationem ipsum necessitatibus, ullam minus magni maiores hic possimus asperiores! Praesentium inventore dolorum accusamus nostrum esse totam culpa quasi.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae rerum accusantium nulla aspernatur mollitia quo non, illum, eos minima ab ex alias nobis fuga tenetur veritatis architecto placeat molestiae at!</p>
            </div>
            {/* <div className='text-2xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'}/>
            </div>
            <div className='flex flex-col md-flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 sm:py-20 flex-col gap-5'>
                    <b></b>
                    
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default About