import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <>
      <div className="text-white text-center w-full bg-primary-main h-24 flex items-center justify-center text-xl mt-4">
        <div className="flex gap-2 items-center">
          <CopyrightIcon />
          <p>2024 AIVision All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
