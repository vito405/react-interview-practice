import useFetch from "./useFetch"



export default function UseFetchHookTest() {
    const { data, error, pending } = useFetch('https://dummyjson.com/products', {})


    console.log(error, data, pending)

    return <div>
        <h1>Use fetch Hook</h1>
        {pending ? <h3>Pending ! Please Wait</h3> : null}
        {error ? <h3>there was a error: {error}</h3> : null}
        {
            data && data.products && data.products.length ?
                data.products.map(productsItem => <p key={productsItem.key}>{productsItem.title}</p>) : null
        }
    </div>
}