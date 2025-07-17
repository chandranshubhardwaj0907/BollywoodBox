import Link from "next/link";
import { FaStar, FaComment } from "react-icons/fa";

export default function Dashboard() {
  const movies = [
    {
      id: "1",
      title: "3 Idiots",
      comments: 152,
      rating: 4.8,
      description: "A story of three engineering students navigating life and friendship.",
    },
    {
      id: "2",
      title: "Dangal",
      comments: 132,
      rating: 4.7,
      description: "A biographical sports drama based on the Phogat family.",
    },
    {
      id: "3",
      title: "Lagaan",
      comments: 110,
      rating: 4.6,
      description: "Villagers challenge the British to a cricket match to avoid tax.",
    },
    {
      id: "4",
      title: "Bahubali",
      comments: 245,
      rating: 4.9,
      description: "An epic tale of war, betrayal, and royalty in Mahishmati.",
    },
    {
      id: "5",
      title: "Swades",
      comments: 90,
      rating: 4.5,
      description: "A NASA scientist returns to India to bring positive change.",
    },
    {
      id: "6",
      title: "Chak De! India",
      comments: 105,
      rating: 4.6,
      description: "A disgraced coach trains the women's hockey team to victory.",
    },
    {
      id: "7",
      title: "PK",
      comments: 140,
      rating: 4.4,
      description: "An alien on Earth explores human beliefs and misunderstandings.",
    },
    {
      id: "8",
      title: "Barfi!",
      comments: 118,
      rating: 4.3,
      description: "A heartfelt story of love, silence, and acceptance.",
    },
    {
      id: "9",
      title: "Taare Zameen Par",
      comments: 160,
      rating: 4.9,
      description: "A teacher helps a dyslexic child realize his true potential.",
    },
    {
      id: "10",
      title: "Zindagi Na Milegi Dobara",
      comments: 123,
      rating: 4.6,
      description: "Three friends rediscover themselves during a trip across Spain.",
    },
    {
      id: "11",
      title: "Shershaah",
      comments: 134,
      rating: 4.7,
      description: "Biopic of brave Indian soldier Captain Vikram Batra.",
    },
    {
      id: "12",
      title: "Kantara",
      comments: 148,
      rating: 4.8,
      description: "A divine folklore tale rooted in local traditions.",
    },
  ];

  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movie) => sum + movie.comments, 0);
  const averageRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length
  ).toFixed(1);

  return (
    <div className="p-8 space-y-10 bg-gradient-to-br from-yellow-50 to-white min-h-screen">
      {/* Dashboard Header */}
      <div className="bg-white border border-yellow-200 p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          🎬 Indian Movie Dashboard
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-800">
          <div className="bg-yellow-100 p-5 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Movies</p>
            <p className="text-3xl font-bold">{totalMovies}</p>
          </div>
          <div className="bg-yellow-100 p-5 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Comments</p>
            <p className="text-3xl font-bold">{totalComments}</p>
          </div>
          <div className="bg-yellow-100 p-5 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Avg Rating</p>
            <p className="text-3xl font-bold">{averageRating} / 5</p>
          </div>
        </div>
      </div>

      {/* Movie List */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Movie List</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <li
              key={movie.id}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Link
                href={`/movies/${movie.id}`}
                className="text-xl font-semibold text-indigo-600 hover:underline"
              >
                {movie.title}
              </Link>
              <p className="text-gray-600 text-sm mt-2">{movie.description}</p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <FaComment className="mr-2" />
                  <span>{movie.comments}</span>
                </div>
                <div className="flex items-center text-sm text-yellow-500">
                  <FaStar className="mr-2" />
                  <span>{movie.rating}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
