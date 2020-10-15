import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';

function FileUploader(props) {


    // const NewEventForm = (props) => {
    //     const [file, setFile] = useState('');
    //     const [fileName, setFileName] = useState('Choose File');
    //     const [fileUrl, setFileUrl] = useState('');
    //     const [title, setTitle] = useState('');
    //     const [description, setDescription] = useState('');
    //     const [uploadedFile, setUploadedFile] = useState({});
    //     const [message, setMessage] = useState('');
    //     const [highlight, setHighlight] = useState(false);
    //     const [uploadPercentage, setUploadPercentage] = useState(0);
    //     const [imagePreview, setImagePreview] = useState('');
    //     const user_id = props.store.user.id;
    //     const date = new Date();
    //     const newEvent = {
    //         date: date,
    //         user_id: user_id,
    //         title: title,
    //         description: description,
    //         //file_url: uploadedFile.filePath,
    //         file: file,
    //         highlight: highlight
    //     }
    // }

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setFileUrl(`/uploads/${e.target.files[0].name}`);
        imageHandler(e.target.files[0]);
    };

    console.log('images', images);

    return (
        <div>
            <input
                type='file'
                className='custom-file-input'
                id='customFile'
                onChange={onChange}
            />
            <button onClick={() => addImage()}>Upload Image</button>
            <div>
                <img src={imagePreview} alt="" id="img" />
            </div>
        </div>
    )
}

export default FileUploader;