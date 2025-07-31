"use client";

// import { useGetRequestsQuery } from "@/features/api/apiSlice";

export default function Home() {
  // const { data, error, isLoading } = useGetRequestsQuery();

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error fetching data</p>;

  return (
    <main>
      <h1>Startup Funding Requests</h1>
      {/* <ul>
        {data?.map((item) => (
          <li key={item._id}>{item.startupName}</li>
        ))}
      </ul> */}
    </main>
  );
}
