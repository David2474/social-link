import UsersLinks from "./components/UsersLinks"


function App() {

  return (
    <section className="text-white py-1 bg-Dark-Grey md:w-5/12 w-10/12  flex flex-col font-inter items-center justify-center h-5/6 rounded-md">
      <div className="w-5/6 h-1/3 flex flex-col  items-center justify-center">
        <img 
          src="/profile-david.jpg" 
          className="h-[60%] md:w-[30%]  w-[45%] rounded-[50%]"/>
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-lg font-semibold">David Gutierrez</h1>
          <p className="text-Green text-xs">Developer in progress</p>
        </div>
      </div>

      <div className="flex flex-col items-center p-2 justify-evenly h-4/6 w-5/6">
        <UsersLinks/>
      </div>
    </section>
  )
}

export default App
