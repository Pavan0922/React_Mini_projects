import { useState, useRef } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const formRef = useRef(null);

  function preventDefault(event) {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const newIngredient = formData.get('Ingredient');
    setIngredients([...ingredients, newIngredient]);
    formRef.current.reset();
  }
  return (
    <>
      <form
        ref={formRef}
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
      >
        <input
          type="text"
          placeholder="Enter your ingredient"
          name="Ingredient"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          onClick={preventDefault}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Ingredient
        </button>
      </form>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </>
  );
}