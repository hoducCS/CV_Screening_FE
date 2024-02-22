"use client";

import { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { FilePondFile } from "filepond";
import "./upload.css";
import { Button } from "@mui/material";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <>
      <div className="flex flex-row bg-background p-10 rounded-lg">
        <div className="w-1/2 flex justify-center">
          <div className="w-4/5">
            <p
              className="text-primary font-bold text-center text-lg mb-8"
              style={{}}
            >
              RESUME
            </p>

            <FilePond
              required
              files={files}
              allowMultiple={true}
              instantUpload={false}
              credits={false}
              name="files"
              labelIdle='<div class="flex flex-col items-center gap-3">
                            <p>Drag & Drop here</p>
                            <p>or</p>
                            <span class="flex flex-row gap-4 items-center  bg-blue-700 hover:bg-blue-600 py-2 px-8 text-white font-bold no-underline rounded-3xl cursor-pointer">Select files</span>
                        </div>'
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center border-l-2 border-solid border-gray-200">
          <div className="w-4/5">
            <p className="text-primary font-bold text-center text-lg mb-8">
              JOB DESCRIPTION
            </p>
            <FilePond
              required
              files={files}
              allowMultiple={false}
              instantUpload={false}
              credits={false}
              name="files"
              labelIdle=' <div class="flex flex-col items-center gap-3">
                            <p>Drag & Drop here</p>
                            <p>or</p>
                            <span class="flex flex-row gap-4 items-center  bg-blue-700 hover:bg-blue-600 py-2 px-8 text-white font-bold no-underline rounded-3xl cursor-pointer">Select files</span>
                          </div>'
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-5 mt-5">
        <Button
            className="rounded-2xl"
            variant="text"
            sx={{ paddingX: '2rem', color:'#264eca'}}
          >
            Cancel 
          </Button>
          <Button
            className="rounded-2xl"
            variant="outlined"
            sx={{ paddingX: '2rem', color:'#264eca'}}
          >
            Extract CV   
          </Button>
          <Button
            className="rounded-2xl"
            variant="contained"
            sx={{backgroundColor: '#264eca !important', paddingX: '2rem'}}
          >
            Match
          </Button>
      </div>
    </>
  );
}
