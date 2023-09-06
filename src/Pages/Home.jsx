import Draggable from "react-draggable";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container overflow-hidden p-5 h-screen">
        <Draggable>
          <div className="border w-auto inline-block bg-gray-400 m-5 cursor-pointer">
            <img src="/folder.png" alt="" className="" />
            <p>Folder 1</p>
          </div>
        </Draggable>

        <Draggable>
          <div className="border w-auto inline-block bg-gray-400 m-5 cursor-pointer">
            <img src="/folder.png" alt="" className="" />
            <p>Folder 2</p>
          </div>
        </Draggable>

        <Draggable>
          <div className="border w-auto inline-block bg-gray-400 m-5 cursor-pointer">
            <img src="/folder.png" alt="" className="" />
            <p>Folder 3</p>
          </div>
        </Draggable>

        <Draggable>
          <div className="border w-auto inline-block bg-gray-400 m-5 cursor-pointer">
            <img src="/folder.png" alt="" className="" />
            <p>Folder 4</p>
          </div>
        </Draggable>
      </main>
    </>
  );
};

export default Home;
