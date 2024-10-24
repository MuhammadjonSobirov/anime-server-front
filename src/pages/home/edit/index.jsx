import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/loader";
import useGetData from "../../../components/UseFetchData";
import { request } from "../../../utils/api/animeData";
import { FiEdit } from "react-icons/fi";
import { useEffect, useState } from "react";

const EditData = () => {
  const [ticket, setTicket] = useState({ img: false, name: false, season: false, episode_count: false, about: false, url: false });
  const { id } = useParams();
  const navigate = useNavigate();
  const { data = {}, loading, error } = useGetData(`/animes/${id}`);
  const [value, setValue] = useState({});

  useEffect(() => {
    if (data) {
      setValue(data);
    }
  }, [data]);

  if (loading) {
    return <div><Loader /></div>;
  }
  if (error) {
    return <div>Xato yuz berdi</div>;
  }

  const handleDelete = async () => {
    try {
      await request.delete(`/animes/${id}`);
      navigate('/');
    } catch (error) {
      console.error("Xatolik yuz berdi: ", error);
    }
  };

  const handleSave = async () => {
    try {
      await request.put(`/animes/${id}`, value);
      setTicket({ img: false, name: false, season: false, episode_count: false, about: false, url: false });
    } catch (error) {
      console.error("Ma'lumotlarni yangilashda xato: ", error);
    }
  };

  return (
    <div>
      <div className="w-full max-w-2xl bg-white border p-4 ml-auto mr-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          {/* Rasm */}
          {ticket.img === false ? (
            <div className="flex items-end">
              <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={data?.img} alt={data?.name} />
              <FiEdit onClick={() => setTicket({ ...ticket, img: true })} className="ml-2 text-[black]" />
            </div>
          ) : (
            <div className="flex items-center">
              <input
                type="text"
                value={value.img}
                onChange={(e) => setValue({ ...value, img: e.target.value })}
                className="my-2 border border-black w-[200px] rounded-md p-3"
              />
            </div>
          )}

          {/* Nom */}
          <h5 className="mb-1 flex text-xl font-medium items-center text-gray-900 dark:text-white">
            {ticket.name === false ? (
              <>
                {data?.name}
                <FiEdit onClick={() => setTicket({ ...ticket, name: true })} className="ml-2 text-[black]" />
              </>
            ) : (
              <input
                type="text"
                value={value.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
                className="my-2 border border-black w-[200px] rounded-md p-3"
              />
            )}
          </h5>

          {/* Mavsum */}
          <p className="text-sm flex text-gray-500 dark:text-gray-400">
            {ticket.season === false ? (
              <>
                {data?.season} Mavsum
                <FiEdit onClick={() => setTicket({ ...ticket, season: true })} className="ml-2 text-[black]" />
              </>
            ) : (
              <input
                type="text"
                value={value.season}
                onChange={(e) => setValue({ ...value, season: e.target.value })}
                className="my-2 border border-black w-[200px] rounded-md p-3"
              />
            )}
          </p>

          {/* Seriyalar soni */}
          <p className="text-sm flex text-gray-500 dark:text-gray-400">
            {ticket.episode_count === false ? (
              <>
                {data?.episode_count} Seria
                <FiEdit onClick={() => setTicket({ ...ticket, episode_count: true })} className="ml-2 text-[black]" />
              </>
            ) : (
              <input
                type="text"
                value={value.episode_count}
                onChange={(e) => setValue({ ...value, episode_count: e.target.value })}
                className="my-2 border border-black w-[200px] rounded-md p-3"
              />
            )}
          </p>

          {/* Haqida */}
          <p className="text-sm flex text-gray-500 dark:text-gray-400">
            {ticket.about === false ? (
              <>
                {data?.about}
                <FiEdit onClick={() => setTicket({ ...ticket, about: true })} className="ml-2 text-[black]" />
              </>
            ) : (
              <input
                type="text"
                value={value.about}
                onChange={(e) => setValue({ ...value, about: e.target.value })}
                className="my-2 border border-black w-[200px] rounded-md p-3"
              />
            )}
          </p>

          {/* URL */}
          {ticket.url === false ? (
            <div className="flex">
              <a className="text-sm text-gray-500 dark:text-gray-400" href={data?.url}>{data?.url}</a>
              <FiEdit onClick={() => setTicket({ ...ticket, url: true })} className="ml-2 text-[black]" />
            </div>
          ) : (
            <input
              type="text"
              value={value.url}
              onChange={(e) => setValue({ ...value, url: e.target.value })}
              className="my-2 border border-black w-[200px] rounded-md p-3"
            />
          )}

          <button onClick={handleSave} className="mt-4 inline-flex items-center px-20 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Saqlash
          </button>
          <button onClick={handleDelete} className="mt-4 inline-flex items-center px-20 py-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Ochirish
          </button>
        </div>

        {/* Epizodlar */}
        {data?.episodes?.length > 0 && data.episodes.map((item, index) => (
          <div key={index} className="flex flex-col items-center pb-10 ">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default EditData;
