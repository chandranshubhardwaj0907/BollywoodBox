import { FaStar } from "react-icons/fa";

interface MovieProps {
  params: {
    id: string;
  };
}

export default function MovieDetails({ params }: MovieProps) {
  const movies = [
    {
      id: "1",
      title: "3 Idiots",
      comments: 178,
      rating: 4.9,
      description: "A heartwarming story about friendship, education, and life.",
      commentsList: ["Inspiring!", "Must-watch for every student.", "Perfect blend of comedy and message."],
    },
    {
      id: "2",
      title: "Dangal",
      comments: 150,
      rating: 4.8,
      description: "A powerful sports drama based on true events.",
      commentsList: ["Goosebumps!", "Aamir Khan nailed it.", "Great direction and performance."],
    },
    {
      id: "3",
      title: "Lagaan",
      comments: 200,
      rating: 4.7,
      description: "An epic tale set in British India revolving around cricket and pride.",
      commentsList: ["Epic storyline.", "Loved the patriotism.", "A cinematic gem."],
    },
    {
      id: "4",
      title: "Bahubali",
      comments: 230,
      rating: 4.6,
      description: "A grand visual spectacle of war, dynasty, and sacrifice.",
      commentsList: ["Why did Kattappa kill Bahubali?", "Blockbuster!", "Loved the VFX and scale."],
    },
    {
      id: "5",
      title: "Chak De! India",
      comments: 145,
      rating: 4.8,
      description: "A tale of redemption and women's empowerment through hockey.",
      commentsList: ["Emotional and motivating.", "SRK was brilliant.", "Team spirit at its best!"],
    },
    {
      id: "6",
      title: "Shershaah",
      comments: 120,
      rating: 4.5,
      description: "A tribute to Captain Vikram Batra’s bravery and patriotism.",
      commentsList: ["Emotional rollercoaster.", "Very inspiring!", "True hero."],
    },
    {
      id: "7",
      title: "Zindagi Na Milegi Dobara",
      comments: 160,
      rating: 4.6,
      description: "A journey of friendship, freedom, and self-discovery.",
      commentsList: ["Vibes!", "Bucket list movie.", "Spain scenes were lit!"],
    },
    {
      id: "8",
      title: "Piku",
      comments: 105,
      rating: 4.3,
      description: "A quirky yet emotional story of a father-daughter bond.",
      commentsList: ["Deep and touching.", "Beautifully acted.", "So relatable."],
    },
    {
      id: "9",
      title: "Barfi!",
      comments: 140,
      rating: 4.6,
      description: "A silent love story that speaks volumes.",
      commentsList: ["Ranbir was fantastic!", "Heart-melting story.", "Pure cinema."],
    },
    {
      id: "10",
      title: "Swades",
      comments: 130,
      rating: 4.7,
      description: "A thoughtful journey back to one's roots and responsibility.",
      commentsList: ["Goosebumps!", "Still relevant.", "Great message."],
    },
    {
      id: "11",
      title: "Queen",
      comments: 110,
      rating: 4.5,
      description: "A solo honeymoon that became a story of self-worth.",
      commentsList: ["Empowering!", "Kangana was brilliant.", "Pure confidence booster."],
    },
    {
      id: "12",
      title: "Gully Boy",
      comments: 190,
      rating: 4.6,
      description: "An underdog rapper rises against all odds.",
      commentsList: ["Apna Time Aayega!", "Very raw and real.", "Loved the vibe."],
    },
  ];

  const movie = movies.find((movie) => movie.id === params.id);

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-white mb-4">{movie?.title}</h2>
        <p className="text-lg text-gray-200">{movie?.description}</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xl text-gray-300">Rating:</p>
            <div className="flex items-center text-yellow-400">
              <FaStar className="mr-1" />
              <span className="text-2xl font-bold">{movie?.rating}</span> / 5
            </div>
          </div>
          <div>
            <p className="text-xl text-gray-300">Comments:</p>
            <p className="text-2xl font-semibold text-white">{movie?.comments} comments</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-white mb-4">Comments</h3>
        <ul className="space-y-4">
          {movie?.commentsList.map((comment, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-300">{comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
