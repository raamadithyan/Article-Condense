import {useState,useEffect} from 'react';
import { copy, linkIcon,loader,tick } from './assets';
export default function Demo() {
	const[article,setArticle]=useState({
		url:"",
		summary:""
	})

	async function handleSubmit(){
		alert("submitted")
	}
return (
 <section className='mt-8 w-full max-w-xl'>
 <div className=' flex flex-col w-full gap-2'>
 	
 	<form 
 	className=
 	"relative flex justify-center it2ems-center " 
 	onSubmit={handleSubmit}
 	action="">
 	<img src={linkIcon} alt="link_icon"
className='absolute left-0 my-2 ml-3 w-5'
 	/>

 	<input type="url"
 	  placeholder='Enter a url'
 	  value={article.url}
 	  onChange={(e)=> setArticle({...article,url:e.target.value})}
 	  required
 	  className='url_input peer'
 	 />
 	<button type='submit'
 	 className="submit_btn peer-focus:border-gray-400 peer-focus:text-green-400">
 		↵
 	</button>

 	</form>
 </div>
</section>
);
}