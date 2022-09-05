import { FC, PropsWithChildren } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main className="flex items-center justify-center h-screen w-full bg-gray-100">
        {children}
      </main>
      <footer>
        <a
          aria-label="Contect me!"
          title="📩 Contact me by email!"
          href="mailto:contact@adriancoll.dev"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            color: "#A9A9A9",
          }}
          className="text-center cursor-pointer absolute bg-transparent bottom-1"
        >
          created by <span className="font-bold">@adriancoll 💻</span> -
          devChallenges.io
        </a>
      </footer>
    </>
  );
};
