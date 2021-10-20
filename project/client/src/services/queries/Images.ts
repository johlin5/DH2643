import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";

export const UPLOAD_IMAGE = gql`
    mutation uploadImage($image: Upload!, $id: ID!) {
        upLoadImage(file: $file, id: $id) {
            filename
        }
    }
`;

export const FETCH_IMAGE_BY_ID = gql`
    query Query($findImageByID: ID!) {
        findImageByID(id: $findImageByID) {
            file
        }
    }
`

export const uploadImage = (image:any) => {
    const [upload, { data, loading, error }] = useMutation(UPLOAD_IMAGE);

}

export const loadImage = (id:any) => {
    const [load, { data, loading, error }] = useMutation(FETCH_IMAGE_BY_ID);
}