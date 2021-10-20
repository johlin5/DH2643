import React from 'react';
import PrimaryButton from './PrimaryButton';
import { PURPLE, RED, GREEN } from "../app/theme";

const Image: React.FC<any> = ({imageUpload}:any) => {

    return (
        <div>
            <input accept="image/*" type="file" name={"Upload image"} onChange={imageUpload}/>
        </div>
    )
}

export default Image;