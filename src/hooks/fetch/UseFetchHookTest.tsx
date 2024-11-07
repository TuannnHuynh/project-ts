import useFetch from "./useFetch";

type TData = {
  title: string;
  id: number;
};

type ProductsResponse = {
  products: TData[];
};

const UseFetchHookTest = () => {
  const { data, error, pending } = useFetch<ProductsResponse>(
    "https://dummyjson.com/products",
    {},
  );

  return (
    <div>
      <h2>Use Fetch Hook</h2>
      {pending ? <h3>Pending! Please wait</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products.length > 0
        ? data.products.map((val: TData) => <p key={val.id}>{val.title}</p>)
        : null}
    </div>
  );
};

export default UseFetchHookTest;
