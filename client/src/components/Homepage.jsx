import React from 'react'
import {Heading} from "@chakra-ui/react";
import {InputForm} from "./InputForm";

export default function Homepage() {
  return (
    <>
          <Heading as="h3" size="xl" m={ '3% 0% 2% 0%' }>
        URL Shortener
          </Heading>
          <InputForm />
    </>
  )
}
