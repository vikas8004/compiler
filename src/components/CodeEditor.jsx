import { Box, HStack, Text } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'
import React, { useRef, useState } from 'react'
import LanguageSelector from './LanguageSelector';
import Output from './Output';

const CodeEditor = () => {
    const [value, setValue] = useState(`\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`);
    const [language, setLanguage] = useState("javascript");
    const editorRef = useRef();
    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus(); // Focus the editor

    }

    return (
        <Box>
            <HStack alignItems={"flex-start"}>
                <Box width={"50%"}>
                    <LanguageSelector language={language} setLanguage={setLanguage} setValue={setValue} />
                    <Editor
                        loading="loading editor..." height="90vh" defaultLanguage="javascript"
                        defaultValue={`\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`}
                        value={value}
                        language={language}
                        onChange={(value) => setValue(value)}
                        onMount={onMount}
                    />

                </Box>
                <Output sourceCode={value} language={language} />
            </HStack>
        </Box>
    )
}

export default CodeEditor