import { SetStateAction, useState } from "react";
import { stateToHTML } from "draft-js-export-html";
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditor: React.FC = (props): JSX.Element => {
    // const state = {editorState: EditorState.createEmpty()}
    // const [editorState, setEditorState] = useState(EditorState.createEmpty());
    // const onEditorStateChange = (editorState: SetStateAction<EditorState>) => {
    //     return setEditorState(editorState)
    // };

    return ( 
        <Editor
            
            wrapperClassName="wrapper-class"
            editorClassName="editer-class"
            toolbarClassName="toolbar-class"
            
        />
    )
}

export default TextEditor;