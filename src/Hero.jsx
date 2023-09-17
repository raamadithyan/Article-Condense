import {logo} from './assets';
import { BsFileText } from "@react-icons/all-files/bs/BsFileText"
export default function Hero() {
return (
 <header className="w-full flex flex-col justify-center items-center px-4 py-4 md:px-12">

   <nav className="flex justify-between w-full  pb-4 md:pb-12 ">
<BsFileText size={42}  className=""/> 
<button type="button"
onClick={()=>{window.open('https://github.com/raamadithyan/Article-Condense')}}
className="bg-none text-black font-medium px-4 border-2 border-black rounded-lg"
>Github</button>
</nav>
<BsFileText size={88}  className=''/> 

<h1 className="head_text">Article Condense <br className="max-sm:hidden"/>
<span className="orange_gradient head_text"> with AI</span></h1>
<h2 className='desc'>Effortless Insights: Unleash the Power of AI for Instant Clarity! </h2>

</header>
);
}