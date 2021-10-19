import { gql } from "@apollo/client";

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