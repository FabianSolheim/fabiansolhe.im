import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  HStack,
  Box,
  Text,
  Link,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';
import './components/styling/wave.css';
import container from './components/styling/framerAnimations';
import { motion } from 'framer-motion';




const HeroText = () => {
  const [isNotMobile] = useMediaQuery('(min-width: 600px)');
  return (
    <>
      <Box mt={isNotMobile ? 200 : 153} position="relative" w={[300, 400, 500]}>
        <Heading mb={4}>
          Hei
          <span className="wave">šš¼</span>
        </Heading>
        <HStack>
          <Text fontSize="xl" style={{ display: 'inline-block' }}>
            Jeg er{' '}
            <Text style={{ fontWeight: 'bold', display: 'inline-block' }}>
              Fabian Solheim
            </Text>
            . Jeg er en 21 Ć„r gammel informatikkstudent, og utvikler.
          </Text>
        </HStack>
      </Box>

      <Box w={390} mt={10}>
        <Text fontSize="xl">
          Ta gjerne en titt pĆ„{' '}
          <Link
            as={RouterLink}
            to="/prosjekter"
            style={{ textDecoration: 'underline' }}
          >
            mine prosjekter
          </Link>
          , min{' '}
          <Link
            href="https://www.linkedin.com/in/FabianSolheim"
            style={{ textDecoration: 'underline' }}
          >
            LinkedIn
          </Link>
          , eller min{' '}
          <Link
            href="https://www.github.com/FabianSolheim"
            style={{ textDecoration: 'underline' }}
          >
            Github
          </Link>
          .
        </Text>
      </Box>
    </>
  );
};

const Index = () => {
  useEffect(() => {
    document.title = 'šš¼ Hjem | fabiansolhe.im';
  }, []);

  return (
    <>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={container}>
          <HeroText />
      </motion.div>
    </>
  );
};
export default Index;
