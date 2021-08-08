export async function postData(url, form){
  const res =await fetch(url, {
      method:'POST',
      headers: {
          'Content-type' : 'application/json'
      },
      body: form
  });
  return await res.json();
}

export async function getResource(url){
  const res = await fetch(url);
  if(!res.ok){
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }
  return await res.json();
}