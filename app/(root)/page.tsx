import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{query: string}> }) {

  const query =(await searchParams).query;

  const posts = [
    { _createdAt: new Date(),
    views: 55 ,
    author:{_id: 1},
    _id: 1,
    description : "This is a description",
    image: "https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg?w=360",
    category: "Robots",
    title: "We robot",
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className= "heading">Pitch your startup , connect with Entreprenreneurs<br/>and get your first customer </h1>

        <p className="sub-heading !max-w-3xl">
          Submit ideas , Vote on Pitches , and Get Noticed in Vertus
        </p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post : StartupCardType, index : number) => (
              <StartupCard key={post?.id} post={post}/>
          ))) : (<p className="no-results">No Startups found</p>)}
        </ul>
      </section>
    </>

  );
}
