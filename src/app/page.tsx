import VotingSessionForm from "@/components/forms/VotingSessionForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      Hello
      <VotingSessionForm />
    </main>
  );
}
