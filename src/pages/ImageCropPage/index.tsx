import React, {useState} from 'react';
import ReactCrop, { type Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


const ImageCropPage:React.FC = () => {

  const [crop, setCrop] = useState<Crop>();

  return (
    <>
      <ReactCrop crop={crop} onChange={c => setCrop(c)}>
        <img width={500} src={'/public/fish.png'} />
      </ReactCrop>
      <div>
        {JSON.stringify(crop)}
      </div>
    </>
  );
};

export default ImageCropPage;
