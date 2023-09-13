import Counter from "@/components/counter/Counter";
import Questions from "@/components/questions/Questions";
import Statistic from "@/components/statistic/Statistic";
import Visualizer from "@/components/visualizer/Visualizer";

export default function Home() {
  return (
    <>
      <Counter />
      <Statistic />
      <Visualizer />
      <Questions />
    </>
  );
}
