import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { InputForm } from "~/components/InputForm";
import StageRender from "~/components/StageRender";

export interface Combo {
  character: string;
  combodamage: number;
  didkill: boolean;
  drawing: null;
  eframe: number;
  endpercent: number;
  initpercent: number;
  moves: Array<[number, { x: number; y: number }]>;
  port: number;
  sframe: number;
  stage: number;
  stage_dims: number[];
  vs: string;
  text: Array<string>;
}

const Home: NextPage = () => {
  const [combos, setCombos] = useState<Combo[]>([]);

  return (
    <>
      <InputForm setCombos={setCombos} />
      <StageRender combos={combos} />
    </>
  );
};

export default Home;
