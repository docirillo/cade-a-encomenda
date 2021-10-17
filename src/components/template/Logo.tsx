export default function Logo() {
  return (
    <div
      className={`flex flex-col items-center justify-center h-14 w-14 rounded-full bg-white`}
    >
      <div className="flex mt-1 animate-spin">
        <div className="h-3 w-3 rounded-full bg-green-500 mr-0.5 " />
        <div className="h-3 w-3 rounded-full bg-blue-600 ml-0.5" />
      </div>
      <div className="flex mt-0.5 animate-spin">
        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-0.5" />
        <div className="h-3 w-3 rounded-full bg-red-600 ml-0.5" />
      </div>
    </div>
  );
}
