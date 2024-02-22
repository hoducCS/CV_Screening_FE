export default function ResultItem() {
  return (
    <>
      <div className="flex flex-col gap-8 p-10 bg-background rounded-2xl">
        <div className="flex justify-between">
          <p className="font-bold text-primary text-xl">Matching Result</p>
          <p className="font-bold text-gray text-xl">Job Title</p>
        </div>
        <div className="flex gap-16 items-center">
          <div className="flex justify-center items-center h-16 w-16 rounded-full border border-solid border-gray bg-white  text-success font-bold text-lg">
            75%
          </div>
          <p className="font-bold text-gray text-lg">Candidate Name</p>
        </div>
        <ul className="list-inside list-disc grid grid-cols-2 gap-x-20 gap-y-7">
          <li className="text-success font-bold text-lg">Vị trí công việc</li>
          <li  className="text-success font-bold text-lg">Kinh nghiệm</li>
          <li className="text-error font-bold text-lg">Kỹ năng</li>
          <li className="text-success font-bold text-lg">Học vấn</li>
        </ul>
      </div>
    </>
  );
}
