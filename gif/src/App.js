import Random from "./components/Random"
import Tag from "./components/Tag"


export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background items-center overflow-x-hidden">
     <h1 className="mx-auto px-10 py-2 mt-[40px] w-11/12 bg-white rounded-lg font-bold text-4xl  text-center">Random GIFS</h1>
      <div className="flex flex-col w-full items-center mb-12">
        <Random/>
          <Tag/>
     
      </div>
    </div>
  );
}
