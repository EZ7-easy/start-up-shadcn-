import { Button } from '@/components/ui/button'
import { IoLogoJavascript } from 'react-icons/io'
import { VscDebugStart } from 'react-icons/vsc'

const Hero = () => {
    return (
      <div className={"mt-10 w-[90%] md:flex md:justify-between max-w-4xl mx-auto lg:p-15 p-5 py-[70px] md:space-x-10 grid-cols-1 lg:grid-cols-2 gap-3 border-2 shadow"}>
        <div className={"gap-3 space-y-5"}>
          <p className={"text-4xl"}>Find A Perfect Online Course</p>
          <h1>You can access 7900+ different courses from 600 professional trainers for free</h1>
          <div className={"grid md:grid-cols-2 grid-cols-1 md:space-x-2 max-md:space-y-2"}>
            <Button className={"justify-center py-[30px] w-full xl:text-lg lg:text-md text-sm"}>
              Start Learning
              <VscDebugStart className={'ml-1'}/>
            </Button>
            <Button className={" justify-center py-[30px] w-full xl:text-lg lg:text-md text-sm border-blue-400 text-blue-400"} variant={"outline"}>
              Become Instructor
            </Button>
          </div>
        </div>
        <IoLogoJavascript className={"w-[270px] h-[250px] max-sm:mt-4 bg-amber-300 rounded-2xl opacity-70 flex mx-auto"}/>
      </div>

    );
};

export default Hero;
