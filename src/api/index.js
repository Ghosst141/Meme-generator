export const getMemes=async()=>{
    const memes= await fetch("https://api.imgflip.com/get_memes");
    return  await memes.json();
}