import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from '../constants'
const languages = Object.entries(LANGUAGE_VERSIONS)
const LanguageSelector = ({ language, setLanguage, setValue }) => {
    return (
        <Box ml={2} mb={3} display={"flex"} mt={2}
        justifyContent={"space-between"} px={3}
        >
            <Text mt={2}> Language</Text>
            <Menu>
                <MenuButton as={Button} fontWeight={"normal"} variant={"outline"}>
                    {language}
                </MenuButton>
                <MenuList>
                    {
                        languages.map(([lang, version]) => {
                            return <MenuItem key={lang}
                                onClick={() => {
                                    setLanguage(lang)

                                    setValue(CODE_SNIPPETS[lang])
                                }}
                            >
                                {lang}
                                &nbsp;
                                <Text color={"gray.600"} as={"span"}>{version}</Text>
                            </MenuItem>
                        })
                    }
                </MenuList>
            </Menu>
        </Box>
    )
}

export default LanguageSelector