import {projects} from '../../content';
let cached: {data:unknown;at:number}|null=null;
export async function GET(){
 if(cached&&Date.now()-cached.at<21600000)return Response.json(cached.data,{headers:{'Cache-Control':'public, max-age=3600'}});
 try{
 const response=await fetch('https://api.github.com/users/HarshithNair/repos?per_page=100',{headers:{Accept:'application/vnd.github+json','User-Agent':'Harshith-Garage-Portfolio'},signal:AbortSignal.timeout(5000)});
 if(!response.ok)throw new Error('GitHub unavailable');
 const repos=await response.json();
 if(!Array.isArray(repos))throw new Error('Invalid response');
 const data=repos.filter((r:any)=>!r.fork&&projects.some(p=>p.repo===r.name)).map((r:any)=>({name:r.name,language:r.language,updated_at:r.updated_at,html_url:r.html_url}));
 cached={data,at:Date.now()};return Response.json(data,{headers:{'Cache-Control':'public, max-age=3600, stale-while-revalidate=21600'}});
 }catch{return Response.json([],{headers:{'Cache-Control':'public, max-age=300'}})}
}
