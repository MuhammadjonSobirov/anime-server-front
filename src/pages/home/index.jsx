import Render from "../../components/Render"
import useGetData from "../../components/UseFetchData"
import Loader from "../../components/loader"
const Home = () => {
    const {data, loading, error} = useGetData('/animes')
    if (loading) {
        return <div><Loader/></div>
    }
    if (error) {
        return <div>Error</div>
    }
    console.log(data);
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">Contents</h1>
            <Render data={data} error={error} loading={loading}/>
        </div>
    )
}

export default Home