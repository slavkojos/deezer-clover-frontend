import { Flex, Text, Image } from '@chakra-ui/react';
import { normalTimeFormat } from '../utils/functions';

export default function TrackItem({ track, onOpen, index, setSelectedTrack }) {
  return (
    <Flex
      borderBottom="1px"
      borderColor="gray.500"
      width="100%"
      justify="space-between"
      align="center"
      my={1}
      py={1}
      onClick={() => {
        setSelectedTrack(index);
        onOpen();
      }}
      transition=".2s ease"
      cursor="pointer"
      _hover={{
        backgroundColor: 'hover',
      }}
    >
      <Flex align="center">
        <Image src={track.album.cover_small} mr={4} />
        <Text>{track.title_short}</Text>
      </Flex>
      <Text>{normalTimeFormat(track.duration)}</Text>
    </Flex>
  );
}
