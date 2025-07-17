import Link from "next/link";

export default function MoviesPage() {
  const movies = [
    { id: "1", title: "3 Idiots" },
    { id: "2", title: "Dangal" },
    { id: "3", title: "Lagaan" },
    { id: "4", title: "Bahubali" },
    { id: "5", title: "Swades" },
    { id: "6", title: "Chak De! India" },
    { id: "7", title: "PK" },
    { id: "8", title: "Barfi!" },
    { id: "9", title: "Taare Zameen Par" },
    { id: "10", title: "ZNMD" },
    { id: "11", title: "Shershaah" },
    { id: "12", title: "Kantara" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white p-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          🎥 Indian Movies List
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <li
              key={movie.id}
              className="bg-white border border-gray-200 p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <Link
                href={`/movies/${movie.id}`}
                className="text-lg font-semibold text-indigo-600 hover:text-indigo-800"
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
