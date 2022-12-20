import React, {ChangeEvent, useRef, useState} from 'react';
import {Button} from "@mui/material";

export const FileUploadInput = ({setBase64}: any) => {
    const [file, setFile] = useState<File>();

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleUploadClick = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        const file = e.target.files[0];
        setFile(file);
        if (file.size > 2000000) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            setBase64(reader.result as string);
        };

        reader.onerror = error => {
            console.log("Error: ", error);
        };
    };
    const textStyle: any = {width: '150px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline-block', overflow: 'hidden'}
    return (
        <div>
            <Button onClick={handleUploadClick} style={textStyle}>
                {file ? `${file.name}` : 'Click to select'}
            </Button>
            <input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                style={{display: 'none'}}
            />
        </div>
    );
};

