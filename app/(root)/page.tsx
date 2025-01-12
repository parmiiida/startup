import SearchForm from "@/app/components/SearchForm";

export default async function Home({ searchParams }: { searchParams: Promise<{query: string}> }) {

  const query =(await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className= "heading">Pitch your startup , connect with Entreprenreneurs<br/>and get your first customer </h1>

        <p className="sub-heading !max-w-3xl">
          Submit ideas , Vote on Pitches , and Get Noticed in Vertus
        </p>
        <SearchForm query={query}/>
      </section>
    </>

  );
}
