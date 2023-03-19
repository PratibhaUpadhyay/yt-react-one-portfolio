import React from 'react'

const  About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    > 
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
            I am a final year undergraduate student in the Department of Computer Science and Engineering at Uttarakhand Technical University, focused on Software Engineering.<br/>
            I have complleted my 3 months Internship from WolfersTech Organization as a Frontend Development.<br/>

            Key Skills Include:
            Programming Languages: C++, C, Python (Basic) and also Interested in web development and learning new technologies and skills. <br/>Methodologies:- Object-Oriented Programming (OOP), Database Management System, MySQL .
            <br/>
            
            </p>

            <br/>
            <p className="text-xl">
            My Hobbies Include Web Designing and Testing .

            </p>
        </div>

    </div>
  )
}

export default  About