import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  wrapperClassName?: string;
  animated?: boolean;
}

export const MainLayout: FC<Props> = ({
  children,
  wrapperClassName = "",
  animated = true,
}) => {
  return (
    <>
      <main className="flex relative items-center justify-center h-screen w-full bg-gray-100">
        <div
          style={{
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            lineHeight: "27px",
            color: "#4F4F4F",
          }}
          className={`px-8 relative min-w-[340px] max-w-[500px] py-9 bg-white flex flex-col rounded-xl justify-between gap-6 ${wrapperClassName} ${
            animated ? "animate-fade-in-up" : ""
          }`}
        >
          {children}
        </div>
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
