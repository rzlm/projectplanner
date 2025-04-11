import Project from "../components/project";
import NewProject from "../components/newProject";
export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <div>
        Project Plan
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-4xl w-full p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <NewProject />
          </div>
        </div>
      </div>
      {/* Footer */}

      {/* <footer className="flex justify-center items-center h-16 bg-gray-800 text-white">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full mr-2"
          />
          <span className="text-lg font-bold">Project Plan</span>
        </div>
    </footer> */}

    </div>
  );
}
