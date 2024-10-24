import { useState } from "react";
import { request } from "../../utils/api/animeData";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  
  // Epizodlar uchun input maydonlarini saqlovchi array
  let [episodeInputs, setEpisodeInputs] = useState([]); 

  // Yangi post uchun barcha ma'lumotlarni saqlovchi state
  let [newPost, setNewPost] = useState({
    name: '',
    about: '',
    image: '',
    episodes: '',
    season: '',
    url: '',
    episode_numbers: [] // Har bir epizodning qiymatini saqlash uchun array
  });

  // Forma to'ldirilganligini tekshirish
  const isFormValid = newPost.name && newPost.about && newPost.image && newPost.episodes && newPost.season && newPost.url;

  // Seriyalar soni o'zgarishini boshqaruvchi funksiya
  const handleEpisodeChange = (e) => {
    const episodeCount = e.target.value;
    setNewPost({ ...newPost, episodes: episodeCount });
    
    // Har bir epizod uchun bo'sh inputlar yaratish
    const episodesArray = Array.from({ length: episodeCount }, () => "");
    setEpisodeInputs(episodesArray); // Epizod inputlarini o'rnatish
  };

  // Har bir epizod raqamini boshqarish uchun funksiya
  const handleEpisodeNumberChange = (index, value) => {
    const updatedEpisodes = [...episodeInputs];
    updatedEpisodes[index] = value; // Aniq epizod qiymatini yangilash
    setEpisodeInputs(updatedEpisodes);
    setNewPost({ ...newPost, episode_numbers: updatedEpisodes });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await request({
        method: 'post',
        url: '/animes',
        data: {
          name: newPost.name,
          about: newPost.about,
          img: newPost.image,
          episode_count: newPost.episodes,
          episodes: newPost.episode_numbers, // Epizod raqamlarini yuborish
          season: newPost.season,
          url: newPost.url,
          id: Date.now(),
        }
      });
      console.log("Yangi post jo'natildi: ", newPost);
      navigate(`/`);
    } catch (error) {
      console.error("Xatolik yuz berdi: ", error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">Post tarkibi</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        {/* Nomi */}
        <input
          value={newPost.name}
          onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
          className="my-2 border border-black w-[200px] rounded-md p-3"
          type="text"
          placeholder="Nomi"
        />
        {/* Ma'lumoti */}
        <input
          value={newPost.about}
          onChange={(e) => setNewPost({ ...newPost, about: e.target.value })}
          className="my-2 border border-black w-[200px] rounded-md p-3"
          type="text"
          placeholder="Ma'lumot"
        />
        {/* Rasm URL */}
        <input
          value={newPost.image}
          onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
          className="my-2 border border-black w-[200px] rounded-md p-3"
          type="text"
          placeholder="Rasm URL"
        />
        {/* Seriyalar soni */}
        <input
          value={newPost.episodes}
          onChange={handleEpisodeChange}
          className="my-2 border border-black w-[200px] rounded-md p-3"
          type="number"
          placeholder="Seriyalar soni"
        />
        {/* Dinamik epizod inputlari */}
        {episodeInputs.map((episode, index) => (
          <input
            key={index}
            value={episode}
            onChange={(e) => handleEpisodeNumberChange(index, e.target.value)}
            className="my-2 border border-black w-[200px] rounded-md p-3"
            type="text"
            placeholder={`Epizod ${index + 1} raqami`}
          />
        ))}
        {/* Mavsum soni */}
        <input
          value={newPost.season}
          onChange={(e) => setNewPost({ ...newPost, season: e.target.value })}
          className="my-2 border border-black w-[200px] rounded-md p-3"
          type="number"
          placeholder="Mavsum soni"
        />
        {/* URL */}
        <input
          value={newPost.url}
          onChange={(e) => setNewPost({ ...newPost, url: e.target.value })}
          className="my-2 border border-black w-[200px] rounded-md p-3"
          type="text"
          placeholder="Animega link"
        />
        <button
          type="submit"
          className="my-2 border bg-blue-500 hover:bg-blue-700 text-white border-black w-[200px] rounded-md p-3"
          disabled={!isFormValid}
        >
          Jonatish
        </button>
      </form>
    </div>
  );
};

export default Post;
