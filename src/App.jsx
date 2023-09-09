const stats = [
  {
    value: "10K+",
    description: "companies",
  },
  {
    value: "314",
    description: "templates",
  },
  {
    value: "12M+",
    description: "queries",
  },
];
const App = () => {
  return (
    // outer div
    <div className="h-full w-full bg-primary-600 text-gray flex items-center">
      {
        // container
      }
      <div className="h-[48.75rem] w-[20.4375rem] md:h-[27.875rem] md:w-[69.375rem] mx-auto flex flex-col md:flex-row-reverse items-center bg-primary-500 rounded-[.5rem]">
      {
        // image
      }  
      <div className="relative bg-hero-pattern md:bg-hero-pattern-desktop h-[15rem] w-[20.4375rem] md:h-full md:w-[33.75rem] bg-cover rounded-tl-[.5rem] rounded-tr-[.5rem] md:rounded-tl-none md:rounded-br-[.5rem] ">
      {
        // transparent background, I have used absolute position to place the background on top of image. 
      }    
      <div className="rounded-tl-[.5rem] rounded-tr-[.5rem] md:rounded-tl-none md:rounded-br-[.5rem]  bg-secondary-500 absolute top-0 left-0 right-0 bottom-0 bg-opacity-60"></div>
        </div>

        {
          // description container 
        }
        <div className="text-center md:text-left md:w-[25.375rem] md:mx-auto">
        {
          // heading
        }  
        <h1 className="text-[28px] leading-8 md:text-4xl font-bold text-white mt-[2.5rem] px-[1.875rem] md:px-0">
            Get <span className="text-secondary-500">insights</span> that help
            your business grow.
          </h1>
          {
            // description text
          }
          <p className="text-[.9375rem] opacity-75 w-[16.5rem] md:w-[23.375rem] mx-auto md:mx-0 mt-[1rem] md:mt-[1.5625rem]">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          {
            // stats container 
          }
          <div className="mt-[2.5rem] md:mt-[4.5rem] flex flex-col md:flex-row gap-[1.5rem] md:gap-[3.9375rem]">
            {stats.map((stat) => (
              <div key={stat.value}>
                <p className="font-bold text-2xl text-white">{stat.value}</p>
                <p className="uppercase text-xs font-lexendDeca">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
