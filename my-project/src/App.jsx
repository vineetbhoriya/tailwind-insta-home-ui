import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <div className="h-full w-full flex flex-col justify-center space-y-10  mx-20 border p-5 ">
          <div className="flex flex-col items-start space-y-2">
            <h3 className="text-purple-900 text-2xl">Instragram</h3>
            <p>Welcome to my little Instagram</p>
            <h1 className="text-black-500 text-3xl">Instragram Story</h1>
          </div>
          <div className="flex flex-row space-x-5">
            <div className="flex flex-col items-center">
              <div className="relative p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <a href="" className="block bg-white p-1 rounded-full transform transtion hover:rotate-[10deg] ">
                  <img
                    className="w-20 h-20 rounded-full "
                    src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-06/angry_chihuahua.png?itok=TWxYDbOT"
                    alt="image"
                  />
                </a>
                <button className="p-0 absolute bottom-0 right-0 bg-blue-500  w-8 h-8  text-white rounded-full text-2xl font-semibold font-mono border-4 flex items-center justify-center border-white hover:bg-blue-800">+</button>
              </div>
              <p>you</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <a href="" className="block bg-white p-1 rounded-full transform transtion hover:rotate-[10deg] ">
                  <img
                    className="w-20 h-20 rounded-full "
                    src="https://hips.hearstapps.com/hmg-prod/images/small-dogs-toy-poodle-1563780396.jpg?crop=0.524xw:0.790xh;0.245xw,0.167xh&resize=1200:*"
                    alt="image"
                  />
                </a>
              </div>
              <p>asds@121</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <a href="" className="block bg-white p-1 rounded-full transform transtion hover:rotate-[10deg] ">
                  <img
                    className="w-20 h-20 rounded-full "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJvcn-8qrje7Rvr0QMOMvAfe1hR6CHkkqZw&usqp=CAU"
                    alt="image"
                  />
                </a>
              </div>
              <p>Tom@312</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <a href="" className="block bg-white p-1 rounded-full transform transtion hover:rotate-[10deg] ">
                  <img
                    className="w-20 h-20 rounded-full "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQW7cg5YcYmzXKsUxcqnTjQ0AKpK0ZAf57Q&usqp=CAU"
                    alt="image"
                  />
                </a>
              </div>
              <p>Don@34</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
