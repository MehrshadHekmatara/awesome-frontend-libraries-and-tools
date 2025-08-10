import "../output.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-12 w-[1000px] mx-auto mt-[100px]">
        <div className="col-span-2 row-span-3 bg-amber-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
          doloremque incidunt cumque pariatur labore excepturi doloribus, quis,
          impedit quisquam molestias praesentium? Nisi officiis aut est tempora
          incidunt vitae sed repudiandae.
        </div>
        <div className="row-span-3 col-start-3 bg-amber-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
          doloremque incidunt cumque pariatur labore excepturi doloribus, quis,
          impedit quisquam molestias praesentium? Nisi officiis aut est tempora
          incidunt vitae sed repudiandae.
        </div>
        <div className="row-span-3 col-start-4 bg-amber-800">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
          doloremque incidunt cumque pariatur labore excepturi doloribus, quis,
          impedit quisquam molestias praesentium? Nisi officiis aut est tempora
          incidunt vitae sed repudiandae.
        </div>
        <div className="row-span-5 col-start-5 bg-red-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
          doloremque incidunt cumque pariatur labore excepturi doloribus, quis,
          impedit quisquam molestias praesentium? Nisi officiis aut est tempora
          incidunt vitae sed repudiandae.
        </div>
        <div className="row-span-2 row-start-4 bg-red-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
          doloremque incidunt cumque pariatur labore excepturi doloribus, quis,
          impedit quisquam molestias praesentium? Nisi officiis aut est tempora
          incidunt vitae sed repudiandae.
        </div>
        <div className="col-span-3 row-span-2 row-start-4 bg-fuchsia-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
          doloremque incidunt cumque pariatur labore excepturi doloribus, quis,
          impedit quisquam molestias praesentium? Nisi officiis aut est tempora
          incidunt vitae sed repudiandae.
        </div>
      </div>
    </>
  );
}

export default App;
