import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { executeCode } from '../runCode';

const Output = ({ sourceCode, language }) => {
    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState(null);
    const runCode = async () => {

        if (!sourceCode) return;
        try {
            setLoading(true);
            const res = await executeCode(language, sourceCode);
            if (res) {
                setOutput(res.run)
                setLoading(false);
            }

        } catch (error) {
            setLoading(false)
            console.log(error);

        }
    }
    console.log(output);

    return (
        <Box width={"50%"}>
            <HStack mt={2} pr={"2"} justifyContent={"space-between"}
                direction={"row-reverse"}>
                <Button
                    variant={"outline"}
                    colorScheme={"green"}
                    fontWeight={"normal"}
                    onClick={runCode}
                    isLoading={loading}

                >
                    Run Code
                </Button>
                

            </HStack>
            <Box height={"90vh"}
                p={2}

            >
{
    !output&&<Text>Click run code button to see the output..</Text>
}
                {
                    output && <Text>{output.stdout}</Text>

                }
                {
                    output && output.stderr && <Text color={"red"}>{output.stderr}</Text>
                }
            </Box>
        </Box>
    )
}

export default Output