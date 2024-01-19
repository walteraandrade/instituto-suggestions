import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from "@apollo/client";
import { insertSuggestion } from "../data/schema/mutation/insert-suggestion";

type FormData = {
  name: string;
  image: string;
  suggestion: string;
  suggested_by: string;
};

export const CreateNewSuggestion = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    image: "",
    suggestion: "",
    suggested_by: "",
  });

  const [insertSuggestionMutation, { error }] = useMutation(insertSuggestion);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.image ||
      !formData.suggestion ||
      !formData.suggested_by
    ) {
      console.error("Please fill in all fields");
      return;
    }

    const newId = uuidv4();

    insertSuggestionMutation({
      variables: {
        object: {
          id: newId,
          author: formData?.name,
          name: formData?.name,
          image: formData?.image,
          link: formData?.suggestion,
          suggested_by: formData?.suggested_by,
        },
      },
    });
  };

  return (
    <div className="max-w-lg">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-1 border-black rounded"
            required
          />
        </div>
        <div className="mt-4" />
        <div className="flex gap-2">
          <label htmlFor="image">Link para a imagem</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border border-1 border-black rounded"
            required
          />
        </div>
        <div className="mt-4" />
        <div className="flex gap-2">
          <label htmlFor="suggestion">Link para a sugestão</label>
          <input
            type="text"
            name="suggestion"
            value={formData.suggestion}
            onChange={handleChange}
            className="border border-1 border-black rounded"
            required
          />
        </div>
        <div className="mt-4" />
        <div className="flex gap-2">
          <label htmlFor="suggested_By">Sugestão de: </label>
          <input
            type="text"
            name="suggested_by"
            value={formData.suggested_by}
            onChange={handleChange}
            className="border border-1 border-black rounded"
            required
          />
        </div>
        <div className="mt-4" />
        <button
          type="submit"
          className="bg-cyan-800 px-4 py-2 rounded w-full text-white font-bold"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
