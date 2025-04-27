import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <nav className="mb-8 flex justify-center">
        <Link to="/" className="text-blue-400 hover:underline font-semibold text-lg">← Calculator</Link>
      </nav>
      <h1 className="text-2xl font-bold text-center underline mb-8">OUR TEAM</h1>
      <div className="mb-6">
        <span className="font-bold underline">CONCEPTION / DESIGN:</span>
        <span> Pam Lee, Hugh Gordon, Chaynor Hsiao, Gary Fong</span>
      </div>
      <div className="mb-6">
        <span className="font-bold underline">DATA COLLECTION:</span>
        <span> Gary Fong, Misty Vu, Tien Dinh, Marina Nguyen, Pam Lee, Sean Oh, Grace Lee</span>
      </div>
      <div className="mb-6">
        <span className="font-bold underline">CODING STUFF:</span>
        <span> Hugh Gordon, Herbert Lee, Chaynor Hsiao</span>
      </div>
    </div>
  );
} 