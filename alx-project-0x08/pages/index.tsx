import ImageCard from "@/components/common/ImageCard";
import { ImageProps } from "@/interfaces";
import { useState } from "react";

// Functional component for the Home page
const Home: React.FC = () => {
  // State to hold the user's input prompt for image generation
  const [prompt, setPrompt] = useState<string>("");

  // State to hold the generated image URL
  const [imageUrl, setImageUrl] = useState<string>("");

  // State to keep track of multiple generated images (if supported in the future)
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);

  // State to track if the app is currently generating an image
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to handle image generation (expected to call an API or service)
  const handleGenerateImage = async () => {
    console.log("Generating Images");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* Header Section */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2 text-slate-300">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>

        {/* Input Section */}
        <div className="w-full max-w-md">
          {/* Input field for the user to provide a prompt */}
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />

          {/* Button to trigger image generation */}
          <button
            onClick={handleGenerateImage}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {isLoading ? "Loading..." : "Generate Image"}
          </button>
        </div>

        {/* Display the generated image, if any */}
        {imageUrl && (
          <ImageCard
            action={() => setImageUrl(imageUrl)} // Action for handling the image card (e.g., removing or refreshing the image)
            imageUrl={imageUrl} // URL of the generated image
            prompt={prompt} // Prompt used for generating the image
          />
        )}
      </div>
    </div>
  );
};

export default Home;
