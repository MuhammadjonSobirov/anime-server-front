import { useNavigate } from "react-router-dom"

const Render = ({ data = [] }) => {
    const navigate = useNavigate()
    return (
        <div className="container  mx-auto">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {
                    typeof data === 'object' && data.length > 0 && data.map((item) => {
                        return (
                            <li key={item.id} className="w-full max-w-sm bg-white border p-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110 hover: duration-300 hover:shadow-xl hover:shadow-blue-300">
                                <div className="flex flex-col items-center pb-10">
                                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={item.img} alt="Bonnie image" />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.name}</h5>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.season} Season {item.episode_count} Seria</p>
                                    <div className="flex mt-4 md:mt-6">
                                        <button onClick={() => navigate(`/edit/${item.id}`)} className="inline-flex items-center px-20 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Render