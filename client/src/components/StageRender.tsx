import { Combo } from "~/pages";

export const StageRender = ({ combos }: { combos: Combo[] }) => {
  if (combos.length === 0) {
    return <></>;
  }
  const stageDims = combos[0]?.stage_dims as number[];
  const scalingFactor = 1;
  const width = Math.floor(
    ((stageDims[0] as number) - (stageDims[2] as number)) * scalingFactor
  );
  const height = Math.floor(
    ((stageDims[1] as number) - (stageDims[3] as number)) * scalingFactor
  );
  const radius = 7.5;
  const movesArr = combos.map((combo) => combo.moves).flat(1);

  return (
    <>
      <div
        className={`mx-auto mt-10 border border-sky-500`}
        style={{ width: `${width}px`, height: `${height}px` }}
        id="stage"
      >
        <div
          className="relative mx-auto border border-sky-500"
          id="main"
          style={{
            transform: `translate(0px, ${stageDims[1] as number}px)`,
            width: "136px",
          }}
        ></div>
        <div
          className="relative mx-auto  border border-sky-500"
          id="leftPlat"
          style={{
            transform: `translate(${-38.8}px, ${
              (stageDims[1] as number) - 27
            }px)`,
            width: "37.6px",
          }}
        ></div>
        <div
          className="relative mx-auto border border-sky-500"
          id="rightPlat"
          style={{
            transform: `translate(${38.8}px, ${
              (stageDims[1] as number) - 27
            }px)`,
            width: "37.6px",
          }}
        ></div>
        <div
          className="relative mx-auto border border-sky-500"
          id="topPlat"
          style={{
            transform: `translate(0px, ${(stageDims[1] as number) - 54}px)`,
            width: "37.6px",
          }}
        ></div>
        {movesArr.map((move, idx) => (
          <div
            key={idx}
            className="mx-auto block border border-red-500"
            style={{
              borderRadius: "50%",
              position: "absolute",
              width: `${radius}px`,
              height: `${radius}px`,
              transform: `translate(${
                (stageDims[0] as number) - radius + move[1].x
              }px, ${(stageDims[1] as number) - radius - move[1].y}px)`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default StageRender;
