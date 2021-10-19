import React from 'react';
import PrimaryButton from './PrimaryButton';
import { PURPLE, RED, GREEN } from "../app/theme";

const Image: React.FC<any> = ({imageUpload}:any) => {

    return (
        <PrimaryButton text="Upload image" color={PURPLE} variant="h6" height="48px" onClick={imageUpload}/>
    )
}

export default Image;