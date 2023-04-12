import { useState } from "react";
import { type Combo } from "~/pages";

interface Response {
  allcombos: Combo[];
  newComboList: Combo[];
}

interface Options {
  stage: string;
  characterPicked: string;
  charactersAgainst: string;
  minHits?: number;
  slippiSource: string;
}

export const InputForm = ({
  setCombos,
}: {
  setCombos: (combos: Combo[]) => void;
}) => {
  const [options, setOptions] = useState<Options>({
    stage: "",
    characterPicked: "",
    charactersAgainst: "",
    slippiSource: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptions((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitOptions = () => {
    fetch(
      `http://127.0.0.1:5000/${options.stage}/${options.characterPicked}/${
        options.charactersAgainst
      }/${options.minHits as number}/${options.slippiSource}`
    )
      .then((res) => res.json())
      .then((data: Response) => {
        console.log(data);
        setCombos(data.allcombos);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="mt-8 grid place-items-center gap-4">
        <input
          className="rounded border border-sky-500 p-1 px-2 text-center"
          name="stage"
          placeholder="Stage"
          value={options.stage}
          onChange={handleChange}
          required
        />
        <input
          className="rounded border border-sky-500 p-1 text-center"
          name="characterPicked"
          placeholder="Your Character"
          value={options.characterPicked}
          onChange={handleChange}
          required
        />
        <input
          className="rounded border border-sky-500 p-1 px-2 text-center"
          name="charactersAgainst"
          placeholder="Characters Against"
          value={options.charactersAgainst}
          onChange={handleChange}
          required
        />
        <input
          className="rounded border border-sky-500 p-1 px-2 text-center"
          name="minHits"
          placeholder="Min Hits"
          value={options.minHits}
          onChange={handleChange}
          required
        />
        <input
          className="rounded border border-sky-500 p-1 px-2 text-center"
          name="slippiSource"
          placeholder="Slippi Source"
          value={options.slippiSource}
          onChange={handleChange}
          required
        />
        <button
          className="rounded border border-sky-500 p-1 px-2 text-center"
          type="button"
          onClick={submitOptions}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default InputForm;
