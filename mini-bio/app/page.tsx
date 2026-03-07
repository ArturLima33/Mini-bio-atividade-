import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">

      <main className="flex flex-col items-center gap-6 text-center bg-white dark:bg-black p-10 rounded-xl shadow-md">

        <Image
          src="/foto.jpeg"
          alt="Minha foto"
          width={200}
          height={200}
          className="rounded-full"
        />

        <h1 className="text-3xl font-bold">
          Artur Bacalhau
        </h1>

        <p className="max-w-[500px] mx-auto text-center leading-relaxed text-zinc-700 dark:text-zinc-300">
          Olá! Meu nome é Artur Bacalhau
          e sou estudante de Ciência da Computação.
          Tenho curiosidade em aprender cada vez mais
          sobre programação e explorar
          como diferentes tecnologias
          podem ser usadas para
          criar coisas novas.
        </p>

      </main>

    </div>
  );
}