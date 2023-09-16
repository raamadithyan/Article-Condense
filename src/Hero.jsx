import {logo} from './assets';

export default function Hero() {
return (
 <header className="w-full flex flex-col justify-center items-center px-4 py-4 md:px-12">
   <nav className="flex justify-between w-full  pb-4 md:pb-12 ">
<img src={logo} alt=""/>
<button type="button"
onClick={()=>{window.open('https://github.com/raamadithyan')}}
className="bg-black text-white px-4 rounded-lg"
>Github</button>
</nav>
<h1 className="head_text">AI Summerizer<br className="max-sm:hidden"/>
<span className="orange_gradient head_text"> with Chat GPT-4</span></h1>
<h2 className='desc'>Effortless Insights: Unleash the Power of AI for Instant Clarity! </h2>

</header>
);
}