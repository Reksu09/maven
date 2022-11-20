import React from "react";

function LandingPage() {
  return (
    <div>
      <div className="text-primary-content w-full h-[100vh] flex sm:justify-center md:justify-center lg:justify-start items-center" style={{backgroundImage: "linear-gradient(120deg, hsl(var(--p)) -5%, hsl(var(--s)) 100%)"}}>
        <div className="h-[12em] w-[25em] m-10 text-3xl flex flex-col justify-around pb-20">
          <div className="mb-10">
            <h1 className="text-5xl text-center sm:text-center lg:text-left sm:text-5xl md:text-6xl lg:text-7xl mb-3 font-semibold">TEST WHAT YOU REVIEWED</h1>
            <h3 className="text-lg text-center sm:text-center lg:text-left sm:text-lg md:text-xl lg:text-2xl font-semibold">“Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will spend its whole life believing that it is stupid.” <span className="text-sm">— Albert Einstein</span></h3>
          </div>
          <div className="w-full flex justify-center lg:justify-start">
              <a href="/about" className="btn mr-3 glass btn-primary md:btn-md lg:btn-lg">About</a>
              <a href="/subjects" className="btn md:btn-md lg:btn-lg">Continue</a>
          </div>
        </div>
        <div className="mockup-phone border-primary hidden md:hidden sm:hidden lg:block">
          <div className="camera"></div> 
          <div className="display">
            <div className="artboard artboard-demo phone-1 bg-accent hover:bg-accent glass">
              <div className="mockup-code m-8">
                <pre data-prefix="❤">
                    <code>Who am I?</code><br />
                </pre>
                <pre className='mt-4'>
                    <input type="text" placeholder="Answer" className="input input-ghost input-md" />
                </pre>
              </div>
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
