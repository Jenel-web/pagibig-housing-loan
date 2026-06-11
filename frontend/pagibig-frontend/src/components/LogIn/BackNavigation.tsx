import { Link } from "react-router-dom";

export function BackNavigation() {
  return (
    <div className="flex items-center gap-3 self-center mt-8 w-full max-w-[500px] px-4 text-lg font-semibold text-[#112C44] max-md:mt-6">
      {/* Back Arrow Icon */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/41c9ebe072a8260df910252382eacdb793f9c312?placeholderIfAbsent=true&apiKey=3fa53aa5a1cc472db90f2682b3fad13a"
        alt="Back arrow"
        className="object-contain shrink-0 aspect-[0.88] w-[18px]"
      />

      {/* Functional Router Link */}
      <Link to="/" className="hover:underline transition-all">
        Go back to home
      </Link>
    </div>
  );
}
