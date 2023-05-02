import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      bg="gray.100"
      w="100%"
      px={6}
      py={8}
      justify="space-between"
      alignItems="center"
    >
      <Box>
        {/* <Image src="company-logo.png" alt="Company Logo" /> */}
        <Text mt={2} color="gray.500" fontSize="sm">
          123 Main Street, Anytown, USA 12345
        </Text>
      </Box>
      <Box>
        <Text mb={2} fontWeight="bold" fontSize="lg">
          Important Links
        </Text>
        <Flex flexDirection="column">
          <Link href="/About-us" color="gray.600" _hover={{ color: "blue.600" }} mb={2}>
            About Us
          </Link>
          <Link href="#" color="gray.600" _hover={{ color: "blue.600" }} mb={2}>
            Careers
          </Link>
          <Link href="#" color="gray.600" _hover={{ color: "blue.600" }} mb={2}>
            Contact Us
          </Link>
          <Link href="#" color="gray.600" _hover={{ color: "blue.600" }}>
            Privacy Policy
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Footer;
