import WebSearchResults from "@/components/WebSearchResults";

export default async function WebSearchPage({ searchParams }) {
  const startIndex = searchParams.start || '1';
  await new Promise((resolve)=> setTimeout(resolve, 3000))
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY_2}&cx=${process.env.CONTEXT_KEY_2}&q=${searchParams.search}&start=${startIndex}`)
  // .then((res)=>res.json())
  // .catch((error)=>console.log(error))

  // console.log(response);
  if (!response.ok) {
    throw new Error("Something went wrong")
  }
  
  const data = await response.json();
  const results = data.items

  // console.log(data);
  if (!results) {
    // return 
    console.log("no results found for query");
    return
    <h1>No Results Found <Link href='/'>Go Home</Link> </h1>
  }
  // GET https://www.googleapis.com/customsearch/v1?key=AIzaSyBEyUSUgXLKuIYimM5ifdUa5gbl9Ug_l8A&cx=c6479c67b0628427c&q=lectures

  return (
    <>
      {results && <WebSearchResults results={data} />
      }
    </>
  )
}
